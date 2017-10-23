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
  sexo:String;
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

    if(calculo<18.5){
      this.showConfirm("Você está magro com esse indice:"  + calculo); 
    }
    else if(calculo>=18.5 && calculo<24.9){
      this.showConfirm("Você está normal com esse indice: " + calculo);
    }
    
    else if(calculo>=25 && calculo<29.9) {
      this.showConfirm("Você está com sobre peso com esse indice: " + calculo);
    }
    else if(calculo>=30 && calculo<39.9) {
      this.showConfirm("Você está com obesidade com esse indice: " + calculo);
    }
    else if (calculo>40){
      this.showConfirm("Você estácom obesidade grave com esse indice: " + calculo);
    }
    this.imc = new Imc()
  }
  
}
