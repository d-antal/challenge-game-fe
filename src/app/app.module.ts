import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameHistoryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
