import { Action, State, StateContext, Store } from "@ngxs/store";
import { FavoriteService } from "../service/favorite.service";
import { defaultFavoriteStateModel, FavoriteStateModel } from "./favorite-state.model";
import { FavoriteActions } from "./favorite.actions";
import { mergeMap } from 'rxjs/operators'
import { Injectable } from "@angular/core";


@State<FavoriteStateModel>({
    name: 'favorite',
    defaults: defaultFavoriteStateModel
})
@Injectable()
export class FavoriteState {

    constructor(
        private store: Store,
        private favoriteService: FavoriteService
    ) {

    }

    @Action(FavoriteActions.Create)
    create(context: StateContext<FavoriteStateModel>, action: FavoriteActions.Create) {
        return this.favoriteService.create(action.favorite).pipe(
            mergeMap(() => this.store.dispatch(new FavoriteActions.GetAll()))
        )
    }

    @Action(FavoriteActions.GetAll)
    getAll(context: StateContext<FavoriteStateModel>) {
        return this.favoriteService.getAll().pipe(
            mergeMap(response => this.store.dispatch(new FavoriteActions.FavoritesLoaded(response)))
        )
    }

    @Action(FavoriteActions.FavoritesLoaded)
    favoritesLoaded(context: StateContext<FavoriteStateModel>, action: FavoriteActions.FavoritesLoaded) {
        context.patchState({
            favorites: action.favorites
        })
    }

}