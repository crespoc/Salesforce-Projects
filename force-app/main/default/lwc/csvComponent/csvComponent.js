import { LightningElement, wire } from 'lwc';
import fetchRecords from '@salesforce/apex/csvController.fetchRecords';

export default class CsvComponent extends LightningElement {

    accountData = [];

    columns = [
        { label: 'Account Name', fieldName: 'Name' },
        { label: 'Website', fieldName: 'Website', type: 'url' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
    ];

    @wire(fetchRecords) wiredFunction({data,error}) {
        if(data){
            this.accountData = data;
        } else if (error) {
            console.log(error);
        }
    }

    get checkRecord(){
        return this.accountData.length > 0 ? false: true;
    }

    clickHandler(){
        let selectedRows = [];
        let downloadRecords = [];
        selectedRows = this.template.querySelector("lightning-datatable").getSelectedRows();

        if(selectedRows.length > 0) {
            downloadRecords = [...selectedRows];
        } else {
            downloadRecords = [...this.accountData];
        }

        let csvFile = this.convertArrayToCsv(downloadRecords);
        this.createLinkForDownload(csvFile)

    }

    convertArrayToCsv(downloadRecords){
        let csvHeader = Object.keys(downloadRecords[0]).toString();
        let csvBody = downloadRecords.map((currItem) => Object.values(currItem).toString());
        let csvfile = csvHeader + '\n' + csvBody.join("\n");
        return csvfile;
    }

    createLinkForDownload(csvFile) {
        const downLink = document.createElement("a");
        downLink.href = "data:text/csv;charset-utf-8," + encodeURI(csvFile);
        downLink.target = '_blank';
        downLink.download = 'Account_Data.csv';
        downLink.click();
    }
}