//another OOP class - Inheritance

class Car{
    setName(name){
        this.name = name;
    }


startEngine(){
    console.log('Engine started for ' + this.name);
}
stopEngine(){
    console.log('Engine stopped for ' + this.name)
}
}

/*let myCar = new Car;
myCar.setName('Cadilac')
console.log(myCar.startEngine());
*/
class Toyota extends Car{
    topSpeed(speed){
            console.log('To spped for ' + this.name +' car is ' + speed)
        }
}

let myCar = new Toyota();
myCar.setName('Chevy');
myCar.startEngine();
myCar.stopEngine()
myCar.topSpeed(120);

