import { Injectable } from '@angular/core';

import {Widget} from './widget';

@Injectable()
export class WidgetsService {

  constructor() { }

  getWidgets(){
    var widgets = [];

    widgets.push(new Widget(1, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td>{{text1}}</td></tr></table>", [{ 'label':'1st Column', 'selector': 'text1', 'value': 'hi' },{ 'label':'Alignment','selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(2, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'>{{text1}}</td><td style='width:50%'>{{text2}}</td></tr></table>", [{'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, {'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(3, 1, "fa fa-align-center fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:33%'>{{text1}}</td><td style='width:33%'>{{text2}}</td><td style='width:33%'>{{text3}}</td></tr></table>", [{ 'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, { 'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' }, { 'label':'3rd Column', 'selector': 'text3', 'value': 'hello3' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(4,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='{{align}}'><td><h1>{{title}}</h1></td></tr></table>", [{'label':'1st Column', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(5,2,"fa fa-header fa-6", "<table style='width:100%'><tr align='{{align}}'><td><h3>{{title}}</h3></td></tr></table>", [{ 'label':'Title', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(7,3,"fa fa-picture-o fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:100%'><img width='200px' src='{{img}}' /></td></tr></table>", [{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(6,3,"fa fa-address-card-o fa-flip-horizontal fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><p>{{text}}</p></td><td style='width:50%'><img width='200px' src='{{img}}' /></td></tr></table>", [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Image Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,3,"fa fa-address-card-o fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><img width='200px' src='{{img}}' /></td><td style='width:50%'><p>{{text}}</p></td></tr></table>", [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(8,4,"fa fa-window-minimize fa-6", "<table style='width:100%'><tr><td><div style='border-bottom:{{color}} 1px solid'></div></td></tr></table>", [{ 'label':'Color', 'selector': 'color', 'value': 'black' }]));
    widgets.push(new Widget(9,4,"fa fa-window-minimize fa-6", "<table style='width:100%'><tr><td><div style='border-bottom:{{color}} 1px dashed'></div></td></tr></table>", [{  'label':'Color', 'selector': 'color', 'value': 'black' }]));

    widgets.push(new Widget(10,5,"fa fa-link fa-6", "<table style='width:100%'><tr align='{{align}}'><td><a href='{{href}}'>{{linkText}}</a></td></tr></table>", [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' }]));
    widgets.push(new Widget(11,5,"fa fa-link fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><a href='{{href1}}'>{{linkText1}}</a></td><td style='width:50%'><a href='{{href2}}'>{{linkText2}}</a></td></tr></table>", [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'1st href', 'selector': 'href1', 'value': '#' },{ 'label':'1st Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'2nd Link', 'selector': 'href2', 'value': '#' },{ 'label':'2nd Link Text', 'selector': 'linkText2', 'value': 'link' }]));

    var buttonStyle1 = `color: white;
                        background-color: {{bgColor1}};
                        padding: 10px;
                        border-radius: 3px;
                        font-family: Helvetica;
                        font-size: 15px;
                        line-height: 20.8px;
                        word-wrap: break-word;
                        font-weight: normal;
                        text-decoration: none;`;
    var buttonStyle2 = `color: white;
                        background-color: {{bgColor2}};
                        padding: 10px;
                        border-radius: 3px;
                        font-family: Helvetica;
                        font-size: 15px;
                        line-height: 20.8px;
                        word-wrap: break-word;
                        font-weight: normal;
                        text-decoration: none;`;

    widgets.push(new Widget(12,6,"fa fa-share-square fa-6", "<table style='width:100%'><tr align='{{align}}'><td><a style='"+buttonStyle1+"' href='{{href}}'>{{linkText}}</a></td></tr></table>", [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' },{'label':'Background Color', 'selector':'bgColor1', 'value':'orange'}]));
    widgets.push(new Widget(13,6,"fa fa-share-square fa-6", "<table style='width:100%'><tr align='{{align}}'><td style='width:50%'><a style='"+buttonStyle1+"' href='{{href1}}'>{{linkText1}}</a></td><td style='width:50%'><a style='"+buttonStyle2+"' href='{{href2}}'>{{linkText2}}</a></td></tr></table>", [{ 'label':'Alignment','selector': 'align', 'value': 'center' },{ 'label':'1st link','selector': 'href1', 'value': '#' },{'label':'1st Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'Second Link', 'selector': 'href2', 'value': '#' },{ 'label':'2nd Link Text', 'selector': 'linkText2', 'value': 'link' },{'label':'1st Background Color','selector':'bgColor1', 'value':'orange'}, {'label':'2nd Background Color','selector':'bgColor2', 'value':'orange'}]));

    widgets.push(new Widget(14,7,"fa fa-arrows-v fa-6", "<table style='width:100%'><tr><td><div style='height:{{height}}'></div></td></tr></table>", [{  'label':'Height', 'selector': 'height', 'value': '30px' }]));

    return widgets;
  }

}
