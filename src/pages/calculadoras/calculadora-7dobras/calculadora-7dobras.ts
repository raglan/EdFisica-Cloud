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
  sexo;
  subescapular;
  triceps;
  peitoral;
  axilarMedia;
  supraIliaca;
  abdomem;
  femuralMedio;
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
        
      var xb = this.seteDobras.idade;
          
          if(this.seteDobras.sexo == "masc"){
            var xa= (this.seteDobras.peitoral + this.seteDobras.axilarMedia + this.seteDobras.triceps + this.seteDobras.subescapular 
                      + this.seteDobras.supraIliaca + this.seteDobras.abdomem + this.seteDobras.femuralMedio);
            this.showConfirm("Seu percentual de gordura é: "+ result);
              
            
               
          }
          else if(this.seteDobras.sexo == "fem"){
            var a = parseFloat ("1,097");
            var b = parseFloat ("0,00046971");
            var c = parseFloat ("0,00000056");
            var d = parseFloat ("0,00012828");

            var xa=  (this.seteDobras.peitoral + this.seteDobras.axilarMedia + this.seteDobras.triceps +this.seteDobras.subescapular 
                      + this.seteDobras.supraIliaca + this.seteDobras.abdomem + this.seteDobras.femuralMedio);
            var result = (a)-((b)*(xa))+((c)*(xa)*(c)*(xa))-((d)*(xb)); 
            this.showConfirm("Seu percentual de gordura é: "+ result);

                  this.seteDobras = new SeteDobras()
          }
    
  }

}
