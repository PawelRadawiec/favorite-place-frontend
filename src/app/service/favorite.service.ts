import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../models/favorite.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly url = 'localhost:8080/app/favorite';

  constructor(private http: HttpClient) { }

  create(favorite: Favorite) {
    return this.http.post<Favorite>(`${this.url}`, favorite);
  }

  getAll() {
    return this.http.get<Favorite[]>(this.url);
  }

  getById(id: string) {
    return this.http.get<Favorite>(`${this.url}/${id}`);
  }

}
