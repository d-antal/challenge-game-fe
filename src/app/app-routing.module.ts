import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameHistoryComponent } from './game-history/game-history.component';

const routes: Routes = [

  { path: 'lottoland/rock-paper-scissors/start-game', component: GameDetailsComponent },
  { path: 'lottoland/rock-paper-scissors/rounds-total', component: GameHistoryComponent },
  { path: '', redirectTo: 'lottoland/rock-paper-scissors/start-game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

