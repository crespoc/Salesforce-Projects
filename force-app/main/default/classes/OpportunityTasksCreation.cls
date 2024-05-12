global class OpportunityTasksCreation implements Schedulable {
    global void execute(SchedulableContext sc) {
        List<Opportunity> listOfOpportunities = [SELECT Id, OwnerId 
                                                FROM Opportunity 
                                                WHERE StageName != 'Closed Won' AND StageName != 'Closed Lost'];
        List<Task> tasks = new List<Task>();

        for (Opportunity opp : listOfOpportunities) {
            tasks.add(new Task(OwnerId = opp.OwnerId,
                                        WhatId = opp.Id,
                                        Subject = 'Otro',
                                        ActivityDate = System.today() + 5,
                                        Description = 'Review this opportunity'));
        }
        insert tasks;

    }
}