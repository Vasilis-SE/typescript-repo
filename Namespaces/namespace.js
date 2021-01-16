var EmployeeNamespace;
(function (EmployeeNamespace) {
    var Employee = /** @class */ (function () {
        // Constructor
        function Employee(id, cid, n) {
            this.id = id;
            this.companyid = cid;
            this.name = n;
        }
        Employee.prototype.whoAmI = function () {
            console.log("My name is " + this.name + " my current id is [" + this.id + "] and i work for the company with id [" + this.companyid + "] ");
        };
        // Getters - Setters
        Employee.prototype.getEmployeeId = function () { return this.id; };
        Employee.prototype.getEmployeeCompanyId = function () { return this.companyid; };
        Employee.prototype.getEmployeeName = function () { return this.name; };
        Employee.prototype.setEmployeeId = function (id) { this.id = id; };
        Employee.prototype.setEmployeeCompanyId = function (cid) { this.companyid = cid; };
        Employee.prototype.setEmployeeName = function (n) { this.name = n; };
        return Employee;
    }());
    EmployeeNamespace.Employee = Employee;
})(EmployeeNamespace || (EmployeeNamespace = {}));
var Employee = /** @class */ (function () {
    // Constructor
    function Employee(id, cid, n) {
        this.id = id;
        this.companyid = cid;
        this.name = n;
    }
    Employee.prototype.whoAmI = function () {
        console.log("My name is " + this.name + " my current id is [" + this.id + "] and i work for the company with id [" + this.companyid + "] ");
    };
    // Getters - Setters
    Employee.prototype.getEmployeeId = function () { return this.id; };
    Employee.prototype.getEmployeeCompanyId = function () { return this.companyid; };
    Employee.prototype.getEmployeeName = function () { return this.name; };
    Employee.prototype.setEmployeeId = function (id) { this.id = id; };
    Employee.prototype.setEmployeeCompanyId = function (cid) { this.companyid = cid; };
    Employee.prototype.setEmployeeName = function (n) { this.name = n; };
    return Employee;
}());
var employee1 = new EmployeeNamespace.Employee(12, 432532, 'Steven');
var employee2 = new Employee(675, 487568463, 'Mary');
// Same class, same name but doesnt create any conflict
console.log(employee1, employee2);
