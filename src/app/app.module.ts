import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountsModule } from './accounts/accounts.module';
import { MainCardsComponent } from './components/main-cards/main-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCardsComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
        MaterialExampleModule,
          AppRoutingModule,
           AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
