import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  items: Array<{title: string, icon: string, page: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    
    this.items = [{title:'Questionário PAR-Q', icon:'paper', page: AvaliacaoParqPage}, 
                  {title:'Índice de Risco Cardíaco', icon:'paper',page: AvaliacaoRiscoPage},
                  {title:'Avaliação dos Fatores de Risco Coronariano', icon:'paper',page: AvaliacaoCoronarianoPage},
                  {title:'Avaliação do Nível de Atividade Física', icon:'paper',page: AvaliacaoFisicaPage}];
  }
  itemTapped(event, item) {
    this.navCtrl.push(item.page, {item: item});
  }
}
