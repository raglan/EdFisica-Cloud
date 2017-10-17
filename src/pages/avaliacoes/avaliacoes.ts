import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvaliacaoParqPage } from "./avaliacao-parq/avaliacao-parq";
import { AvaliacaoCoronarianoPage } from "./avaliacao-coronariano/avaliacao-coronariano";
import { AvaliacaoFisicaPage } from "./avaliacao-fisica/avaliacao-fisica";
import { AvaliacaoRiscoPage } from "./avaliacao-risco/avaliacao-risco";

import { AvaliacaoParqPage } from "./avaliacao-parq/avaliacao-parq";
import { AvaliacaoRiscoPage } from "./avaliacao-risco/avaliacao-risco";
import { AvaliacaoCoronarianoPage } from "./avaliacao-coronariano/avaliacao-coronariano";
import { AvaliacaoFisicaPage } from "./avaliacao-fisica/avaliacao-fisica";

@Component({
  selector: 'page-avaliacoes',
  templateUrl: 'avaliacoes.html'
})
export class AvaliacoesPage {
  selectedItem: any;
  icons: string[];
<<<<<<< HEAD
  items: Array<{title: string, icon: string, page: any}>;
=======
  items: Array<{title: string, icon: string, page:any}>;
>>>>>>> fd85a8dc57acb6eb5ffb0926bde5daf42d0a339c

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    
<<<<<<< HEAD
    this.items = [{title:'Questionário PAR-Q', icon:'paper', page: AvaliacaoParqPage}, 
                  {title:'Índice de Risco Cardíaco', icon:'paper',page: AvaliacaoRiscoPage},
                  {title:'Avaliação dos Fatores de Risco Coronariano', icon:'paper',page: AvaliacaoCoronarianoPage},
                  {title:'Avaliação do Nível de Atividade Física', icon:'paper',page: AvaliacaoFisicaPage}];
=======
    this.items = [{title:'Questionário PAR-Q', icon:'paper',page: AvaliacaoParqPage}, 
                  {title:'Índice de Risco Cardíaco', icon:'paper',page: AvaliacaoRiscoPage},
                  {title:'Avaliação dos Fatores de Risco Coronariano', icon:'paper', page: AvaliacaoCoronarianoPage},
                  {title:'Avaliação do Nível de Atividade Física', icon:'paper', page: AvaliacaoFisicaPage}];
>>>>>>> fd85a8dc57acb6eb5ffb0926bde5daf42d0a339c
  }
  itemTapped(event, item) {
<<<<<<< HEAD
    this.navCtrl.push(item.page, {item: item});
=======
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item.page);
>>>>>>> fd85a8dc57acb6eb5ffb0926bde5daf42d0a339c
  }
}
