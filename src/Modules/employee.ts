export class Employee {
    private id:number;
    private companyid:number;
    private name:string;

    // Constructor
    constructor(id:number, cid:number, n:string) {
        this.id = id;
        this.companyid = cid;
        this.name = n;
    }

    whoAmI():void {
        console.log(`My name is ${this.name} my current id is [${this.id}] and i work for the company with id [${this.companyid}] `);
    }

    // Getters - Setters
    getEmployeeId() { return this.id; }
    getEmployeeCompanyId() { return this.companyid; }
    getEmployeeName() { return this.name; }

    setEmployeeId( id ) { this.id = id; }
    setEmployeeCompanyId( cid ) { this.companyid = cid; }
    setEmployeeName( n ) { this.name = n; }
}
