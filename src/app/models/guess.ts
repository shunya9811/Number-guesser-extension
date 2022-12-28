import { Output } from "./output";

export class Guess{
    correctNumber : number;
    guess: number;
    differece: number;
    distanceMessage: string;
    imgUrl: string;
    color: string;
  
    constructor(correctNumber : number, guess: number) {
        this.correctNumber  = correctNumber ;
        this.guess = guess;
        this.differece = Math.abs(correctNumber - guess);
        this.judge();
    }

    output: {[key: string]: Output} = {
        'offBy0': {"img": "https://cdn.pixabay.com/photo/2017/08/16/22/27/thumbs-up-2649310_960_720.jpg", "message": "正解おめでとう", "color": "black"},
        'offBy1-2': {"img": "https://cdn.pixabay.com/photo/2018/01/14/23/10/bored-3082828_960_720.jpg", "message": "1~2離れてるよ", "color": "blue"},
        'offBy3-4': {"img": "https://cdn.pixabay.com/photo/2018/01/14/23/10/bored-3082828_960_720.jpg", "message": "3~4離れてるよ", "color": "green"},
        'offBy5-9': {"img": "https://cdn.pixabay.com/photo/2018/01/14/23/11/confused-3082831_960_720.jpg", "message": "5~9離れてるよ", "color": "lime"},
        'offBy10-24': {"img": "https://cdn.pixabay.com/photo/2018/02/02/21/44/excited-3126453_960_720.jpg", "message": "10~24離れてるよ", "color": "yellow"},
        'offBy25-49': {"img": "https://cdn.pixabay.com/photo/2018/01/04/21/13/young-3061646_960_720.jpg", "message": "25~49離れてるよ", "color": "orange"},
        'offBy50+': {"img": "https://cdn.pixabay.com/photo/2017/10/11/08/02/scared-2840243_960_720.jpg", "message": "50以上離れてるよ", "color": "red"},
    }

    judge(): void{
        let key;
        if (this.differece == 0) key = "offBy0";
        else if (this.differece < 3) key = "offBy1-2";
        else if (this.differece < 5) key = "offBy3-4";
        else if (this.differece < 10) key = "offBy5-9";
        else if (this.differece < 25) key = "offBy10-24";
        else if (this.differece < 50) key = "offBy25-49";
        else key = "offBy50+";
    
        this.imgUrl = this.output[key].img;
        this.distanceMessage = this.output[key].message;
        this.color = this.output[key].color;
      }
}