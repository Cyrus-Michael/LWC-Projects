import { LightningElement } from 'lwc';

export default class TemplateToggleDemo extends LightningElement {
    toggleText= true;

    showToggle(){
        this.toggleText = !this.toggleText;
    }
}