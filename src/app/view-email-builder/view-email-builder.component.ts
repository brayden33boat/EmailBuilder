import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-email-builder',
  templateUrl: './view-email-builder.component.html',
  styleUrls: ['./view-email-builder.component.css']
})
export class ViewEmailBuilderComponent implements OnInit {
  simpleDrop: any = null;

  // singleColumnText: Object = { id: 1, data: [{'text1':'hello'}], html: "<table style='width:100%'><tr align='center'><td>Text</td></tr></table>" };
  // doubleColumnText: Object = { id: 2, data: [{'text1':'hello', 'text2':'hi'}], html: "<table style='width:100%'><tr align='center'><td>Text 1</td><td>Text 2</td></tr></table>" };
  
  singleColumnText: Widget = new Widget(1,"<table style='width:100%'><tr align='center'><td>{{text1}}</td></tr></table>",[{'selector':'text1', 'value':'hi'}]);
  doubleColumnText: Widget = new Widget(2,"<table style='width:100%'><tr align='center'><td>{{text1}}</td><td>{{text2}}</td></tr></table>",[{'selector':'text1', 'value':'hello1'},{'selector':'text2', 'value':'hello2'}]);
  tripleColumnText: Widget = new Widget(3,"<table style='width:100%'><tr align='center'><td>{{text1}}</td><td>{{text2}}</td><td>{{text3}}</td></tr></table>",[{'selector':'text1', 'value':'hello1'},{'selector':'text2', 'value':'hello2'},{'selector':'text3','value':'hello3'}]);
  headerOne: Widget = new Widget(4,"<table style='width:100%'><tr align='center'><td><h1>{{title}}</h1></td></tr></table>",[{'selector':'title', 'value':'Title 1'}]);
  headerThree: Widget = new Widget(4,"<table style='width:100%'><tr align='center'><td><h3>{{title}}</h3></td></tr></table>",[{'selector':'title', 'value':'Title 1'}]);

  receivedData: Array<any> = [];

  html:String;
  showHtml:Boolean = false;

  showTableMarkup:Boolean = true;
  

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.receivedData=[];
    this.html='';
  }

  toggleShowTableMarkup(){
    this.showTableMarkup=!this.showTableMarkup;
  }

  toggleHtml(){
    this.showHtml=!this.showHtml;
  }

  toHtml(){
    var html = '<table style="width:100%"><tbody>';

    for (var i = 0; i < this.receivedData.length; i++) {
      html += "<tr><td>";
      html += this.receivedData[i].dragData.getHtml();
      html += "</td></tr>";
    }

    html += '</tbody></table>';

    this.html = html;
  }

  editItem(index){
    console.log(this.receivedData[index].dragData);
  }



  transferDataSuccess($event: any) {
    this.receivedData.push($event);
    this.toHtml();
  }

}


class Widget {
  constructor(public id: number, public htmlTemplate: String, public insertables:[any]) {}

  getHtml(){
    var html = this.htmlTemplate;

    for(var i = 0; i < this.insertables.length; i++){
      var selector = '{{' + this.insertables[i].selector + '}}';
      var val = this.insertables[i].value;

      html = html.replace(selector, val);
    }

    return html;
  }
}