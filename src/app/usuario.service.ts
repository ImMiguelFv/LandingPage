import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = '/api/saveUser'; // Ruta de tu función sin servidor en Vercel

  constructor(private http: HttpClient) {}

  guardarUsuario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
