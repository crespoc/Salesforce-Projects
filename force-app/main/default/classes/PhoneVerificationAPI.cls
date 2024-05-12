public class PhoneVerificationAPI {

    public static PhoneResponse InvokeVeriPhoneAPI(string mobileNum) {
        string apiKey = 'B1E647CBCE374D14A6AF0D5290E29C2F';
        string veriphoneEndpoint = 'https://api.veriphone.io/v2/verify?phone='+mobileNum+'&key='+apiKey;
        //Http
        Http h = new Http();
        //HttpRequest
        HttpRequest req = new HttpRequest();
        req.setEndpoint(veriphoneEndpoint);
        req.setMethod('GET');
        req.setTimeout(6000);
        //HttpResponse
        HttpResponse res = h.send(req);
        //Response Instance to returnto calling class
        PhoneResponse pres = (PhoneResponse) JSON.deserialize(res.getBody(), PhoneResponse.class);
        return pres;
    }
        
    public class PhoneResponse{
        public string status;
        public string phone;
        public boolean phone_valid;
        public string phone_type;
        public string phone_region;
        public string country;
        public string country_code;
        public string country_prefix;
        public string international_number;
        public string local_number;
        public string e164;
        public string carrier;
    }
}