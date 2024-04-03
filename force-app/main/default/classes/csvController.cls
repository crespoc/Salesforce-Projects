public with sharing class csvController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchRecords(){
        return [SELECT Id, Name, Industry, Website, Phone from Account];
    }

}