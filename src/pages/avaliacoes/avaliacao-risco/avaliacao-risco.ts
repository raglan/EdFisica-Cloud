import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AvaliacaoRiscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class AvaliacaoRisco{
  opcao1:number;
  opcao2:number;
  opcao3:number;
  opcao4:number;
  opcao5:number;
  opcao6:number;
  opcao7:number;
  opcao8:number;
  

}
@IonicPage()
@Component({
  selector: 'page-avaliacao-risco',
  templateUrl: 'avaliacao-risco.html',
})
export class AvaliacaoRiscoPage {
  avaliacaoRisco : AvaliacaoRisco
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.avaliacaoRisco= new AvaliacaoRisco()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoRiscoPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: ' Risco Cardíaco (RISKO)  ',
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

  calcula_risco(){
         
      var somaPontos = ((this.avaliacaoRisco.opcao1 * 1) + (this.avaliacaoRisco.opcao2 * 1) + (this.avaliacaoRisco.opcao3 * 1)
      + (this.avaliacaoRisco.opcao4 * 1) + (this.avaliacaoRisco.opcao5 * 1) + (this.avaliacaoRisco.opcao6 * 1)
    + (this.avaliacaoRisco.opcao7 * 1) + (this.avaliacaoRisco.opcao8 * 1))
      
      
                

      if((somaPontos >= 6) && (somaPontos < 12)){
      this.showConfirm("Total: " + somaPontos + " Risco bem baixo da média ");
      }else if((somaPontos >= 12) && (somaPontos < 18)){
        this.showConfirm("Total: " + somaPontos + " Risco abaixo da média ");
      }else if((somaPontos >= 18) && (somaPontos < 25)){
      this.showConfirm("Total: " + somaPontos + " Risco na média geral ");
      }else if((somaPontos >= 25) && (somaPontos < 35)){
        this.showConfirm("Total: " + somaPontos + " Risco moderado ");
      }else if( (somaPontos >= 35) && (somaPontos < 41)){
          this.showConfirm("Total: " + somaPontos + " Risco no nível perigoso ");
      }else if( (somaPontos >= 41) && (somaPontos < 62)){
      this.showConfirm("Total: " + somaPontos + " Perigo urgente. Consulte seu médico ");
      }
  }


}
