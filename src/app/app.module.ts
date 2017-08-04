import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertDirective } from './directives/alert.directive';
import { AuthenticationService, AlertService } from './services/index'

const routes: Routes = [
    { path: 'home',component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
