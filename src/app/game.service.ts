import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/lottoland/rock-paper-scissors/api/v1/games';

  constructor(private http: HttpClient) { }

  getGame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGame(game: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, game);
  }

}

