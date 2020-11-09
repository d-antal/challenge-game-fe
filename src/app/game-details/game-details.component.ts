import { Component, ViewChild } from '@angular/core';

import { GameService } from '../game.service';
import { Game } from '../Game';
import { RoundService } from '../round.service';
import { Round } from '../Round';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  gameId: any;
  rounds = new Array<Round>();
  game = new Game();
  randomChoose: String;
  tableColumns: string[] = ['id', 'firstPlayerChose', 'secondPlayerChose', 'result'];
  dataSource = new MatTableDataSource<Round>(this.rounds);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  started: boolean;
  constructor(private gameService: GameService, private roundService: RoundService, private router: Router) { }

  loadRounds(gameId: number) {
    this.roundService.getRoundsByGame(gameId).subscribe(data => {
      console.log("getRounds: ", data)
      this.rounds = data;
      this.dataSource = new MatTableDataSource(this.rounds);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.log("getRounds error: ", error));
  }

  getRound(): Round {
    let round = new Round();
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    round.firstPlayerChose = randomChoice;
    round.secondPlayerChose = "ROCK";
    return round;
  }

  playRound() {
    this.roundService.createRound(this.gameId, this.getRound()).subscribe(data => {
      console.log("new round: ", data)
      this.loadRounds(this.gameId);
    }, error => console.log("save new round error: ", error));
  }

  startGame() {
    this.gameService.createGame(this.game).subscribe(data => {
      console.log("new game: ", data)
      this.gameId = data["id"];
      this.started = true;
      this.loadRounds(this.gameId);
    }, error => console.log("save new game error: ", error));
  }

  getResultSring(result: String) {
    return result === "DRAW" ? "Draw" : (result === "FIRST_PLAYER_WON" ? "1st Player" : "2nd Player");
  }

  goToTotal() {
    this.router.navigate(["/lottoland/rock-paper-scissors/rounds-total"]);
  }

}
