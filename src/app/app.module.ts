import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Compo2Component } from './compo2/compo2.component';
import {Routes, RouterModule} from '@angular/router';

const rutas:Routes = [
{path: 'compo1/:id/:sueldo', component : Comp1Component},
{path: 'compo2', component : Compo2Component},
{path: '**', component : Comp1Component}


];
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Compo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
