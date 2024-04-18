public with sharing class PDFController {

    public List<Contact> contacts { get; set; }
    public PDFController() {

        contacts = [SELECT Name, Account.Name, Phone, Description FROM Contact];        

    }
}