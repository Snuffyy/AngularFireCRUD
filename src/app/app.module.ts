import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
// Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
// Components
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DonorsComponent} from './components/donors/donors.component';
import {AddDonorComponent} from './components/add-donor/add-donor.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
// Service imports
import {DonorService} from './services/donor.service';
// Environment
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';
import { EditDonorComponent } from './components/edit-donor/edit-donor.component';

const appRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'add-donor', component: AddDonorComponent
  },
  {
    path: 'edit-donor/:id', component: EditDonorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DonorsComponent,
    AddDonorComponent,
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent,
    EditDonorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    DonorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
