//Abstraction in the class method

function Emploee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary= baseSalary;
    
    let monthlyBonus = 2000;

    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is :' + finalSalary);
    }

    this.getEmpDetails = function(){
        console.log('name: '+this.name + ' | Age: ' + this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Emploee('Sara', 22, 98000);
emp1.getEmpDetails();


