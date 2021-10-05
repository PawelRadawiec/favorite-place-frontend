import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ButtonComponent } from './components/button/button.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoriteState } from './state/favorite.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TypeofPipe } from './pipes/typeof.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    ButtonComponent,
    FavoriteListComponent,
    TypeofPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    GoogleMapsModule,
    HttpClientModule,
    NgxsModule.forRoot([FavoriteState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
