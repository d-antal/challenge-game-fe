import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameHistoryComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
   HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
