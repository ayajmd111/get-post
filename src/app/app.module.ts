import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CommonService} from './service/common.service';
import { Common2Service } from './service/common2.service';
import { GetComponent } from './header/get/get.component';
import { RegisterComponent } from './header/register/register.component';
import { Register2Component } from './header/register2/register2.component';
import { LoginComponent } from './header/login/login.component';
import { ComponentAComponent } from './header/component-a/component-a.component';
import { ComponentBComponent } from './header/component-b/component-b.component';
import { ComponentCComponent } from './header/component-c/component-c.component';
import { ComponentDComponent } from './header/component-d/component-d.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetComponent,
    RegisterComponent,
    Register2Component,
    LoginComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent,
    
  
    
                


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: "home", redirectTo: "Home", pathMatch: "full" },
      { path: "get", component: GetComponent},
      { path: "reg", component: RegisterComponent},
      { path: "reg2", component: Register2Component},
      { path: "login", component: LoginComponent},
      {path:"ca",component:ComponentAComponent},
      {path:"cb",component:ComponentBComponent},
      {path:"cc",component:ComponentCComponent},
      {path:"cd",component:ComponentDComponent},
      
      
      
      
      
      
      

    ]),

  ],
  providers: [CommonService,Common2Service],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 

}
