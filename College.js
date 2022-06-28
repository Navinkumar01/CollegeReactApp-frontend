import { v4 as uuid } from "uuid";


export class College{
    constructor(Name, tagline, address, mobile ){
        this.Name = Name;
        this.tagline = tagline;
        this.mobile = mobile;
        this.address = address;
        this.createdAt = new Date().toISOString();
        this.id = uuid();
        this.isDisabled = true;
    
    }
}