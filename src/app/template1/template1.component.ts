import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Template1Component{
  @Input() headerItems: any;
  @Input() introduction: any;
  @Input() topPicks: any;
  @Input() sideA: any;
  @Input() nowRolling: any;
  @Input() cassetteLibrary: any;
  @Input() getData: any;

 

  //constructor(private _mixtapeContent: GlobalsService) { }
  ngOnInit() {
    // this.headerItems = this._mixtapeContent.headerItems;
    // this.introduction = this._mixtapeContent.introduction;
    // this.topPicks = this._mixtapeContent.topPicks;
    // this.sideA = this._mixtapeContent.sideA;
    // this.nowRolling = this._mixtapeContent.nowRolling;
    // this.cassetteLibrary = this._mixtapeContent.cassetteLibrary;
    //console.log(this.getData);
  }
  
  showCode = false;
  showtemplate1Code(event: any){
    this.showCode = !this.showCode;
  }

}
