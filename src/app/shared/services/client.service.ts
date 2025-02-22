import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:3000/clients'; //Replace with proper API endpoint

  constructor(private http: HttpClient) { }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addClient(client: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, client);
  }

  updateClient(id: string, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, client);
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getClientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getClientCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/dash/count`);
  }
}
