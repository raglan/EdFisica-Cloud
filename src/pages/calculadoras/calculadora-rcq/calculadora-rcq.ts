import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CalculadoraRcqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Rcq{
  cintura;
  quadril;
  sexo:String;
  
}
@IonicPage()
@Component({
  selector: 'page-calculadora-rcq',
  templateUrl: 'calculadora-rcq.html',
})
export class CalculadoraRcqPage {
  rcq:Rcq
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.rcq= new Rcq()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraRcqPage');
  }

  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'RCQ ',
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

  calcula_rcq(){
        if(this.rcq.sexo == "masc"){
          var rcqMasc1 =(this.rcq.cintura/ this.rcq.quadril);
          var rcqMasc = parseFloat(rcqMasc1.toFixed(2))
          if(rcqMasc >= 0.90){
            this.showConfirm("Alto risco para doenças cardiovasculares  "+ rcqMasc);
            }else{
              this.showConfirm("Baixo risco para doenças cardiovasculares  "+ rcqMasc);
            }
        }
        else if(this.rcq.sexo == "fem"){
          var rcqFem1 = (this.rcq.cintura/ this.rcq.quadril);
          var rcqFem = parseFloat(rcqFem1.toFixed(2))
          if(rcqFem >= 0.80){
          this.showConfirm("Alto risco para doenças cardiovasculares  "+ rcqFem);
          }else{
            this.showConfirm("Baixo risco para doenças cardiovasculares  "+ rcqFem);
          }
        }
    
      
        
  }

}
