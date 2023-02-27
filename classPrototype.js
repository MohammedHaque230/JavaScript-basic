// this class is regards Proto Type

let EmpDetails = function (name, age){
    this.name = name;
    this.age = age;
};


EmpDetails.prototype.getName = function(){
    return this.name;
};
EmpDetails.prototype.getAge = function(){
    return this.age;
};

let emp1 = new EmpDetails('John', '30');
let emp2 = new EmpDetails('Sara', '21');

console.log(emp1.getName());
console.log(emp2.getName());
