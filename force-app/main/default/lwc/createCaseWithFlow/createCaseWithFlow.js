import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateCaseWithFlow extends LightningElement {
    subject;
    description;
    flowName = '';

    handleCreate() {
        let isValid = true;
        let fields = this.template.querySelectorAll('lightning-input');
        fields.forEach(field => {
            if(!field.checkValidity()) {
                field.reportValidity();
                isValid = false;
            }
        });
        if(isValid) { 
            this.flowName = 'create_Case_from_buttom';
        }        
    }

    handleStatusChange(event) {
        this.flowName = '';
        if (event.detail.status === "FINISHED_SCREEN") {    
            this.subject = '';
            this.description = '';        
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Case created successfully.!',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        } else if (event.detail.status === "ERROR") {            
            console.log('Error...!!!');
        }
    }

    handleSubjectChange(event) {
        this.subject = event.detail.value;
    }

    handleDescChange(event) {
        this.description = event.detail.value;
    }

    get inputVariables() {
        return [
            {
                name: 'Subject',
                type: 'String',
                value: this.subject
            },
            {
                name: 'Description',
                type: 'String',
                value: this.description
            }
        ];
    }
}