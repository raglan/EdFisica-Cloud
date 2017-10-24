import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CalculadoraImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Imc{
  altura:number;   
  peso:number;
  sexo;
}
@IonicPage()
@Component({
  selector: 'page-calculadora-imc',
  templateUrl: 'calculadora-imc.html',
})
export class CalculadoraImcPage {
  imc:Imc
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.imc = new Imc()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraImcPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'IMC ',
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

  calcula_imc(){

    var quadrado = (this.imc.altura * this.imc.altura);
    
    var calculoP = (this.imc.peso/quadrado);
    
    var calculo = parseFloat(calculoP.toFixed(1))

    if(this.imc.sexo == "masc"){
          if(calculo<20.0){
            this.showConfirm("Você está magro com esse indice: "  + calculo); 
          }
          else if(calculo>=20.0 && calculo<24.9){
            this.showConfirm("Você está normal com esse indice: " + calculo);
          }
          
          else if(calculo>=25 && calculo<29.9) {
            this.showConfirm("Você está com sobre peso com esse indice: " + calculo);
          }
          else if(calculo>=30 && calculo<39.9) {
            this.showConfirm("Você está com obesidade com esse indice: " + calculo);
          }
          else if (calculo>43){
            this.showConfirm("Você estácom obesidade grave com esse indice: " + calculo);
          }
          this.imc = new Imc()
    }
    else if(this.imc.sexo == "fem"){
            if(calculo<19.0){
              this.showConfirm("Você está magra com esse indice: "  + calculo); 
            }
            else if(calculo>=19.0 && calculo<23.9){
              this.showConfirm("Você está normal com esse indice: " + calculo);
            }
            
            else if(calculo>=24 && calculo<28.9) {
              this.showConfirm("Você está com sobre peso com esse indice: " + calculo);
            }
            else if(calculo>=29 && calculo<38.9) {
              this.showConfirm("Você está com obesidade com esse indice: " + calculo);
            }
            else if (calculo>39){
              this.showConfirm("Você estácom obesidade grave com esse indice: " + calculo);
            }
            this.imc = new Imc()
          }
    }

   
}
