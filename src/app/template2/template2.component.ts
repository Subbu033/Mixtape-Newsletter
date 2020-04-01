import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
})
export class Template2Component {
  @Input() headerItems;
  @Input() introduction;
  @Input() topPicks;
  @Input() sideA;
  @Input() nowRolling;
  @Input() cassetteLibrary;
  
    // constructor(private _mixtapeContent: GlobalsService) { }
    // ngOnInit() {
    //   this.headerItems = this._mixtapeContent.headerItems;
    //   this.introduction = this._mixtapeContent.introduction;
    //   this.topPicks = this._mixtapeContent.topPicks;
    //   this.sideA = this._mixtapeContent.sideA;
    //   this.nowRolling = this._mixtapeContent.nowRolling;
    //   this.cassetteLibrary = this._mixtapeContent.cassetteLibrary;
    // }
    

}
