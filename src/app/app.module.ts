import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewEmailBuilderComponent } from './view-email-builder/view-email-builder.component';

import {DndModule} from 'ng2-dnd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { EditWidgetComponent } from './view-email-builder/edit-widget/edit-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmailBuilderComponent,
    EditWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditWidgetComponent]
})
export class AppModule { }
