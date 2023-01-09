import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  // 表示する内容の切り替えを行う
  currentPlayer: String = "player1";

  player1Num: number;
  player2Num: number;

  twoAnswered: boolean = false;
  isCollect: boolean = false;

  count: number = 0;
  sumOfDifference: number = 0;

  constructor() {}

  ngOnInit(){
  }

  // player1の提出
  onSubmit(input: string): void {
    let num = Number(input);
    if (num % 1 == 0 && num >= 1 && num <= 100){
      this.player1Num = num;
      this.currentPlayer = "player2";
      console.log(this.player1Num);
    } 
    else {
      alert("1~100までの整数を入力してください");
    }
  }

  // player2の解答
  onAnswer(input2: string): void {
    let num = Number(input2);

    // 同じ数字なら棄却
    if (num == this.player2Num){
      return;
    }


    if (num % 1 == 0 && num >= 1 && num <= 100){
      this.player2Num = num;
      this.isCollect = this.player1Num - num == 0;
      this.twoAnswered = true;
      this.count += 1;
      this.sumOfDifference += Math.abs(this.player1Num - num);
    }
    else{
      alert("1~100までの整数を入力してください");
    }
  }

  //クリア後
  goBack(){
    this.twoAnswered = false;
    this.isCollect = false;
    this.currentPlayer = "player1";
    this.count = 0;
    this.sumOfDifference = 0;
  }
}
