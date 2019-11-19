import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//for routing module
import {RouterModule,Routes} from '@angular/router';

//importing chat and usermodule 
import {UserModule} from './user/user.module';
import {ChatModule} from './chat/chat.module';
import {LoginComponent} from './user/login/login.component';

//for toaster
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from './app.service';
import { SignupComponent } from './user/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,BrowserAnimationsModule,
    AppRoutingModule,ToastrModule.forRoot(),RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'signup',component:SignupComponent},
      {path:'*',component:LoginComponent},
      {path:'**',component:LoginComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
