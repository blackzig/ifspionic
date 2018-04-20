import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  generateRandom() {

    let numbers = []

    for (let i = 0; i < 10; i++) {
      let number = Math.round(Math.random() * 100 + 1);
      numbers.push(number)
    }

    console.log(numbers)
    this.maxAndMin(numbers)
  }

  maxAndMin(numbers) {

    let maxNumber = Math.max.apply(Math, numbers);
    console.log(maxNumber)

    let minNumber = Math.min.apply(Math, numbers);
    console.log(minNumber)
  }

}
