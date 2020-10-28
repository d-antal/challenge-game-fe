import { Component, OnInit } from '@angular/core';
import { RoundService } from '../round.service';
import { Result } from '../Result';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit {
  count: Number;
  result: Result;
  tableColumns: string[] = ['winner', 'wins'];
  totalWins: TotalWin[];

  constructor(private roundService: RoundService,private router: Router) { }

  ngOnInit() {
    this.getResult();
  }

  getResult() {
    this.roundService.getResult().subscribe(data => {
      console.log("get total result: ", data)
      this.result = data;     
      this.totalWins=this.getTotalWins(this.result);
    }, error => console.log("getResult error: ", error));
  }

  getTotalWins(result:Result){
    return this.totalWins=[
      {winner: "1st Player", wins: result.firstWins},
      {winner: "2nd Player", wins: result.secondWins},
      {winner: "Draw", wins: result.draws},
    ];  
  }

  goToGame() {
    this.router.navigate(["lottoland/rock-paper-scissors/start-game"]);
  }
}
export interface TotalWin{
  winner: string;
  wins: number;
}