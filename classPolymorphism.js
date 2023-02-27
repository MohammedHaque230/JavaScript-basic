// this is for polymorphisom where can have same method name for parent/child

class Animal{
    
    constructor(name){
        this.name = name
    }

    eats(){
        console.log(this.name+' eats foods')
    }
}

class Cow extends Animal{
    
    eats(){
        super.eats();
        console.log(this.name+' eats grass')
    }
}

let pet = new Cow('Cow');

pet.eats();
