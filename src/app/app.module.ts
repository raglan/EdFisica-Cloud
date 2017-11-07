import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AvaliacoesPage } from '../pages/avaliacoes/avaliacoes';
import { AvaliacaoCoronarianoPage } from '../pages/avaliacoes/avaliacao-coronariano/avaliacao-coronariano';
import { AvaliacaoFisicaPage } from '../pages/avaliacoes/avaliacao-fisica/avaliacao-fisica';
import { AvaliacaoParqPage } from '../pages/avaliacoes/avaliacao-parq/avaliacao-parq';
import { AvaliacaoRiscoPage } from '../pages/avaliacoes/avaliacao-risco/avaliacao-risco';

import { CalculadorasPage } from "../pages/calculadoras/calculadoras";
import { CalculadoraFcmPage } from "../pages/calculadoras/calculadora-fcm/calculadora-fcm";
import { CalculadoraImcPage } from "../pages/calculadoras/calculadora-imc/calculadora-imc";
import { CalculadoraRcqPage } from "../pages/calculadoras/calculadora-rcq/calculadora-rcq";
import { Calculadora1RmPage } from "../pages/calculadoras/calculadora-1rm/calculadora-1rm";
import { Calculadora7DobrasPage } from "../pages/calculadoras/calculadora-7dobras/calculadora-7dobras";

import { CadastroPage } from "../pages/cadastro/cadastro";
import { ListaPacientesPage } from "../pages/lista-pacientes/lista-pacientes";
import { LoginPage } from "../pages/login/login";

import { GraficosPage } from "../pages/graficos/graficos";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var config = {
  apiKey: "AIzaSyCqZL4-MpsaLxFWGlII5r6ZFzC3xKzU3rI",
  authDomain: "edfisica-cloud.firebaseapp.com",
  databaseURL: "https://edfisica-cloud.firebaseio.com",
  projectId: "edfisica-cloud",
  storageBucket: "edfisica-cloud.appspot.com",
  messagingSenderId: "310515219152"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AvaliacoesPage,
    AvaliacaoCoronarianoPage,
    AvaliacaoFisicaPage,
    AvaliacaoParqPage,
    AvaliacaoRiscoPage,

    CalculadorasPage,
    CalculadoraFcmPage,
    Calculadora1RmPage,
    CalculadoraImcPage,
    CalculadoraRcqPage,
    Calculadora7DobrasPage,

    CadastroPage,
    ListaPacientesPage,
    LoginPage,

    GraficosPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    AvaliacoesPage,
    AvaliacaoCoronarianoPage,
    AvaliacaoFisicaPage,
    AvaliacaoParqPage,
    AvaliacaoRiscoPage,

    CalculadorasPage,
    CalculadoraFcmPage,
    Calculadora1RmPage,
    CalculadoraImcPage,
    CalculadoraRcqPage,
    Calculadora7DobrasPage,

    CadastroPage, 
    ListaPacientesPage,
    LoginPage,

    GraficosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})


export class AppModule {

}
