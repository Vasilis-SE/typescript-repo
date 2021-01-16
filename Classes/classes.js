var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // Constructor
    function Person(fn, ln, bl) {
        this.fname = fn;
        this.lname = ln;
        this.balance = bl;
    }
    Person.prototype.whatsMyName = function () {
        return this.lname + ' ' + this.fname;
    };
    Person.prototype.subtractBalance = function (num) {
        if (num === void 0) { num = 0.0; }
        if (num === 0)
            return false;
        if (this.balance < num)
            return false;
        this.balance -= num;
        return true;
    };
    Person.prototype.addToBalance = function (num) {
        if (num === void 0) { num = 0.0; }
        if (num === 0)
            return false;
        this.balance += num;
        return true;
    };
    // Getters - Setters
    Person.prototype.getBalance = function () { return this.balance; };
    Person.prototype.setBalance = function (bal) { this.balance = bal; };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // Constructor
    function Employee(person, id) {
        var _this = _super.call(this, person.fname, person.lname, person.bal) || this;
        _this.id = id;
        return _this;
    }
    // Getters - Setters
    Employee.prototype.getEmployeeId = function () { return this.id; };
    Employee.prototype.setEmployeeId = function (id) { this.id = id; };
    return Employee;
}(Person));
var person1 = new Employee({ lname: 'Jonathan', fname: 'Williams', bal: 12.65 }, 23);
console.log('My name is: ', person1.whatsMyName());
console.log('My balance is: ', person1.getBalance());
console.log('I want to buy a 330€ DSLR', person1.subtractBalance(330) ? ', and i have the money...' : ', but i do not have the money...');
