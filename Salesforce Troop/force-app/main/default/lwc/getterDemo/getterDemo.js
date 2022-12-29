import { LightningElement } from "lwc";

export default class GetterDemo extends LightningElement {

  title = "This is a Getter power";
  selectedBtn = "OFF";
//   selectedBtn2 = "OFF";
//   button = false;

  get buttonToShow (){
    return `${this.button === false ? 'OFF':'ON'}`
  }

  get getTitle() {
    return this.title.toUpperCase();
  }

  get boxStatus() {
    return `box ${this.selectedBtn === 'ON' ? 'green':'red'}`
    // return this.selectedBtn === "ON" ? "box green" : "box red";
  }
//   get boxStatus2() {
//     return `box ${this.selectedBtn2 === 'ON' ? 'green':'red'}`
//     // return this.selectedBtn === "ON" ? "box green" : "box red";
//   }
  clickHandler(event) {
    console.log(event.currentTarget.innerText);
    this.selectedBtn = event.currentTarget.innerText;
  }
//   clickHandler2(event){
//     this.button = !this.button;
//     this.selectedBtn2 = !event.currentTarget.innerText;
//   }
}