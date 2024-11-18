import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoginComponent } from '../button-login/button-login.component';
import { InputEmailComponent } from '../input-email/input-email.component';
import { InputPasswordComponent } from '../input-password/input-password.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,AppRoutingModule
  ],


})
export class TelaLoginModule { }

