import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly url = 'http://localhost:8080/app/favorite';

  constructor(private http: HttpClient) { }

  create(favorite: Favorite) {
    return this.http.post<Favorite>(`${this.url}`, favorite);
  }

  getAll() {
    return this.http.get<Favorite[]>(`${this.url}/search`);
  }

  getById(id: string) {
    return this.http.get<Favorite>(`${this.url}/${id}`);
  }

  delete(id: string) {
    return this.http.delete<string>(`${this.url}/${id}`);
  }

}
