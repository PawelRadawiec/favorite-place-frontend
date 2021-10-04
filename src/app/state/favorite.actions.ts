import { Favorite } from "../models/favorite.model";

export namespace FavoriteActions {

    export class GetAll {
        static readonly type = '[Favorite] GetAll';
        constructor() {

        }
    }

    export class FavoritesLoaded {
        static readonly type = '[Favorite] FavoritesLoaded';

        constructor(public favorites: Favorite[]) {

        }
    }

    export class Create {
        static readonly type = '[Favorite] Create';

        constructor(public favorite: Favorite) {

        }
    }

    export class Delete {
        static readonly type = '[Favorite] Delete';
        constructor(public id: string) {

        }
    }

}