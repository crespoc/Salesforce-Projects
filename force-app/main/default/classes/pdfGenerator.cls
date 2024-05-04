public with sharing class pdfGenerator {
    
    public string name {get; set;}
    public string phone {get; set;}
    public string message {get; set;}
    
    public pdfGenerator() {}

    public PageReference downloadPDF(){
        
        String pageURL = '/apex/sampleFormPDF';

        PageReference downloadPDFPage = new PageReference(pageURL);
        downloadPDFPage.getHeaders().put('content-disposition', 'attachment; filename=downloadPDFPage.pdf');
        return downloadPDFPage;
    }
}