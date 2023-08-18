import { LightningElement, wire} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Vendors__c.Name';
import TYPE_FIELD from '@salesforce/schema/Vendors__c.Vendor_Type__c';
import EMAIL_FIELD from '@salesforce/schema/Vendors__c.Email__c';
import getVendors from '@salesforce/apex/ExquisiteEventController.getVendors';
const COLUMNS =[
    {label:'Vendor Name', fieldName: NAME_FIELD.fieldApiName, type:"text"},
    {label:'Type', fieldName: TYPE_FIELD.fieldApiName, type:"text"},
    {label:'Email', fieldName: EMAIL_FIELD.fieldApiName, type:"email"}
];

export default class DisplayRelatedContacts extends LightningElement {
    columns= COLUMNS;
    @wire(getVendors)
    vendors;
}