import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
