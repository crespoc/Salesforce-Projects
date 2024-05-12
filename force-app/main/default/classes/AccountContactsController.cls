public with sharing class AccountContactsController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountContacts(String accountId) {
        // Implement your logic to fetch contacts related to the account
        // You can use SOQL queries or other methods here
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId LIMIT 5];
    }
}
