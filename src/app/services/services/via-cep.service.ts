import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<any> {

    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
      throw new Error('CEP inválido');
    }

    return this.http.get(`${this.apiUrl}/${cep}/json/`);
  }
}