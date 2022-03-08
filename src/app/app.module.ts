import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { FirstuppercasePipe } from './pipes/firstuppercase.pipe';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { MoviesPage } from './movies/movies.page';
import { ProfilePage } from './pages/profile.page';
import { FavouritesPage } from './pages/favourites.page';
import { MoviesdetailPage } from './movies/moviesdetail.page';
import { MoviecardComponent } from './components/moviecard.component';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuard } from './auth/auth.guard';




const routes: Route[] = [
  {
    path:"movies",
    component: MoviesPage,
    canActivate:[AuthGuard]
  },
  {
    path:"movies/:id",
    component:MoviesdetailPage,
    canActivate:[AuthGuard]
  },
  {
    path:"profile",
    component: ProfilePage,
    canActivate:[AuthGuard]
  },
  {
    path:"favourites",
    component: FavouritesPage,
    canActivate:[AuthGuard],
  },
  {
    path:"**",
    redirectTo:"/login"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilePage,
    FavouritesPage,
    MoviecardComponent,
    FirstuppercasePipe,
    MoviesPage,
    MoviesdetailPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
