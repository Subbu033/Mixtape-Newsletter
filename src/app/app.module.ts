import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { GlobalsService } from './common/globals.service';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { Template1ComponentShowcode } from './template1/template1_showcode.component';

import { Template2Component } from './template2/template2.component';
import { EditorComponent } from './editor/editor.component';




@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    Template1ComponentShowcode,
    Template2Component,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    

  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
