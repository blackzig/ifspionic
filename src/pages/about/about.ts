import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  side1: string;
  side2: string;
  side3: string;

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  itsATriangle() {
    let sides = {
      side1: this.side1,
      side2: this.side2,
      side3: this.side3
    }

    const values = Object.keys(sides).map(key => sides[key]).map(x => x);

    let side1 = Number(values[0])
    let side2 = Number(values[1])
    let side3 = Number(values[2])

    let uniqueValues = []
    /*
    Para construir um triângulo é necessário que a medida de 
    qualquer um dos lados seja MENOR que a soma das medidas dos outros dois 
    e MAIOR que o valor absoluto da diferença entre essas medidas.
    */


    if ((side1 < side2 + side3) && (side1 > side2 - side3)) {
      if ((side1 === side2) && (side1 === side3)
        && (side2 === side3)) {
        this.equilateral()
      }
      else if ((side1 !== side2) && (side1 !== side3)
        && (side2 !== side3)) {
        this.scalene()
      }
      else {
        for (let i = 0; i < values.length; i++) {
          if (i === 0) {
            uniqueValues.push(values[i])
          } else {
            for (let j = 0; j < uniqueValues.length; j++) {
              if (uniqueValues[j] !== values[i]) {
                uniqueValues.push(values[i])
                break
              }
            }
          }
        }

        if (uniqueValues.length === 2) {
          this.isosceles()
        }
      }
      console.log(uniqueValues)
    } else {
      this.NotIsATriangule()
    }

  }

  NotIsATriangule() {
    let alert = this.alertCtrl.create({
      title: 'Aviso!!!',
      subTitle: 'Esses valores não formam um triângulo.',
      buttons: ['Fechar']
    });
    alert.present();
  }

  equilateral() {
    let alert = this.alertCtrl.create({
      title: 'Aviso!!!',
      subTitle: 'Essas medidas formam um triângulo equilátero.',
      buttons: ['Fechar']
    });
    alert.present();
  }

  isosceles() {
    let alert = this.alertCtrl.create({
      title: 'Aviso!!!',
      subTitle: 'Essas medidas formam um triângulo isósceles.',
      buttons: ['Fechar']
    });
    alert.present();
  }

  scalene() {
    let alert = this.alertCtrl.create({
      title: 'Aviso!!!',
      subTitle: 'Essas medidas formam um triângulo escaleno.',
      buttons: ['Fechar']
    });
    alert.present();
  }


}
