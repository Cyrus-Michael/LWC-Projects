import { LightningElement } from 'lwc';

export default class TemplateTrueDemo extends LightningElement {
    showText = false;
    hiddeText = false;
    showController(){
        this.showText = true;
    }
    hiddeController(){
        this.showText = false;
    }
}