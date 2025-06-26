/*
    string으로 변경 

*/
console.log(10+'20');
//+가 문자 합치는 연산자, 뒤의 20때문에 1020이 됨
//문자의 1020
//문자열 연결 연산자로 동작

console.log('20'+10);

console.log(10+20);

console.log(`10+20 : ${10+20}`);

//템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적으로 변환 

//문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과

console.log(1+'');  //"1"
console.log(NaN+'') //"NaN"
console.log(Infinitiy='')   //무자열
console.log(true+'')
console.log(null+'')
console.log(undefined+'')
console.log({}+'')
console.log([]+'')
console.log(function(){}+'');


//자바스크립트는 콘솔에 심볼 제외하고 ''로 문자열로 바꿀수있다. 