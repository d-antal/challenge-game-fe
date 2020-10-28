import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  private baseUrl = 'http://localhost:8080/lottoland/rock-paper-scissors/api/v1';

  constructor(private http: HttpClient) { }

  createRound(gameId: number, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/games/${gameId}/rounds`, value);
  }

  getRoundsByGame(gameId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/games/${gameId}/rounds`);
  }

  getResult(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rounds/total`);
  }

}
