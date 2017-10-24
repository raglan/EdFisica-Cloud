import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CalculadoraFcmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Fcm{
  idade:number;
  sexo;
}

@Component({
  selector: 'page-calculadora-fcm',
  templateUrl: 'calculadora-fcm.html',
})
export class CalculadoraFcmPage {
  fcm:Fcm
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.fcm= new Fcm()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraFcmPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'FCM ',
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

  calcula_fcm(){
        if(this.fcm.sexo == "masc"){
          freq = (220 - this.fcm.idade);
          this.showConfirm("Sua frequencia cardiaca maxima é: "+ freq);
        }
        else if(this.fcm.sexo == "fem"){
          var freq = (226 - this.fcm.idade);
          this.showConfirm("Sua frequencia cardiaca maxima é: "+ freq);
        }
    
      
        this.fcm = new Fcm()
  }
}