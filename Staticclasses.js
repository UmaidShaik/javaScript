class Student{
    constructor(fname,lname,dob,marks,rollno,age,avgM,grades,finalgrade){ 
    this.roll=rollno
    this.marks=marks
    this.fname=fname   
    this.lname=lname
    this.dob=dob
    this.age=age
    this.avgM=avgM
    this.grade=grades
    this.finalgrade=finalgrade
    }
    static newStudent(fname,lname,dob,marks,rollno){
        if(typeof fname!='string'){
        return"Invalid fname"

        }
        if(typeof lname!='string'){
        return "Invalid lname"
        }
        if(typeof dob!='string'){
        return 'dobinvalid'
        }
        if(typeof marks!='object'){
        return 'marksinvalid'
        }
        for (let i = 0; i < marks.length; i++) {
            if(typeof marks[i]!='number'){
            return 'not a number'  
            }  
        }
        if(typeof rollno!='number'){
        return "rollnoinvalid"
        }
        
         let avgM=Student.getaverageMarks(marks);
         let grades=Student.getgrades(marks);
         let finalgrade=Student.getfinal(avgM);
         let age=Student.getAge(dob)
        //  let dob=new Date(dob)
             return new Student(fname,lname,dob,marks,rollno,age,avgM,grades,finalgrade)   
    }
   static getAge(dob){
    const currentDate=new Date()
    const BirthDate=new Date( dob)
    let year = currentDate.getFullYear()-BirthDate.getFullYear(); 
    let months=0
    if(currentDate.getMonth()>=BirthDate.getMonth()){         
         months = currentDate.getMonth()-BirthDate.getMonth()  
    }
    else{
         months = (12-BirthDate.getMonth())+currentDate.getMonth()    
        year=year-1
    }

    

  return year+"years "+months+"months"

   }


    static getfullname(){
        return(this.fname+' '+this.lname)
    }
     
    static getaverageMarks(marks){ 
        let sum = 0; 
        for (let i = 0; i < marks.length; i++) { 
        sum += marks[i]; 
        } 
        return sum/marks.length 
    }
    // marks [70.60.40]
    // grades [a,60,40]
     static getgrades(marks){    
        let grades=[...marks]
        for (let index = 0; index < marks.length; index++) {
            if(marks[index]>=70){
                grades[index]='A'
            }
            else if(marks[index]>=50){
                grades[index]='B'
            }
            else if(marks[index]>=40){
                grades[index]='C'
            }      
        
        }
        return grades
    } 

    static getfinal(avgM){
        let grades
        if(avgM>=70){
            grades='A'
        }
        else if(avgM>=50){
             grades='B'
        }
        else if(avgM>=40){
            grades='C'
        }
        return grades
        }
    }



let s1=Student.newStudent('Umaid','shaikh','07-23-2001',[70,60,40],1)  
let s2=Student.newStudent('dipika','adak','07-23-2001',[70,20,40],1)   //fname=dipika
let s3={
    fname: 'dipika', lname: 'adak',
}


// console.log(s1.fname);
// let s2=new Student(2,40,'sahil','shinde')

// console.log(s1.getfullname());
// temp=s1.Student
// s1.Student=s2.Student
// s2.Student=temp

// // console.log(s1.getavgmarks());
// console.log(s1.avgmarks);
// console.log(s1.grade);
// console.log(s1.final);
// console.log(s1.getAge());
console.log(s2.fname)    
console.log(s3.fname);