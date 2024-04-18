public with sharing class descCrack {
    @InvocableMethod(label='Update Account Description')
    public static void descCrack(List<Account> newAccounts) {
        for(Account acc : newAccounts) {
            if(acc.Description == null) {
                acc.Description = 'Vamos que se puede Ruddy';
            }
        }
    }
}