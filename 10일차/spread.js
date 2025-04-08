/*
스프레드 연산자
*/

let arrA = [1,2,3];
let arrB = [4,5,6, ...arrA ];

console.log(arrB);

let objA = {
    a:1,
    b:2,
};

let objB = {
    ...objA,
    c:3,
}
console.log(objB);

/*
function func(a,b,c){
    console.log(a,b,c);
}
*/
let func = (a,b,c)=> console.log(a,b,c);

let arr = [10,20,30];

func(...arr);   //func(10,20,30)

/*
rest매개변수
*/

let func2 = (...rest) => console.log(rest);

func2(1,2,3);
func2(1,2,3,4);
func2(1,2,3,4,5,6,7,);

/*
let func2 = (...rest) => {
    let sum=0;
    rest.forEach(i => sum += i);
    console.log(sum);
}

func2(1,2,3)

*/

let func3 = (param, ...rest) => {
    console.log(param);
    console.log(rest);
}

func3(1,2,3);
func3(1,2,3,4,);
func3(1,2,3,4,5,6);