import { Favorite } from '../models/favorite.model';

export interface FavoriteStateModel {
  favorite: Favorite;
  favorites: Favorite[];
}

export const defaultFavoriteStateModel: FavoriteStateModel = {
  favorite: null,
  favorites: [],
};
