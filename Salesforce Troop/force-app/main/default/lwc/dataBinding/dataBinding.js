import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    title = "Salesforce Troop"
    
    changeController(event){
        this.title = event.target.value

    }
}