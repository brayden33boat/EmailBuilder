import { Injectable } from '@angular/core';

import {Widget} from './widget';

@Injectable()
export class WidgetsService {

  constructor() { }

  getWidgets(){
    var widgets = [];

    widgets.push(new Widget(1, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='center'><td>{{text1}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hi' }]));
    widgets.push(new Widget(2, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='center'><td>{{text1}}</td><td>{{text2}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hello1' }, { 'selector': 'text2', 'value': 'hello2' }]));
    widgets.push(new Widget(3, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='center'><td>{{text1}}</td><td>{{text2}}</td><td>{{text3}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hello1' }, { 'selector': 'text2', 'value': 'hello2' }, { 'selector': 'text3', 'value': 'hello3' }]));

    widgets.push(new Widget(4,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='center'><td><h1>{{title}}</h1></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' }]));
    widgets.push(new Widget(5,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='center'><td><h3>{{title}}</h3></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' }]));

    widgets.push(new Widget(6,3,"fa fa-address-card-o fa-flip-horizontal fa-6", "<table style='width:100%'><tr align='center'><td style='width:50%'><p>{{text}}</p></td><td style='width:50%'><img src='{{img}}' /></td></tr></table>", [{ 'selector': 'text', 'value': 'text' },{'selector':'img','value':'http://www.lijsoccer.com/images/soccerBall.png'}]));
    widgets.push(new Widget(7,3,"fa fa-address-card-o fa-6", "<table style='width:100%'><tr align='center'><td style='width:50%'><img src='{{img}}' /></td><td style='width:50%'><p>{{text}}</p></td></tr></table>", [{ 'selector': 'text', 'value': 'text' },{'selector':'img','value':'http://www.lijsoccer.com/images/soccerBall.png'}]));

    return widgets;
  }

}
