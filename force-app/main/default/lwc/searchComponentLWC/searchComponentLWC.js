import { LightningElement, track } from 'lwc';
import searchProds from '@salesforce/apex/SearchController.retriveProducts';
import Label from '@salesforce/schema/ActionLinkTemplate.Label';

const columns = [
    {
        label: 'Name',
        fieldName: 'Name',
        type: 'url',
        typeAttributes: {label:{fieldName: 'Name'},target: '_blank'}
    },{
        label: 'Product Code',
        fieldName: 'ProductCode',
        type: 'text',
    },
];

export default class SearchComponentLWC extends LightningElement {
    @track searchData;
    @track columns = columns;
    @track strSearchProdName;

        handleProductName(event){

            this.strSearchProdName = event.target.value;
            searchProds({strProdName : this.strSearchProdName})
            .then(result => {
                this.searchData = result;
            })
        }

}