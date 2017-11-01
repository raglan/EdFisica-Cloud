import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
class Umrm{
  peso:number;
  Max: number;
}
@Component({
  selector: 'page-calculadora-1rm',
  templateUrl: 'calculadora-1rm.html',
})
export class Calculadora1RmPage {
  umrm:Umrm;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.umrm = new Umrm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calculadora1RmPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: '1 Rm ',
      message: frase,
      buttons: [
        
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  calcula_umrm(){
        
  }

}
