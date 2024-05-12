public class PhoneVerificationAPIController {

    @invocablemethod(Label='Verify Mobile No' description='Make API Call to PhoneVerification API')

    public static list<Boolean> verifyPhoneNumber(list<string> mobileNumbers){
        PhoneVerificationAPI.PhoneResponse mobileNumberResponse = PhoneVerificationAPI.InvokeVeriPhoneAPI(mobileNumbers[0]);
        return new list<boolean> {mobileNumberResponse.phone_valid};
    }
}