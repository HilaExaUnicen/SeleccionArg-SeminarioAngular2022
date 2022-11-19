import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { ChampionsComponent } from './champions/champions.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';
import { StadiumsComponent } from './stadiums/stadiums.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "players",
    pathMatch: "full"
  },
  {
    path:"players",                     
    component: AppHomeComponent
  },
  {
    path: "stadiums",
    component: StadiumsComponent
  },
  {
    path: "champions",
    component: ChampionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
