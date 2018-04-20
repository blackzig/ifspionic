import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

    /*
    Para construir um triângulo é necessário que a medida de 
    qualquer um dos lados seja MENOR que a soma das medidas dos outros dois 
    e MAIOR que o valor absoluto da diferença entre essas medidas.
    */


    if ((side1 < side2 + side3) && (side1 > side2 - side3)) {
      this.IsATriangule()
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

  IsATriangule() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!!!',
      subTitle: 'Esses valores formam um triângulo.',
      buttons: ['Fechar']
    });
    alert.present();
  }

}
