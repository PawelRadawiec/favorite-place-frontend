import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Favorite } from "../models/favorite.model";
import { FavoriteActions } from "../state/favorite.actions";
import { FavoriteState } from "../state/favorite.state";

@Injectable()
export class FavoriteListResolver implements Resolve<Favorite[]> {

    constructor(private store: Store) {

    }

    resolve(): Observable<Favorite[]> {
        return this.store.dispatch(new FavoriteActions.GetAll()).pipe(
            map(() => this.store.selectSnapshot(FavoriteState))
        );
    }

}