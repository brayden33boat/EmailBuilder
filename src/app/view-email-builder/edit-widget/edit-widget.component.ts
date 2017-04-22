import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Widget} from '../widget'

@Component({
  selector: 'app-edit-widget',
  templateUrl: './edit-widget.component.html',
  styleUrls: ['./edit-widget.component.css']
})
export class EditWidgetComponent implements OnInit {
  widget:Widget;
  widgetIndex:number;

  @Output() deleteWidget = new EventEmitter();
  @Output() closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(){
    // delete this.widget;
    this.deleteWidget.emit(this.widgetIndex);
  }

  close(){
    this.closeDialog.emit();
  }

}
