public class UpdateContact {

    @InvocableMethod(label='Update Contact')
    public static void UpdateContact(List<Contact> con) {

        con[0].put('Description', 'La descripcion esta actualizada');
        update con;

    }
}