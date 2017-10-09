import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


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
    Calculadora7DobrasPage
  ],
  imports: [
    BrowserModule,
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
    Calculadora7DobrasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
