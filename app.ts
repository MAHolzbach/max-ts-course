class Department {
  // private name: string;
  private employees: string[] = [];

  constructor(public name: string, private readonly id: number) {
    // this.name = n;
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

const accounting = new Department("Accounting", 1);

accounting.describe();

accounting.addEmployee("Mike");
accounting.addEmployee("Bert");
accounting.printEmployeeInfo();

accounting.addEmployee("Ernie");
accounting.printEmployeeInfo();
