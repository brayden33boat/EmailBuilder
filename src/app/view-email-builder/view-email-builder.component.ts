import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { EditWidgetComponent } from './edit-widget/edit-widget.component';

import {Widget} from './widget'

import {WidgetsService} from './widgets.service';

@Component({
  selector: 'app-view-email-builder',
  templateUrl: './view-email-builder.component.html',
  styleUrls: ['./view-email-builder.component.css']
})
export class ViewEmailBuilderComponent implements OnInit {
  simpleDrop: any = null;

  widgets: any;

  receivedData: Array<any> = [];

  html: String;
  showHtml: Boolean = false;

  showTableMarkup: Boolean = true;


  constructor(public dialog: MdDialog, private widgetsService:WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.getWidgets();
  }

  reset() {
    this.receivedData = [];
    this.html = '';
  }

  toggleShowTableMarkup() {
    this.showTableMarkup = !this.showTableMarkup;
  }

  toggleHtml() {
    this.showHtml = !this.showHtml;
  }

  toHtml() {
    var html = '<table style="width:100%"><tbody>';

    for (var i = 0; i < this.receivedData.length; i++) {
      html += "<tr><td>";
      html += this.receivedData[i].dragData.getHtml();
      html += "</td></tr>";
    }

    html += '</tbody></table>';

    this.html = html;
  }

  editItem(index) {
    var thisWidget: Widget = this.receivedData[index].dragData;
    console.log(index, thisWidget);

    let dialogRef: MdDialogRef<EditWidgetComponent> = this.dialog.open(EditWidgetComponent);
    dialogRef.componentInstance.widget = this.receivedData[index].dragData;
  }


  transferDataSuccess($event: any) {
    var widget: Widget = $event.dragData;

    //Don't want by reference
    //this was a HUGE pain in my arse. Some reason when getting insertables it'd copy object by reference, not making a new obj
    $event.dragData = new Widget(widget.getID(), widget.getFavicon(), widget.getHtmlTemplate(), JSON.parse(JSON.stringify(widget.getInsertables())));

    this.receivedData.push($event);
    this.toHtml();
  }

}




