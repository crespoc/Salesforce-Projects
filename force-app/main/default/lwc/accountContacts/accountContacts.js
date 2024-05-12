import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccountContacts from '@salesforce/apex/AccountContactsController.getAccountContacts';

export default class AccountContacts extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId', fields: [NAME_FIELD, INDUSTRY_FIELD]})
    account;

    @wire(getAccountContacts, { accountId: '$recordId'})
    contacts;
}