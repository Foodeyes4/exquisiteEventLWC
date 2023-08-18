import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ExquisiteEventController.getContacts';

const COLUMNS =[
    {label:'Contact Name', fieldName: NAME_FIELD.fieldApiName, type:"text"},
    {label:'Mobile Number', fieldName: MOBILE_FIELD.fieldApiName, type:"phone"},
    {label:'Email', fieldName: EMAIL_FIELD.fieldApiName, type:"email"},
];

export default class DisplayRelatedContacts extends LightningElement {
    columns= COLUMNS;
    @wire(getContacts)
    contacts;

   
}