public with sharing class tabController2 {

    public List<Account> accList {get; set;}
    public List<Contact> conList {get; set;}

    public tabController2() {
        accList = [select name from account where Industry = 'energy'];
    }

    public void contactRec(){
        conList = [select lastName from contact];
    }
}