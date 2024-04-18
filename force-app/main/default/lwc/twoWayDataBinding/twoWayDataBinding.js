import { LightningElement, track } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    @track fullname = "Ruddy Crespo Choque";
    @track title = "Salesforce Admin/Developer";

    changeHandler(event) {
        this[event.target.name] = event.target.value;
    }
}