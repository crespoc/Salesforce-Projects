public with sharing class ActionDemoController {

    public String name {get; set;}
    public void show(){
        name = 'Inside the show method';
    }
}