import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FavoriteListResolver } from './resolvers/favorite-list.resolver';

const routes: Routes = [
  {
    path: 'app-favorite/favorite',
    resolve: [FavoriteListResolver],
    component: FavoriteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  providers: [FavoriteListResolver],
  exports: [RouterModule],
})
export class AppRoutingModule {}
