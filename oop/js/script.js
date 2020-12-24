

let User=function(name,age,salary,gender){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.gender=gender;



}
User.prototype.welcome=function(){

    console.log("welcome ");
    
}

class Users{


    constructor(name,age,salary,gender){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.gender=gender;
    }
    welcome(){

        console.log("welcome ");
    }
}


let p1=new Users('mohamed',20,15000,'male');
console.log(p1);