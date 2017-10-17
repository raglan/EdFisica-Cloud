import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  FormGroup,  FormControl} from '@angular/forms';
/**
 * Generated class for the AvaliacaoParqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao-parq',
  templateUrl: 'avaliacao-parq.html',
})
export class AvaliacaoParqPage {
  langs;
  langForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }
  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
    


  

    ionViewDidLoad() {
      console.log('ionViewDidLoad AvaliacaoParqPage');
    }
  

}

