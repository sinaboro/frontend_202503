/*
콜백함수!!
*/

//함수, 익명함수, 람다함수, 즉시실행함수 , 콜백함수수
(function(){
    console.log("--------------");
})();

function parentFunc(callback){
    console.log("parent");
    callback(); //함수호출
}

function childFunc(){
    console.log("child");
}
parentFunc(childFunc);


// 왜?.......콜백??

function repeat(count){
    for(let i=0; i<count; i++){
        console.log(i+1);
    }
}
repeat(5);

function repeatDouble(count){
    for(let i=0; i<count; i++){
        console.log((i+1)*2);
    }
}
repeatDouble(5);

function repeatThree(count){
    for(let i=0; i<count; i++){
        console.log((i+1)*3);
    }
}
repeatThree(5);
console.log("---------------------------");

function repeatAll(count, callback){
    for(let i=0; i<count; i++)
        callback(i+1);
}

function origin(count){
    console.log(count)
}
// repeatAll(5, origin);
repeatAll(5, count => console.log(count))


function double(count){
    console.log(count*2)
}
// repeatAll(5, double);
repeatAll(5, count => console.log(count*2));

function three(count){
    console.log(count*3)
}
// repeatAll(5, three);
repeatAll(5, count => console.log(count*3));

repeatAll(5, function three(count){
    console.log(count*5)
});