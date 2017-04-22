import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-email-builder',
  templateUrl: './view-email-builder.component.html',
  styleUrls: ['./view-email-builder.component.css']
})
export class ViewEmailBuilderComponent implements OnInit {
  simpleDrop: any = null;
  singleColumnText: Object = { id: 1, msg: 'Hello', html: "<table style='width:100%'><tr align='center'><td>Text</td></tr></table>" };
  doubleColumnText: Object = { id: 2, msg: 'Hello', html: "<table style='width:100%'><tr align='center'><td>Text 1</td><td>Text 2</td></tr></table>" };
  
  receivedData: Array<any> = [];

  html:String;
  showHtml:Boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.receivedData=[];
  }

  toggleHtml(){
    this.showHtml=!this.showHtml;
  }

  toHtml(){
    var html = '<table style="width:100%"><tbody>';

    for (var i = 0; i < this.receivedData.length; i++) {
      html += "<tr><td>";
      html += this.receivedData[i].dragData.html;
      html += "</td></tr>";
    }

    html += '</tbody></table>';

    this.html = html;
  }

  editItem(){
    console.log('Edit Item');
  }



  transferDataSuccess($event: any) {
    this.receivedData.push($event);
    this.toHtml();
  }

}
