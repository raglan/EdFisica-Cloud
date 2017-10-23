import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from "../cadastro/cadastro";

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2';


@IonicPage()
@Component({
  selector: 'page-lista-pacientes',
  templateUrl: 'lista-pacientes.html',
})
export class ListaPacientesPage {
  paciente: Paciente;
  listaPacientes: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.listaPacientes = this.db.list('/pacientes');
    this.paciente = new Paciente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPacientesPage');
  }

}
