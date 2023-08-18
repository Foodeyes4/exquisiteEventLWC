import { LightningElement, wire } from 'lwc';
import getEvents from '@salesforce/apex/ExquisiteEventController.getEvents';
const COLUMNS =[
    {label:'Event Type', fieldName: "type", type:"text"},
    {label:'First Name', fieldName: "firstName", type:"text"},
    {label:'Last Name', fieldName: "lastName", type:"text"},
    {label:'Phone', fieldName: "phone", type:"phone"},
    {label:'Event Date:Time', fieldName: "dateTime", type:"datetime",}
];

export default class DisplayRelatedContacts extends LightningElement {
    columns= COLUMNS;
    events = [];
    error;
    @wire(getEvents)
    
    myEvents(result) {
        this.events = [];
        if (result.data) {
            this.events = result.data.map(element => ({
                Id: element.Id,
                type: element.Type__c,
                firstName: element.Contact__r.FirstName,
                lastName: element.Contact__r.LastName,
                phone: element.Contacts_Number__c,
                dateTime: element.Event_Date_and_Time__c
            }));
            
            this.error = undefined;
            console.log(JSON.parse(JSON.stringify(this.events)));
        } else if (result.error) {
            this.error = result.error;
            this.events = undefined;
        }
    }
    
}