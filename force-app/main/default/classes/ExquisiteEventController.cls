public with sharing class ExquisiteEventController {
    
    //Fetches a list of Contacts
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, MobilePhone,Email FROM Contact LIMIT 3];
    }

    //Fetches a list of Events
    @AuraEnabled(cacheable=true)
    public static List<Exquisite_Event__c> getEvents(){
        return [SELECT Id, Type__c, Contact__r.FirstName, Contact__r.LastName, Contacts_Number__c, Event_Date_and_Time__c FROM Exquisite_Event__c LIMIT 3];
    }

    //Fetches a list of Vendors
    @AuraEnabled(cacheable=true)
    public static List<Vendors__c> getVendors(){
        return [SELECT Id, Name, Vendor_Type__c,Email__c FROM Vendors__c LIMIT 3];
    }



}