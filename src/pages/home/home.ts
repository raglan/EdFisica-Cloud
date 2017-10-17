import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculadorasPage } from "../calculadoras/calculadoras";
import { AvaliacoesPage } from "../avaliacoes/avaliacoes";
import { GraficosPage } from "../graficos/graficos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html', 
})
export class HomePage {
  page:any;
  items: Array<{title: string, src: string, page: any}>;
  items2: Array<{title: string, src: string, page: any}>;
  constructor(public navCtrl: NavController) {
    this.items = [{title:'Avaliações', src:'/assets/icon/avaliacao.png', page: AvaliacoesPage},
                  {title:'Calculadoras', src:'/assets/icon/calculadora.png', page: CalculadorasPage}]
    this.items2 = [{title:'Gráficos', src:'/assets/icon/grafico.png', page: GraficosPage},
                  {title:'Mensagens', src:'/assets/icon/mensagem.png', page: GraficosPage}]
  }
  acessar(item){
    this.navCtrl.push(item.page)
  }
}
