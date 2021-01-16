namespace EmployeeNamespace {
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
}

class Employee {
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

const employee1 = new EmployeeNamespace.Employee(12, 432532, 'Steven');
const employee2 = new Employee(675, 487568463, 'Mary');

// Same class, same name but doesnt create any conflict
console.log(employee1, employee2);