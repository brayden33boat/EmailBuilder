import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { EditWidgetComponent } from './edit-widget/edit-widget.component';
import { ImportJsonDialogComponent } from './import-json-dialog/import-json-dialog.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';


import { Widget } from './widget'

import { WidgetsService } from './widgets.service';



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


  constructor(public dialog: MdDialog, private widgetsService: WidgetsService) { }

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

  alertJson() {
    let dialogRef: MdDialogRef<SimpleDialogComponent> = this.dialog.open(SimpleDialogComponent);
    dialogRef.componentInstance.msg = JSON.stringify(this.receivedData);
  }

  alertHtml() {
    this.toHtml();

    let dialogRef: MdDialogRef<SimpleDialogComponent> = this.dialog.open(SimpleDialogComponent);
    dialogRef.componentInstance.msg = this.html;
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

  importJson() {
    let dialogRef: MdDialogRef<ImportJsonDialogComponent> = this.dialog.open(ImportJsonDialogComponent);

    dialogRef.componentInstance.uploadJson.subscribe((jsonReceivedData) => {
      var receivedData = JSON.parse(jsonReceivedData);
      var importedReceivedData = [];

      if (receivedData.length <= 0 || jsonReceivedData == ''){
        dialogRef.close();
        return;
      }

      for (var i = 0; i < receivedData.length; i++) {
        var widget = new Widget(receivedData[i].dragData.id,
                                receivedData[i].dragData.label,
                                receivedData[i].dragData.type,
                                receivedData[i].dragData.favicon,
                                receivedData[i].dragData.htmlTemplate,
                                receivedData[i].dragData.insertables);

        importedReceivedData.push({'dragData': widget});
      }

      this.receivedData=importedReceivedData;
      dialogRef.close();
    });
  }

  editItem(index) {
    var thisWidget: Widget = this.receivedData[index].dragData;

    let dialogRef: MdDialogRef<EditWidgetComponent> = this.dialog.open(EditWidgetComponent);
    dialogRef.componentInstance.widget = this.receivedData[index].dragData;
    dialogRef.componentInstance.widgetIndex = index;

    dialogRef.componentInstance.deleteWidget.subscribe((i) => {
      this.receivedData.splice(i, 1);
      dialogRef.close();
    });

    dialogRef.componentInstance.closeDialog.subscribe((i) => {
      dialogRef.close();
    });
  }

  myEventHandler($event) {
    console.log($event);
  }

  transferDataSuccess($event: any) {
    var widget: Widget = $event.dragData;

    //Don't want by reference
    //this was a HUGE pain in my arse. Some reason when getting insertables it'd copy object by reference, not making a new obj
    $event.dragData = new Widget(widget.getID(),widget.getLabel(), widget.getType(), widget.getFavicon(), widget.getHtmlTemplate(), JSON.parse(JSON.stringify(widget.getInsertables())));

    this.receivedData.push($event);
    this.toHtml();
  }

}




