import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2';
import { ListaPacientesPage } from "../lista-pacientes/lista-pacientes";

export class Paciente{
  nome: String;
  nascimento: Date;
  telefone: String;
  email: String;
  sexo: String;
  altura: String;
  peso: String;
  envergadura: String;
  raca: String;
  limitacao: String;
}

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})

export class CadastroPage {
  lista: FirebaseListObservable<any>; 
  paciente: Paciente;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.db.list('/pacientes');
    this.paciente = new Paciente();
  }

  cadastrar(){
    this.lista.push(this.paciente).then(() => {this.paciente = new Paciente();
    });
    this.navCtrl.push(ListaPacientesPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
