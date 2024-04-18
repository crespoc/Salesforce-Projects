trigger addressTrg on Account (before insert, before Update) {
    if (trigger.isBefore && (trigger.isInsert || trigger.isUpdate)) {
        if (!trigger.new.isEmpty()) {
            for (Account acc : trigger.new) {
                if (acc.BillingStreet != null || acc.BillingState != null || acc.BillingPostalCode != null || 
                acc.BillingCountry != null || acc.BillingCity != null) {
                     acc.ShippingStreet = acc.BillingStreet;
                     acc.ShippingState = acc.BillingState;
                     acc.ShippingPostalCode = acc.BillingPostalCode;
                     acc.ShippingCountry = acc.BillingCountry;
                     acc.ShippingCity = acc.BillingCity;
                }
            }
        }
    }
}