/*콜백 함수-비동기- */
function getData(callback){
    setTimeout(()=>callback("콜백으로 처리한 데이타"), 1000)
}

getData( (result)=> console.log(result));
console.log("두번째 문장.....");