trigger phoneFIeldTrigger on Account (before insert) {
    if (trigger.isBefore && trigger.isInsert) {
        if (!trigger.new.isEmpty()) {
            for (Account acc : trigger.new) {
                if (acc.Phone == null || acc.Phone == '') {
                    acc.addError('Debe ingresar un numero de telefono');
                }
            }
        }
    }
}