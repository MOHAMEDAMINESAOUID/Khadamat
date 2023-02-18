import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PrincipeComponent } from './principe/principe.component';
import { SignupComponent } from './signup/signup.component';

import { PrincipalComponent } from './principal/principal.component';

import { ServicePComponent } from './service-p/service-p.component';
import { ServiceTComponent } from './service-t/service-t.component';

import { BricoleurComponent } from './bricoleur/bricoleur.component';

import {ReactiveFormsModule} from "@angular/forms";
import { ServiceDComponent } from './service-d/service-d.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PrincipeComponent,
    SignupComponent,

    PrincipalComponent,

    ServicePComponent,
    ServiceTComponent,

    BricoleurComponent,
     ServiceDComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
