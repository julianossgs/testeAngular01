import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginModule } from '../tela-login/tela-login.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TelaLoginModule,AppRoutingModule

  ],
  exports:[
    TelaLoginModule
  ]
})
export class TelaRegistroModule { }
