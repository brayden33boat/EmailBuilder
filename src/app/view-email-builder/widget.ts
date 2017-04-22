export class Widget {
  constructor(private id: number, private type:number, private favicon:String, private htmlTemplate: String, private insertables: [{label:string, selector:string,value:string}]) { }

  getHtml() {
    var html = this.htmlTemplate;

    for (var i = 0; i < this.insertables.length; i++) {
      var selector = '{{' + this.insertables[i].selector + '}}';
      var val = this.insertables[i].value;

      html = html.replace(selector, val);
    }

    return html;
  }

  getType(){
    return this.type;
  }

  getFavicon(){
    return this.favicon;
  }

  getID() {
    return this.id;
  }

  getHtmlTemplate() {
    return this.htmlTemplate;
  }

  getInsertables() {
    return this.insertables;
  }
}