/*
  프로미스(Promise)-비동기 작업을 더욱 깔끔하게 처리할 수 있도록 해준다.
  성공시 .then(), 실패시 .catch()로 처리된다.

*/

function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            // resolve('Promise로 처리한 데이타');
            reject("error 발생함!!");
        }, 1000);
    })
    
}

getData()
    .then( (result)=> console.log(result))    
    .catch( (error) => console.log(error));