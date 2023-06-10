const maowObject = {
    name: "sameel",
    age: 22,
    rollNo: "201370025",
    getDetails: function(){
        return `Name: ${this.name}, Age: ${this.age}, rollNo: ${this.rollNo}`;
    }
}

//ignoring values

const [g,,h] = [1,2,3];
console.group("Ignoring Values Example");
console.log(g);
console.log(h);
console.groupEnd();

const userObject = {
    "name": "sameel",
    "age": 22,
    "gender": "male",
    "address": {
        "street": "House # 12 Block A",
        "city": "Gujranwala",
        "country": "Pakistan",
        "location": {
            longitude: 55.5,
            latitude: 74.3
        }
    }
}

console.group("Object Destructuring...");
const {name, age, gender, address: {city}} = userObject;
console.log(name, age, gender, city);
console.groupEnd();

console.group("Object Destructuring with rename keys");
const {name: fullName, address: {location:{longitude: renamedLocation}}} = userObject;
console.log(name, renamedLocation);
console.groupEnd;

//rest operator

function sum(...number){
    let sum = 0;
    let size = number.length;

    for(let i = 0; i < size; i++){
        sum = sum + number[i];
    }
    return sum;

}

console.group("Rest Operator...");
console.log(sum(5,7,3,2,7,1,7));
const {name: newName, ...remainingObj} = userObject;
console.log(newName, remainingObj);
console.groupEnd();
