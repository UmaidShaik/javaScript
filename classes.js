class Student{
    constructor(rollno,marks,fname,lname,dob){
    this.roll=rollno
    this.marks=marks
    this.fname=fname
    this.lname=lname
    this.dob=dob
    this.getAge=this.getAge()
     this.avgmarks=this.getaverageMarks()
     this.grade=this.getgrades()
     this.final=this.getfinal()
    }

   getAge(){
    const currentDate=new Date()
    const BirthDate=new Date(this.dob)
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


    getfullname(){
        return(this.fname+' '+this.lname)
    }
     
    getaverageMarks(){ 
        let sum = 0; 
        for (let i = 0; i < this.marks.length; i++) { 
        sum += this.marks[i]; 
        } 
        return sum/this.marks.length 
    }
    // marks [70.60.40]
    // grades [a,60,40]
     getgrades(){    
        let grades=[...this.marks]
        for (let index = 0; index < this.marks.length; index++) {
            if(this.marks[index]>=70){
                grades[index]='A'
            }
            else if(this.marks[index]>=50){
                grades[index]='B'
            }
            else if(this.marks[index]>=40){
                grades[index]='C'
            }      
        
        }
        return grades
    } 

    getfinal(){
        let grades
        if(this.avgmarks>=70){
            grades='A'
        }
        else if(this.avgmarks>=50){
             grades='B'
        }
        else if(this.avgmarks>=40){
            grades='C'
        }
        return grades
        }
    }



let s1=new Student(1,[70,60,40],'Umaid','shaikh','07-23-2001')
// console.log(s1.fname);
// let s2=new Student(2,40,'sahil','shinde')

// console.log(s1.getfullname());
// temp=s1.Student
// s1.Student=s2.Student
// s2.Student=temp

// // console.log(s1.getavgmarks());
console.log(s1.avgmarks);
console.log(s1.grade);
console.log(s1.final);
console.log(s1.getAge);
console.log( );