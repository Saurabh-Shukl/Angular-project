import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
//import {ContactModule}from './contact/contact.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { GuideComponent } from './guide/guide.component';     
import { NgAisModule } from 'angular-instantsearch';
import { IssueComponent } from './issue/issue.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BugComponent } from './bug/bug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HelpComponent,
    GuideComponent,
    IssueComponent,
    BugComponent,

  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgAisModule.forRoot(),
    NgbModule.forRoot(),
    //HttpClient,
  //  ContactModule,
    FormsModule,
    //RouterModule.forRoot([
     // {path:'',redirectTo:'/',pathMatch:'full'},
     // {path:'contact',component:ContactComponent},
  //   angular.module('contact')
    //  .config(['recorderServiceProvider', function(recorderServiceProvider){
        //configure here
      //}])
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
