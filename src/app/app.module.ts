import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { capitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: 
  [
    //Español
    { provide: LOCALE_ID, useValue: 'es' } ,
    //Ingles
    //{ provide: LOCALE_ID, useValue: 'en' } 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
