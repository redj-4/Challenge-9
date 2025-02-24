//Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
    }
    
    // Returns a formatted string for employee details
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    
    // Returns the annual salary (monthly salary * 12)
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  // Instantiate an employee object
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  
  // Log employee details to the console
  console.log(emp1.getDetails());
  // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
  
  // Log the employee's annual salary to the console
  console.log(emp1.calculateAnnualSalary());
  // Expected output: 60000
  
  //Task 2: Creating a Manager Class
// Manager class extends Employee and adds new functionality
class Manager extends Employee {
  constructor(name, id, department, salary, teamSize) {
    super(name, id, department, salary);
    this.teamSize = teamSize;
  }

  // Overriding getDetails to include team size and change the prefix to "Manager:"
  getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
  }

  // Calculate bonus as 10% of the manager's annual salary
  calculateBonus() {
    return this.calculateAnnualSalary() * 0.1;
  }
}
// Instantiate a manager object with the given test case details
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

// Log manager details to the console
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Log the manager's bonus to the console
console.log(mgr1.calculateBonus());
// Expected output: 9600

//Task 3: Creating a Company Class
class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  // Adds an employee to the company's employee array
  addEmployee(employee) {
    this.employees.push(employee);
  }

  // Logs all employee details to the console
  listEmployees() {
    this.employees.forEach(employee => console.log(employee.getDetails()));
  }
}

// Test Cases:
// Assuming emp1 and mgr1 are already defined from previous tasks:
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

//Task 4: Implementing a Payroll System
// Update Employee's calculateAnnualSalary to include a bonus for managers
Employee.prototype.calculateAnnualSalary = function() {
  const base = this.salary * 12;
  return this instanceof Manager ? base + (base * 0.1) : base;
};

// Add calculateTotalPayroll to the Company class
Company.prototype.calculateTotalPayroll = function() {
  return this.employees.reduce((sum, emp) => sum + emp.calculateAnnualSalary(), 0);
};

// Test Case:
console.log(company.calculateTotalPayroll());
// Expected output: 165600