import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AvaliacaoFisicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class AvaliacaoFisica{
  quest1:number;
  quest2:number;
  quest3:number;
  

}
@IonicPage()
@Component({
  selector: 'page-avaliacao-fisica',
  templateUrl: 'avaliacao-fisica.html',
})
export class AvaliacaoFisicaPage {
  avaliacaoFisica: AvaliacaoFisica;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.avaliacaoFisica= new AvaliacaoFisica()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoFisicaPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'Avaliação Física ',
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
    calcula_avaliacao(){
      
      var somaPontos = ((this.avaliacaoFisica.quest1 * 1) + (this.avaliacaoFisica.quest2 * 1) 
                          + (this.avaliacaoFisica.quest3 * 1))
                
       
                
  
      if((somaPontos >= 1) && (somaPontos < 2)){
      this.showConfirm("Muito Pobre: " + somaPontos + " Sedentário");
      }else if((somaPontos >= 2) && (somaPontos < 5)){
        this.showConfirm("Pobre: " + somaPontos + " Insuficiente");
      }else if((somaPontos >= 4) && (somaPontos < 7)){
      this.showConfirm("Razoável: " + somaPontos + " Aceitável - deve melhorar ");
      }else if((somaPontos >= 6) && (somaPontos < 9)){
        this.showConfirm("Médio: " + somaPontos + " Aceitável ");
      }else if( (somaPontos >= 8) && (somaPontos < 11)){
          this.showConfirm("Ótimo: " + somaPontos + " Estilo de Vida Muito Ativo ");
      }
    }

}
