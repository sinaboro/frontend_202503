const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes: ["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};

console.log(person.name.firstName);
console.log(person["name"]["firstName"]);
console.log(person["likes"][1]);
console.log(person.printHello());
console.log(person["printHello"]);
console.log(person["printHello"]());

person.age = 30;  //추가

console.log(person["age"]);

delete person["age"];

console.log(person["age"]);