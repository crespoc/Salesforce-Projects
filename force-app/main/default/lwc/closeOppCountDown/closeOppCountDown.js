import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class CloseOppCountDown extends LightningElement {
    
    @api recordId;
    data;
    error;

    deadline;
    timer = 'Timer to start !!';
    setTimeInterval;

    @wire(getRecord, { recordId: "$recordId", fields: [CLOSEDATE_FIELD]})
    wireMilestone({ data, error}) {
        if(data) {
            this.deadline = getFieldValue(data, CLOSEDATE_FIELD);
            clearInterval(this.setTimeInterval);
            this.setTimeInterval = setInterval(() => {
                let day = new Date(this.deadline);

                let ddate = day.getTime();

                let currentDateTime = new Date().getTime();

                let timeDifference = ddate - currentDateTime;

                this.timer = 'I m timeDifference ' + timeDifference;

                if(timeDifference < 0) {
                    clearInterval(this.setTimeInterval);
                    this.timer = 'Close Date Lapsed !!!';
                } else {
                    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                    this.timer = days + "days " + hours + "hrs " + minutes + "mins " + seconds + "secs ";
                }

            }, 1000)    

        } else if (error){
            this.error = error;

            this.ddate = undefined;
        }
    }
}