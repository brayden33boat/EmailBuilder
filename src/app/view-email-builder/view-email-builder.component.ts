import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-email-builder',
  templateUrl: './view-email-builder.component.html',
  styleUrls: ['./view-email-builder.component.css']
})
export class ViewEmailBuilderComponent implements OnInit {
  simpleDrop: any = null;
  singleColumnText: Object = { id: 1, msg: 'Hello', html: "<table><tr align='center'><td>Text</td></tr></table>" };
  doubleColumnText: Object = { id: 1, msg: 'Hello', html: "<table><tr align='center'><td>Text 1</td><td>Text 2</td></tr></table>" };
  receivedData: Array<any> = [];
  

  constructor() { }

  ngOnInit() {
  }



  transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }

}
