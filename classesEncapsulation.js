//Encapsulated Class to protest direct visibility or exposed

class Employee{
    setEmpDetails(name, id, phone){
        this.name = name;
        this.id = id;
        this.phone = phone;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhone(){
        return this.phone;
    }
}

let emp1 = new Employee();
 emp1.setEmpDetails('Sara', 01, 7703304111);

 console.log(emp1.name);
 
