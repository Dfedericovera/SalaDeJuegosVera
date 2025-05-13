import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  supabase = createClient(environment.apiUrl, environment.publicAnonKey);

  constructor() { }
}
