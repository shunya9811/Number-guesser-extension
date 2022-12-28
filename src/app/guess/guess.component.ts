import { Component, Input, OnInit  } from '@angular/core';
import { Guess } from '../models/guess';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit{
  @Input() player1Num: number;
  @Input() player2Num: number;

  guesses: Guess[] = []; 

  constructor() {}

  ngOnInit(){
  }

  ngOnChanges(): void{
    if (this.guesses.length <= 4){
      let guess = new Guess(this.player1Num, this.player2Num); 
      this.guesses.push(guess);
    }
  }
}
