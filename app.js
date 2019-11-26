"use strict";
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting", 1);
accounting.describe();
accounting.addEmployee("Mike");
accounting.addEmployee("Bert");
accounting.printEmployeeInfo();
accounting.addEmployee("Ernie");
accounting.printEmployeeInfo();
