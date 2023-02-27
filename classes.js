// this script practice for class, constructor, function object, etc


class phoneBook{

    constructor(name,num){
        this.name = name;
        this.num = num;
    }
}

let pb1 = new phoneBook('Sara', 11);
let pb2 = new phoneBook('John', 22)

console.log(pb1.name +' and '+ pb2.name)
console.log(pb1.num +',' + pb2.num)
