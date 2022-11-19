import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AppHomeComponent,
    PlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
