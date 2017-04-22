import { Component, OnInit } from '@angular/core';
import {Widget} from '../widget'

@Component({
  selector: 'app-edit-widget',
  templateUrl: './edit-widget.component.html',
  styleUrls: ['./edit-widget.component.css']
})
export class EditWidgetComponent implements OnInit {
  widget:Widget;

  constructor() { }

  ngOnInit() {
  }

}
