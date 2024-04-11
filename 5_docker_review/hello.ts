// Interface for a Person object
interface Person {
    firstName: string;
    lastName: string;
    greet(): string;
  }
  
  // Class implementing the Person interface
  class Customer implements Person {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greet(): string {
      return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
  }
  
  // Function with type annotations
  function createCustomer(firstName: string, lastName: string): Customer {
    return new Customer(firstName, lastName);
  }
  
  // Create a customer object
  const customer1 = createCustomer("John", "Doe");
  
  // Call the greet method
  console.log(customer1.greet());
  