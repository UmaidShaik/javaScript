const subordinates = []

class Employee {
   constructor (empId, fname, lname, fullname, monthlySalary, annualSalary, designation, department, joining, resignation, experience, contactNo, personalEmail, workEmail, dob, age, address, country, city, officeAddress, reportingManager){
      this.empId=empId,  
      this.fname=fname,
      this.lname=lname,
      this.fullname=fullname,
      this.monthlySalary=monthlySalary,
      this.annualSalary=annualSalary,
      this.designation=designation,
      this.department=department,
      this.joinDate=joining,
      this.resign=resignation,    
      this.experience=experience, 
      this.contactNo=contactNo,
      this.personalEmail=personalEmail,
      this.workEmail=workEmail,
      this.dob=dob,
      this.age=age,
      this.address=address,
      this.country=country,
      this.city=city,
      this.officeAddress=officeAddress,
      this.reportingManager=reportingManager
   }
   
   static newEmployee(empId, fname, lname, monthlySalary, designation, department, contactNo, personalEmail, workEmail, dob, address, country, city, officeAddress, reportingManager){ // factory
      
      if (typeof(empId) != 'number'){
         return "Invalid Employee ID"
      }
      if (typeof(fname) != 'string'){
         return "Invalid first name"
      }
      if (typeof(lname) != 'string'){
         return "Invalid last name"
      }
      if (typeof(monthlySalary) != 'number'){
         return "Invalid monthly salary"
      }
      if (typeof(designation) != 'string'){
         return "Invalid Designation"
      }
      if (typeof(department) != 'string'){
         return "Invalid Department"
      }
      if (typeof(contactNo) != 'number' && contactNo.length != 10){
         return "Invalid Contact Number"
      }
      if (typeof(personalEmail) != 'string'){
         return "Invalid Personal Email"
      }
      if (typeof(workEmail) != 'string'){
         return "Invalid Work Email"
      }
      if (typeof(dob) != 'string'){
         return "Invalid Date Type"
      }

      let date = new Date(dob)

      if (date == 'Invalid Date'){
         return "Invalid Date of Birth"
      }
      if (typeof(address) != 'string'){
         return "Invalid Address"
      }
      if (typeof(country) != 'string'){
         return "Invalid Country"
      }
      if (typeof(city) != 'string'){
         return "Invalid City"
      }
      if (typeof(officeAddress) != 'string'){
         return "Invalid Office Address"
      }

      // let isEmployee = false
      let reportingOfficer = " "
      for (let i=0; i<subordinates.length; i++){
         if (subordinates[i].fullname == reportingManager){
            reportingOfficer = reportingManager
            break
         }
      }

      // if (!isEmployee){
      //    return "Wrong Reporting Manager"
      // }

      let fullname = Employee.getFullName(fname, lname)
      let annualSalary = Employee.calculateAnnualSalary(monthlySalary)
      let joining = Employee.checkJoining() // 30 June
      let resignation = 'Not yet resigned'
      let experience = Employee.getExperience(resignation, joining) // present employee
      let age = Employee.checkAge(dob)
       
      let emp = new Employee(empId, fname, lname, fullname, monthlySalary, annualSalary, designation, department, joining, resignation, experience, contactNo, personalEmail, workEmail, dob, age, address, country, city, officeAddress, reportingOfficer)
      Employee.getSubordinates(emp)
      return emp // constructor set values
   }

   static getSubordinates (employeeDetails){
      subordinates.push(employeeDetails)
   }

   static getFullName (fname, lname){
      return (fname + ' ' + lname)
   }

   static calculateAnnualSalary (monthlySalary) {
      let annualSalary = monthlySalary * 12
      return annualSalary
   }

   static checkJoining () {
      const joinDate = new Date()
      let date = joinDate.getMonth() + '-' + joinDate.getDate() + '-' + joinDate.getFullYear()
      return date
   }

   setResignation() {
      const resignDate = new Date()
      const joinDate = new Date(this.joinDate)
      let date = (resignDate.getMonth()+1) + '-' + resignDate.getDate() + '-' + resignDate.getFullYear()
      this.resign = date
      this.experience = resignDate.getMonth() - joinDate.getMonth() + " month"
      return this.fullname + " resigned succesfully"
   }

   // resignEmployee () {
   //    const resignDate = new Date()
   //    let date = resignDate.getDate() + '-' + (resignDate.getMonth()+1) + '-' + resignDate.getFullYear()
   //    return date
   // }

   static getExperience (resignation, joinDate) { // Not yet resigned
      // console.log(resign);
      // let exp = resign.getFullYear() - joining.getFullYear
      if (resignation == "Not yet resigned"){
         return 'Present Employee'
      }
      else {
         let exp = resignation.getFullYear() - resignation.getFullYear()
      // let exp = this.age
         return exp }
   }

   static checkAge (dob) {
      let currentDate = new Date()
      let birthDate = new Date(dob)
      let months = 0
      let year = 0
      // let currentYear = currentDate.getFullYear()
      // let birthYear = birthDate.getFullYear()
      if (currentDate.getMonth() < birthDate.getMonth()){
          months = (12-birthDate.getMonth()) + currentDate.getMonth()
          year = year-1
      } else {
          months = currentDate.getMonth() - birthDate.getMonth()
      }
      year = year + (currentDate.getFullYear() - birthDate.getFullYear())
      
      return year + " yrs " + months + " months"
   }

   static setReportingManager (name){
      
   }

}

let emp1 = Employee.newEmployee(101, 'Umaid', 'Shaikh', 10000, 'Software Trainee', 'Banking Cash Management', 9619479893, 'umaidshaikh@gmail.com', 'umaid@aurionpro.com', '11-23-2001', 'kalyan', 'India', 'Navi Mumbai', 'Rabale, Thane', "Vaibhav")

let emp2 = Employee.newEmployee(102, 'Rahul', 'kumar', 15000, 'Data Analyst', 'Banking Cash Management', 9920276642, 'rahul@gmail.com', 'rahul@aurionpro.com', '10-06-2001', 'Sec-21 Panvel', 'India', 'Navi Mumbai', 'Rabale, Thane', "Dipika Adak")
console.log(emp1);
console.log(emp1.joinDate);
console.log(emp1.resign);

console.log(emp1.experience);

console.log(emp1.setResignation());
console.log(emp1.resign);

console.log(emp1.experience);

console.log(emp1.fname) 
console.log(subordinates)

console.log(emp1.reportingManager);
console.log(emp2.reportingManager);

// console.log(emp1.resign);
// console.log(emp1.experience);
