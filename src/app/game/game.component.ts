import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {
  }

  score: number = 0

  currentNumber: number = 0
  nextNumber: number = 0
  user: string = ''

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1
  }

  guess(guess:string){
    if (guess == "higher") {
      if (this.currentNumber < this.nextNumber) {
        this.score++
      }
      else {
        this.score = 0
      }
    }
    else if (guess == "lower") {
      if (this.currentNumber > this.nextNumber) {
        this.score++
      }
      else {
        this.score = 0
      }
    }
    this.currentNumber = this.nextNumber
    this.nextNumber = this.getRandomNumber()
  }


  ngOnInit(): void {
    this.currentNumber = this.getRandomNumber()
    this.nextNumber = this.getRandomNumber()
  }

}
