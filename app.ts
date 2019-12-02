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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }
}

const it = new ITDepartment(1, ["Mike"]);

it.describe();

it.addEmployee("Mike");
it.addEmployee("Bert");
it.printEmployeeInfo();

it.addEmployee("Ernie");
it.printEmployeeInfo();

console.log(it);
