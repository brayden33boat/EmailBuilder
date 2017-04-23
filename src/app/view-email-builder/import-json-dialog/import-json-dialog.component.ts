import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-import-json-dialog',
  templateUrl: './import-json-dialog.component.html',
  styleUrls: ['./import-json-dialog.component.css']
})
export class ImportJsonDialogComponent implements OnInit {
  jsonToUpload: String;
  @Output() uploadJson = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upload(){
    this.uploadJson.emit(this.jsonToUpload);
  }

}
