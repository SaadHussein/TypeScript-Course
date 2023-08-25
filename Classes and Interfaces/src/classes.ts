abstract class Department {
  // name: string;
  // id: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //readinly mean we can not change the value of property only read it
    // this.name = n;
    // this.id = id;
    // console.log(this.fiscalYear); you can not access static variable from constructor the true way is
    console.log(Department.fiscalYear); //This is a true way
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract descripe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "EECS");
    this.admins = admins;
  }

  descripe() {
    console.log("ITDepartment - ID : " + this.id);
  }
}

class AcountantDepartment extends Department {
  private lastReport: string;
  private static instance: AcountantDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No Reports Founded...!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please Pass in a Value....!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Acountant");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AcountantDepartment.instance) {
      return this.instance; //in this line this works because we are inside static method
    }

    this.instance = new AcountantDepartment("D2", []);
    return this.instance;
  }

  descripe() {
    console.log("AcountantDepartment - ID : " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Saad" || name === "Ahmed") {
      return;
    }

    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employeeOne = Department.createEmployee("Saad");
console.log(employeeOne, Department.fiscalYear);

const department = new ITDepartment("D1", ["Saad"]);

console.log(department);
department.descripe();

department.addEmployee("Saad");
department.addEmployee("Ahmed");
//department.employees[2] = "Fathy"; //That is a big BUG, employees should be private
department.printEmployeeInformation();

// const departmentCopy = {
//   name: 'Saad',
//   descripe: department.descripe,
// };

// departmentCopy.descripe(); // it is give me an error because departmentCopy is not a type of Department
// if we add name property in this object it will work because it now smillar Department object

// const acountantDepartment = new AcountantDepartment("D2", []);
const acountantDepartment = AcountantDepartment.getInstance();

// console.log(acountantDepartment.mostRecentReport);
acountantDepartment.mostRecentReport = "Saad";

acountantDepartment.addReport("Hiiiiiiiiii");
acountantDepartment.printReports();

console.log(acountantDepartment.mostRecentReport);

acountantDepartment.descripe();
