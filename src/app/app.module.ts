import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountsModule } from './accounts/accounts.module';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { AccountsService } from './services/accounts.services';
import { HttpClientModule } from '@angular/common/http';

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
           AccountsModule,
           HttpClientModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
