import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.modules';
import { FormsModule } from '@angular/forms';
import { GhUserModule } from './gh-user/gh-user.module'; //importando o modulo do gh user






@NgModule({
  declarations: [
    AppComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    GhUserModule, //importando o modulo do gh user
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
