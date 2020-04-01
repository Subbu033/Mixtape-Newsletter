import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import {ViewEncapsulation} from '@angular/core';
import { GlobalsService } from './common/globals.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {observable, Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public headerItems;
  public introduction;
  public topPicks;
  public sideA = [];
  public nowRolling = [];
  public cassetteLibrary = [];
  public selectedTab = {
    sideAtab : '1',
    nowRollingTab : '1',
    cassetteTab : '1',
    templateTab : '1'
  };
  
  public getData;
  //public saveContentTo = 'February, 2020';
  public saveExistingContent;
  constructor(private _mixtapeContent: GlobalsService, public db: AngularFireDatabase) {
    
    
    
  }
  ngOnInit() {
    this.headerItems = this._mixtapeContent.headerItems;
    this.introduction = this._mixtapeContent.introduction;
    this.topPicks = this._mixtapeContent.topPicks;
    this.sideA = this._mixtapeContent.sideA;
    this.nowRolling = this._mixtapeContent.nowRolling;
    this.cassetteLibrary = this._mixtapeContent.cassetteLibrary;
    
    this.getData = this.db.object('February, 2020').valueChanges()
    this.getData.subscribe( data => {
        this.getData = data;
        console.log(this.getData);

        this.saveExistingContent = this.getData.headerItems.month;

    });
  }
  
  onSubmit(month: any) {

    const setData = this.db.list('/');
    
    setData.update(month, { 
      headerItems : this.getData.headerItems,
      cassetteLibrary: this.getData.cassetteLibrary,
      introduction : this.getData.introduction,
      sideA : this.getData.sideA,
      topPicks : this.getData.topPicks,
      nowRolling : this.getData.nowRolling 
    });
   
    // itemRef.update({ 
    //   February : this.getData,
      
    // });
    // this.db.list('February').push({ 
    //   logo: this.logo
    // });
    //this.logo = '';
    //console.log(this.date);
    //return this.headerItems = itemRef;
    
  }

  

  changeTab(event: any, newValue: any, tabName: string | number){ 
    this.selectedTab[tabName] = newValue;
  }

  
  
}