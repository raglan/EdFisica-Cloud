import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
class Umrm{
  peso:number;
  repeticoes: number;
  fpredicacao;

  
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

    var fpredicacao;

    if (this.umrm.repeticoes == 1) {
      
       fpredicacao = 1.0 ;

    }else if(this.umrm.repeticoes == 2){   
      
       fpredicacao = 1.07;

    }else if(this.umrm.repeticoes == 3){
      
       fpredicacao = 1.10;

    }else if(this.umrm.repeticoes == 4){
      
       fpredicacao = 1.13;

    }else if(this.umrm.repeticoes == 5){
      
       fpredicacao = 1.16 ;

    }else if(this.umrm.repeticoes == 6){
     
       fpredicacao = 1.20 ;

    }else if(this.umrm.repeticoes == 7){
    
       fpredicacao= 1.23;

    }else if(this.umrm.repeticoes == 8){
     
       fpredicacao = 1.27 ;

    }else if(this.umrm.repeticoes == 9){
     
       fpredicacao = 1.32 ;

    }else if(this.umrm.repeticoes == 10){
      
       fpredicacao = 1.36 ;
    }

    
    
    var carga = (this.umrm.peso * fpredicacao)

    

    this.showConfirm("Você deverá conseguir fazer uma repetição completa com esta carga total: "  + carga +" kg");
  }

}
