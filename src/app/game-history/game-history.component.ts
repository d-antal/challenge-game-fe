import { Component, OnInit } from '@angular/core';
import { RoundService } from '../round.service';
import { Result } from '../Result';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit {
  count: Number;
  result: Result;


  constructor(private roundService: RoundService) { }

  ngOnInit() {
    this.getResult();
  }

  getResult() {
    this.roundService.getResult().subscribe(data => {
      console.log("get total result: ", data)
      this.result = data;
    }, error => console.log("getResult error: ", error));
  }

}
