public with sharing class DemoController {
    
    public String name {get; set;}
    public String city {get; set;}
    
    public DemoController() {

        this.name = 'Ruddy Visualforce';
        this.city = 'Montreal';
    }
}