import { LightningElement } from 'lwc';

export default class TemplateFalseDemo extends LightningElement {
    
    hideText= false;
    hideController(){
        this.hideText =  true;

    }
}