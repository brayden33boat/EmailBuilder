import { Injectable } from '@angular/core';

import {Widget} from './widget';

import * as templates from './widget-templates';

@Injectable()
export class WidgetsService {

  constructor() { }

  //This will of course later pull from back end. But for now, meh
  getWidgets(){
    var widgets = [];

    widgets.push(new Widget(1, "1 Column Text", 1, "fa fa-align-center fa-4", templates.template1,[{ 'label':'1st Column', 'selector': 'text1', 'value': 'hi' },{ 'label':'Alignment','selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(2, "2 Columns Text", 1, "fa fa-align-center fa-4", templates.template2, [{'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, {'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(3, "3 Columns Text", 1, "fa fa-align-center fa-4", templates.template3, [{ 'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, { 'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' }, { 'label':'3rd Column', 'selector': 'text3', 'value': 'hello3' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(4,"Big Header", 2,"fa fa-header fa-4", templates.template4, [{'label':'1st Column', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(5, "Medium Header", 2,"fa fa-header fa-4", templates.template5, [{ 'label':'Title', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(7,"Single Image", 3,"fa fa-picture-o fa-4", templates.template6, [{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'}, {'label':'Img Size', 'selector':'imgSize', 'value':'200px'}, { 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,"Two Images", 3,"fa fa-picture-o fa-4", templates.template7, [{'label':'Img Url', 'selector':'img1','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{'label':'Img 2 Size', 'selector':'img1Size', 'value':'200px'},{'label':'Img 1 Size', 'selector':'img2Size', 'value':'200px'},{'label':'Img Url', 'selector':'img2','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(6,"Text and Image", 3,"fa fa-address-card-o fa-flip-horizontal fa-4", templates.template8, [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Img Size', 'selector':'imgSize', 'value':'200px'},{'label':'Image Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,"Image and Text", 3,"fa fa-address-card-o fa-4", templates.template9, [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Img Size', 'selector':'imgSize', 'value':'200px'},{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(8,"Solid Divider",4,"fa fa-window-minimize fa-4", templates.template10, [{ 'label':'Color', 'selector': 'color', 'value': 'black' }]));
    widgets.push(new Widget(9,"Dotted Divider",4,"fa fa-window-minimize fa-4", templates.template11, [{  'label':'Color', 'selector': 'color', 'value': 'black' }]));

    widgets.push(new Widget(10,"Single Link",5,"fa fa-link fa-4", templates.template12, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link URL', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' }]));
    widgets.push(new Widget(11,"Two Links", 5,"fa fa-link fa-4", templates.template13, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'First Link URL', 'selector': 'href1', 'value': '#' },{ 'label':'First Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'Second Link URL', 'selector': 'href2', 'value': '#' },{ 'label':'Second Link Text', 'selector': 'linkText2', 'value': 'link' }]));

    widgets.push(new Widget(12,"Single Button",6,"fa fa-share-square fa-4", templates.template14, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link URL', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' },{'label':'Background Color', 'selector':'bgColor1', 'value':'orange'}]));
    widgets.push(new Widget(13,"Two Buttons",6,"fa fa-share-square fa-4", templates.template15, [{ 'label':'Alignment','selector': 'align', 'value': 'center' },{ 'label':'Second Link URL','selector': 'href1', 'value': '#' },{'label':'First Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'Second Link URL', 'selector': 'href2', 'value': '#' },{ 'label':'Second Link Text', 'selector': 'linkText2', 'value': 'link' },{'label':'First Background Color','selector':'bgColor1', 'value':'orange'}, {'label':'Second Background Color','selector':'bgColor2', 'value':'orange'}]));

    widgets.push(new Widget(14,"Divider",7,"fa fa-arrows-v fa-4", templates.template16, [{  'label':'Height', 'selector': 'height', 'value': '30px' }]));

    return widgets;
  }

}
