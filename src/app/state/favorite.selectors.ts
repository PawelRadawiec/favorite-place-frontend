import { Selector } from '@ngxs/store';
import { FavoriteStateModel } from './favorite-state.model';
import { FavoriteState } from './favorite.state';

export class FavoriteSelectors {
  @Selector([FavoriteState])
  static favorite(state: FavoriteStateModel) {
    return state.favorite;
  }

  @Selector([FavoriteState])
  static favorites(state: FavoriteStateModel) {
    return state.favorites;
  }
}
