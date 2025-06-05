import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: string | undefined = "";

  supabase = createClient(environment.apiUrl, environment.publicAnonKey);

  constructor() {
    this.setUserEmail();
  }


  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      throw new Error(error.message);
    }
    this.setUserEmail();

    return data;
  }

  private setUserEmail() {
    this.getUser().then(user => {
      this.usuario = user.email;
      console.log('Usuario autenticado:', this.usuario);
    }).catch(err => {
      console.error('Error fetching user:', err);
    });
  }

  async register(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async logout() {
    const { error } = await this.supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (error || !data.user) {
      throw new Error(error?.message || 'No user is logged in');
    }
    return data.user;
  }

  async isAuthenticated(): Promise<boolean> {
    const { data: { session } } = await this.supabase.auth.getSession();
    return !!session;
  }


}
