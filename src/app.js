import { LightningElement } from "lwc";

export default class App extends LightningElement {

cod = "c-01";
name = "Tudo Bom Records"
phone = "888-888"
email = "exemplo@gmail.com"
rating = 1000;

cod1 = "c-02";
name1 = "Nada Bom Records"
phone1 = "333-333"
email1 = "exemplo2@gmail.com"
rating1 = 2000;x

trocarDado1(){

  this.cod  =  this.cod1;
  this.name  =   this.name1;
  this.phone  =   this.phone1;
  this.email =  this.email1;
  this.rating  =  this.rating1;
}
}

