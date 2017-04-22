import { Injectable } from '@angular/core';

import {Widget} from './widget';

@Injectable()
export class WidgetsService {

  constructor() { }

  getWidgets(){
    var widgets = [];

    widgets.push(new Widget(1, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td>{{text1}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hi' },{ 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(2, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'>{{text1}}</td><td style='width:50%'>{{text2}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hello1' }, { 'selector': 'text2', 'value': 'hello2' },{ 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(3, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:33%'>{{text1}}</td><td style='width:33%'>{{text2}}</td><td style='width:33%'>{{text3}}</td></tr></table>", [{ 'selector': 'text1', 'value': 'hello1' }, { 'selector': 'text2', 'value': 'hello2' }, { 'selector': 'text3', 'value': 'hello3' },{ 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(4,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='{{align}}'><td><h1>{{title}}</h1></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' },{ 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(5,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='{{align}}'><td><h3>{{title}}</h3></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' },{ 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(6,3,"fa fa-address-card-o fa-flip-horizontal fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><p>{{text}}</p></td><td style='width:50%'><img width='200px' src='{{img}}' /></td></tr></table>", [{ 'selector': 'text', 'value': 'text' },{'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,3,"fa fa-address-card-o fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><img width='200px' src='{{img}}' /></td><td style='width:50%'><p>{{text}}</p></td></tr></table>", [{ 'selector': 'text', 'value': 'text' },{'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(8,4,"fa fa-window-minimize fa-6", "<table style='width:100%'><tr><td><div style='border-bottom:{{color}} 1px solid'></div></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' },{ 'selector': 'color', 'value': 'black' }]));
    widgets.push(new Widget(9,4,"fa fa-window-minimize fa-6", "<table style='width:100%'><tr><td><div style='border-bottom:{{color}} 1px dashed'></div></td></tr></table>", [{ 'selector': 'title', 'value': 'Title 1' },{ 'selector': 'color', 'value': 'black' }]));

    widgets.push(new Widget(10,5,"fa fa-link fa-6", "<table style='width:100%'><tr align='{{align}}'><td><a href='{{href}}'>{{linkText}}</a></td></tr></table>", [{ 'selector': 'align', 'value': 'center' },{ 'selector': 'href', 'value': '#' },{ 'selector': 'linkText', 'value': 'link' }]));
    widgets.push(new Widget(11,5,"fa fa-link fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><a href='{{href1}}'>{{linkText1}}</a></td><td style='width:50%'><a href='{{href2}}'>{{linkText2}}</a></td></tr></table>", [{ 'selector': 'align', 'value': 'center' },{ 'selector': 'href1', 'value': '#' },{ 'selector': 'linkText1', 'value': 'link' },{ 'selector': 'href2', 'value': '#' },{ 'selector': 'linkText2', 'value': 'link' }]));

    var buttonStyle = `color: white;
                        background-color: orange;
                        padding: 10px;
                        border-radius: 3px;
                        font-family: Helvetica;
                        font-size: 15px;
                        line-height: 20.8px;
                        word-wrap: break-word;
                        font-weight: normal;
                        text-decoration: none;`;
    widgets.push(new Widget(12,6,"fa fa-share-square fa-6", "<table style='width:100%'><tr align='{{align}}'><td><a style='"+buttonStyle+"' href='{{href}}'>{{linkText}}</a></td></tr></table>", [{ 'selector': 'align', 'value': 'center' },{ 'selector': 'href', 'value': '#' },{ 'selector': 'linkText', 'value': 'link' }]));
    widgets.push(new Widget(13,6,"fa fa-share-square fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><a style='"+buttonStyle+"' href='{{href1}}'>{{linkText1}}</a></td><td style='width:50%'><a style='"+buttonStyle+"' href='{{href2}}'>{{linkText2}}</a></td></tr></table>", [{ 'selector': 'align', 'value': 'center' },{ 'selector': 'href1', 'value': '#' },{ 'selector': 'linkText1', 'value': 'link' },{ 'selector': 'href2', 'value': '#' },{ 'selector': 'linkText2', 'value': 'link' }]));

    return widgets;
  }

}
