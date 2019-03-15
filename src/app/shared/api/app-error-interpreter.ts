import ServeResponse from "../models/ServeResponse";

export default class AppErrorInterpreter {
    private namesXlated: any = {
        // General/Ubiquitous
        "duplicate": "There was a duplicate.",
        "notes": "Notes",
        // Job Ads
        "title": "Position/Title",
        "adContent": "Ad Content",
        "postedDatetime": "Date Posted",
        "sourceUrl": "Source URL",
        "byEmail": "By Email Checkbox",
        "employerCompanyName": "Employer Company Name",
        "purpose": "Purpose",
        // Employers
        "companyName": "Company Name",
        "isPrinciple": "Is Principle Checkbox",
        "employsIt": "Employs IT Regularly Checkbox",
        "siteUrl": "Company Site URL",
        // Submissions
        "position": "Position",
        "isRejected": "Is Rejected Checkbox",
        "contactPosition": "Contact Position",
        "contactFirst": "Contact First Name",
        "contactLast": "Contact Last Name",
        "contactInitial": "Contact Initial",
        "contactPrefix": "Contact Prefix",
        "contactEmail": "Contact Email",
        "contactPhone": "Contact Phone",
        "contactSite": "Contact Personal Site URL",
        "submittedDatetime": "Date Time Submitted"
    };
    public errorMessages: string[];
    private ok = true;
    private integrityViolation: boolean;
    
    public isOk(){
        return this.ok;
    }
    
    public isIntegrityViolation(){
        return this.integrityViolation;
    }

    public getErrorMessages() :string[] {
        return this.errorMessages;
    }
    constructor (serveResponse: ServeResponse) {
        this.integrityViolation = false;
        this.ok = true;
        if(serveResponse.code === "23000") {
            this.integrityViolation = true;    
            this.ok = false;
        }
        this.errorMessages = [];
        switch(serveResponse.error) {
            case "appError":
                for(let responseCode in serveResponse.model) {
                    for(let dictCode in this.namesXlated) {
                        let msg = "";
                        if(responseCode === dictCode) {
                            for(let responseMessage in serveResponse.model[responseCode]) {
                                msg = this.namesXlated[dictCode]  + ": " +  serveResponse.model[responseCode][responseMessage];
                                this.errorMessages.push(msg);
                            }                            
                        }
                    }
                }
                this.ok = false;
                break;
            case "exception": 
                this.errorMessages.push("The server had a problem: Code " + serveResponse.code);
                this.errorMessages.push("Message: " + serveResponse.message);
                this.ok = false;
                break;
        }
    }
}

