import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogInComponent} from './views/sessions/log-in/log-in.component';
import {SignUpComponent} from './views/sessions/sign-up/sign-up.component';
import {ThankYouPageComponent} from './views/sessions/thank-you-page/thank-you-page.component';
import {ResetPasswordComponent} from './views/sessions/reset-password/reset-password.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {CKEditorModule} from "ng2-ckeditor";
import {HomeComponent} from './views/home/home.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NotificationService} from "./shared/services/notification.service";

import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {CKEditorModule} from 'ckeditor4-angular';
import {RecentFilesComponent} from './views/recent-files/recent-files.component';
import {DataService} from "./shared/services/data.service";
import { Home2Component } from './views/home2/home2.component';
import { Home3Component } from './views/home3/home3.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'thank-you-page', component: ThankYouPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recent-files', component: RecentFilesComponent},
  {path: 'home2', component: Home2Component},
  {path: 'home3', component: Home3Component},
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ThankYouPageComponent,
    ResetPasswordComponent,
    HomeComponent,
    Home2Component,
    RecentFilesComponent,
    Home2Component,
    Home3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CKEditorModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule

  ],
  providers: [NotificationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
