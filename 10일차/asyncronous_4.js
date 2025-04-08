/*
  async / await :
  프로미스를 좀 더 쉽게 사용할 수 있도록 es8에서 도입된 문법
  비동기 코드를 마치 동기 코드처럼 깔끔하게 작성할 수 있도록 한다.

*/

function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('async/await로 처리한 데이타');
           
        }, 1000);
    })
    
}


async function fetchData(){
    try{
        const result = await getData();
        console.log(result);
    }catch(error){
        console.log(error)
    }
}

fetchData();