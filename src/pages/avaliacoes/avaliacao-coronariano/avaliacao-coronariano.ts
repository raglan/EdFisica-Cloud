import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

class AvaliacaoCoronariano{
  quest1:number;
  quest2:number;
  quest3:number;
  quest4:number;
  quest5:number;
  quest6:number;
  quest7:number;
  quest8:number;
  quest9:number;
  quest10:number;
  quest11:number;

}

@IonicPage()
@Component({
  selector: 'page-avaliacao-coronariano',
  templateUrl: 'avaliacao-coronariano.html',
})
export class AvaliacaoCoronarianoPage {
  avaliacaoCoronariano: AvaliacaoCoronariano
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.avaliacaoCoronariano= new AvaliacaoCoronariano()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoCoronarianoPage');
  }
  showConfirm(frase:string) {
    let confirm = this.alertCtrl.create({
      title: 'Risco Coronariano ',
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

  calcula_coronariano(){
    
    var somaPontos = ((this.avaliacaoCoronariano.quest1 * 1) + (this.avaliacaoCoronariano.quest2 * 1) + (this.avaliacaoCoronariano.quest3 * 1)
              + (this.avaliacaoCoronariano.quest4 * 1) + (this.avaliacaoCoronariano.quest5 * 1) + (this.avaliacaoCoronariano.quest6 * 1)
            + (this.avaliacaoCoronariano.quest7 * 1) + (this.avaliacaoCoronariano.quest8 * 1) + (this.avaliacaoCoronariano.quest9 * 1)
              + (this.avaliacaoCoronariano.quest10 * 1) + (this.avaliacaoCoronariano.quest11 * 1))
     
              

    if((somaPontos >= 0) && (somaPontos < 5)){
    this.showConfirm("Total: " + somaPontos + " Risco coronariano muito baixo");
    }else if((somaPontos >= 5) && (somaPontos < 15)){
      this.showConfirm("Total: " + somaPontos + " Risco coronariano baixo");
    }else if((somaPontos >= 15) && (somaPontos < 25)){
    this.showConfirm("Total: " + somaPontos + " Risco coronariano moderado");
    }else if((somaPontos >= 25) && (somaPontos < 35)){
      this.showConfirm("Total: " + somaPontos + " Risco coronariano alto");
    }else if( (somaPontos >= 35) && (somaPontos < 46)){
        this.showConfirm("Total: " + somaPontos + " Risco coronariano muito alto");
    }
  }

}

