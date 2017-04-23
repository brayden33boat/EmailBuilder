import { Injectable } from '@angular/core';

import {Widget} from './widget';

import * as templates from './widget-templates';

@Injectable()
export class WidgetsService {

  constructor() { }

  //This will of course later pull from back end. But for now, meh
  getWidgets(){
    var widgets = [];

    widgets.push(new Widget(1, 1, "fa fa-align-center fa-6", templates.template1,[{ 'label':'1st Column', 'selector': 'text1', 'value': 'hi' },{ 'label':'Alignment','selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(2, 1, "fa fa-align-center fa-6", templates.template2, [{'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, {'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(3, 1, "fa fa-align-center fa-6", templates.template3, [{ 'label':'1st Column', 'selector': 'text1', 'value': 'hello1' }, { 'label':'2nd Column', 'selector': 'text2', 'value': 'hello2' }, { 'label':'3rd Column', 'selector': 'text3', 'value': 'hello3' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(4,2,"fa fa-header fa-6", templates.template4, [{'label':'1st Column', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(5,2,"fa fa-header fa-6", templates.template5, [{ 'label':'Title', 'selector': 'title', 'value': 'Title 1' },{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(7,3,"fa fa-picture-o fa-6", templates.template6, [{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,3,"fa fa-picture-o fa-6", templates.template7, [{'label':'Img Url', 'selector':'img1','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{'label':'Img Url', 'selector':'img2','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(6,3,"fa fa-address-card-o fa-flip-horizontal fa-6", templates.template8, [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Image Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));
    widgets.push(new Widget(7,3,"fa fa-address-card-o fa-6", templates.template9, [{ 'label':'1st Column', 'selector': 'text', 'value': 'text' },{'label':'Img Url', 'selector':'img','value':'https://saffadesign.files.wordpress.com/2014/11/placeholder.jpg'},{ 'label':'Alignment', 'selector': 'align', 'value': 'center' }]));

    widgets.push(new Widget(8,4,"fa fa-window-minimize fa-6", templates.template10, [{ 'label':'Color', 'selector': 'color', 'value': 'black' }]));
    widgets.push(new Widget(9,4,"fa fa-window-minimize fa-6", templates.template11, [{  'label':'Color', 'selector': 'color', 'value': 'black' }]));

    widgets.push(new Widget(10,5,"fa fa-link fa-6", templates.template12, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' }]));
    widgets.push(new Widget(11,5,"fa fa-link fa-6", templates.template13, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'1st href', 'selector': 'href1', 'value': '#' },{ 'label':'1st Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'2nd Link', 'selector': 'href2', 'value': '#' },{ 'label':'2nd Link Text', 'selector': 'linkText2', 'value': 'link' }]));

    widgets.push(new Widget(12,6,"fa fa-share-square fa-6", templates.template14, [{ 'label':'Alignment', 'selector': 'align', 'value': 'center' },{ 'label':'Link', 'selector': 'href', 'value': '#' },{ 'label':'Link Text', 'selector': 'linkText', 'value': 'link' },{'label':'Background Color', 'selector':'bgColor1', 'value':'orange'}]));
    widgets.push(new Widget(13,6,"fa fa-share-square fa-6", templates.template15, [{ 'label':'Alignment','selector': 'align', 'value': 'center' },{ 'label':'1st link','selector': 'href1', 'value': '#' },{'label':'1st Link Text', 'selector': 'linkText1', 'value': 'link' },{ 'label':'Second Link', 'selector': 'href2', 'value': '#' },{ 'label':'2nd Link Text', 'selector': 'linkText2', 'value': 'link' },{'label':'1st Background Color','selector':'bgColor1', 'value':'orange'}, {'label':'2nd Background Color','selector':'bgColor2', 'value':'orange'}]));

    widgets.push(new Widget(14,7,"fa fa-arrows-v fa-6", templates.template16, [{  'label':'Height', 'selector': 'height', 'value': '30px' }]));

    return widgets;
  }

}
