class Person {
    fname:string;
    lname:string;
    private balance:number;

    // Constructor
    constructor(fn?:string, ln?:string, bl?:number) {
        this.fname = fn;
        this.lname = ln;
        this.balance = bl;
    }

    whatsMyName():string {
        return this.lname + ' ' + this.fname;
    }

    subtractBalance(num:number=0.0):boolean {
        if(num === 0) return false;
        if(this.balance < num) return false;

        this.balance -= num;
        return true;
    }

    addToBalance(num:number=0.0):boolean {
        if(num === 0) return false;
        this.balance += num;
        return true;
    }

    // Getters - Setters
    getBalance() { return this.balance; }
    setBalance( bal ) { this.balance = bal; }
}

class Employee extends Person {
    private id:number;

    // Constructor
    constructor(person, id:number) {
        super(person.fname, person.lname, person.bal);
        this.id = id;
    }

    // Getters - Setters
    getEmployeeId() { return this.id; }
    setEmployeeId( id ) { this.id = id; }
}

const person1 = new Employee({lname:'Jonathan', fname:'Williams', bal:12.65}, 23);

console.log( 'My name is: ', person1.whatsMyName() );
console.log( 'My balance is: ', person1.getBalance() );
console.log( 'I want to buy a 330€ DSLR', person1.subtractBalance(330) ? ', and i have the money...' : ', but i do not have the money...'  );
