import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AvaliacaoParqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Parq {
  opcao1;
  opcao2;
  opcao3;
  opcao4;
  opcao5;
  opcao6;
  opcao7;
}
@IonicPage()
@Component({
  selector: 'page-avaliacao-parq',
  templateUrl: 'avaliacao-parq.html',
})
export class AvaliacaoParqPage {
  parq: Parq
  opcao: string;
  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

    this.parq= new Parq()
    
  }
  
    


  

    ionViewDidLoad() {
      console.log('ionViewDidLoad AvaliacaoParqPage');
    }
    showConfirm(frase:string) {
      let confirm = this.alertCtrl.create({
        title: 'PAR-Q ',
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
  
    calcula_parq(){
          if(this.parq.opcao1 == "sim" ||
            this.parq.opcao2 == "sim" ||
            this.parq.opcao3 == "sim" ||
            this.parq.opcao4 == "sim" ||
            this.parq.opcao5 == "sim" ||
            this.parq.opcao6 == "sim" ||
            this.parq.opcao7 == "sim"){
            
              this.showConfirm(" Você deve procurar um médico ! ");
          } else{
              this.showConfirm(" Pode prosseguir ");
          }
          
    }

}

