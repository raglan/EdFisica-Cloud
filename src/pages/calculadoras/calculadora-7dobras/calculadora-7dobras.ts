import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Calculadora7DobrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class SeteDobras{
  idade:number;
  setesexo;
  subescapular:number;
  triceps:number;
  peitoral:number;
  axilarMedia:number;
  supraIliaca:number;
  abdomem:number;
  femuralMedio:number;
}

@IonicPage()
@Component({
  selector: 'page-calculadora-7dobras',
  templateUrl: 'calculadora-7dobras.html',
})
export class Calculadora7DobrasPage {
  seteDobras: SeteDobras
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.seteDobras= new SeteDobras()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calculadora7DobrasPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'Percentual de Gordura ',
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

  calcula_seteDobras(){
    
    var somaSete = (this.seteDobras.subescapular+this.seteDobras.triceps+ this.seteDobras.peitoral+
                    this.seteDobras.supraIliaca+ this.seteDobras.axilarMedia+ this.seteDobras.femuralMedio+
                    this.seteDobras.abdomem)
    var quadradosoma = ((somaSete)*(somaSete))
        
    var densidade=(1.112)-((0.00043499)*somaSete)+(0.00000055*(quadradosoma))-((0.00028826)*this.seteDobras.idade) 
     
    this.showConfirm("Sua densidade é: "+ densidade + somaSete);
  }

}
