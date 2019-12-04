class Department {
  // private name: string;
  employees: string[] = [];
  static fiscalYear = 2020;
  constructor(public name: string, readonly id: number) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {
      name: name
    };
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please provide report text.");
    }
    this.addReport(value);
  }

  constructor(id: number, private reports: string[]) {
    super("Accounting", id);
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Mike") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const employee1 = Department.createEmployee("Mark");

const it = new ITDepartment(1, ["Mike"]);
const accounting = new AccountingDepartment(2, []);

// console.log(Department.fiscalYear);
// accounting.mostRecentReport = "Report number 5.";
// console.log(accounting.mostRecentReport);
// it.describe();

// it.addEmployee("Mike");
// it.addEmployee("Bert");
// it.printEmployeeInfo();

// it.addEmployee("Ernie");
// it.printEmployeeInfo();

// console.log(it);
