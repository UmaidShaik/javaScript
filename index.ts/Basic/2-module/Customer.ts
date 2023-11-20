export class Customer{ 
 
    constructor(private _fname:string,private _lname:string){ 
    } 
    public setFname(fname:string){ 
        this._fname=fname; 
    } 
    public setLname(lname:string){ 
        this._lname=lname; 
    } 
    public getFname():string{ 
        return this._fname 
    } 
    public getLname():string{ 
        return this._lname 
    } 
     
    } 
    
    