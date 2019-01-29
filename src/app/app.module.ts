import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'add/:id', component: AddComponent },
  {path: 'delete/:id', component: DeleteComponent },
  {path: 'wishlist', component: WishlistComponent },
  {path: 'home', component: HomeComponent },
  {path: 'update', component: UpdateComponent},
  {path: 'search/:value', component: SearchComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    AddComponent,
    DeleteComponent,
    HomeComponent,
    UpdateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbAlertModule,
    RouterModule.forRoot(routes)
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
