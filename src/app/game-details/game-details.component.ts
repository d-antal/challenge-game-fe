import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteConfigLoadStart } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../Game';
import { RoundService } from '../round.service';
import { Round } from '../Round';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  id: any;
  rounds: Round[]
  game = new Game();
  randomChoose: String;

  constructor(private route: ActivatedRoute, private router: Router,
    private gameService: GameService, private roundService: RoundService) { }

  ngOnInit() {
    this.startGame();
  }

  restart() {
    this.startGame();
  }

  loadRounds(id: number) {
    this.roundService.getRoundsByGame(this.id).subscribe(data => {
      console.log("getRounds: ", data)
      this.rounds = data;
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
    this.roundService.createRound(this.id, this.getRound()).subscribe(data => {
      console.log("new round: ", data)
      this.loadRounds(this.id);
    }, error => console.log("save new round error: ", error));
  }

  startGame() {
    this.gameService.createGame(this.game).subscribe(data => {
      console.log("new game:", data)
      this.id = data["id"];
      this.loadRounds(this.id);
    }, error => console.log("save new game error: ", error));
  }

}



