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
  