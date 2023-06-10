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

