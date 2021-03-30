class Employee {
  public employeeName: string;
  // private employeeName:string
  // it return error when it use outisde the class
  // protected employeeName:string;
  // it is working fine in both class and extended classes but outside those classes it will return error.

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Sara");
console.log(emp1.employeeName);
emp1.greet();
