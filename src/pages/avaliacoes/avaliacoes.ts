import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-avaliacoes',
  templateUrl: 'avaliacoes.html'
})
export class AvaliacoesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    
    this.items = [{title:'Questionário PAR-Q', icon:'paper'}, 
                  {title:'Índice de Risco Cardíaco', icon:'paper'},
                  {title:'Avaliação dos Fatores de Risco Coronariano', icon:'paper'},
                  {title:'Avaliação do Nível de Atividade Física', icon:'paper'}];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AvaliacoesPage, {item: item});
  }
}
