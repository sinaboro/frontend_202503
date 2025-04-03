//함수 표현식 - 화살표함수(람다함수)
const ramda =  (num) => {   
    return num*num;
};
result = ramda(9);
console.log(`합 결과 : ${result}`);
console.log("------------------------");

//매개변수가 1개인경우는 ()로 생략 가능
const ramda2 =  num => {   
    return num*num;
};
result = ramda2(2);
console.log(`합 결과 : ${result}`);
console.log("------------------------");

// 중괄호 안 문장이 1개 인 경우는 중괄호 생략 가능
// 단, 중괄호 안 return 문장이 있으면 삭제
const ramda3 =  num => num*num;

result = ramda2(8);
console.log(`합 결과 : ${result}`);
console.log("------------------------");