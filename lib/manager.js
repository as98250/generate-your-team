const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
      super(name, id,email);
      this.office = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
  
  }

  module.exports = Manager;