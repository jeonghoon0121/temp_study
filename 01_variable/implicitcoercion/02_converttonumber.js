/* 숫자타입으로 변환 */

console.log(10-'5');
//산술연산자는 문자를 숫자로 바꾼다. +와 달리-는 숫자로 만든다. 
console.log(10*'5');
console.log(10/'5');
console.log(10%'javascript');

//산술연산자의 피연산자는 숫자이므로 모든 피연산자를 숫자타입으로 암묵적으로 변환 

console.log(10>'5');
//비교연산자도 크기를 비교해야하므로 숫자로 바꾼다. 

//단항 연산자

console.log(+'');
console.log(+'1');
console.log(+'javascript'); //연산을 할수없으므로 nan으로 나온다. 

console.log(+true); //1로 변환
console.log(+false); //0로 

console.log(+null) ; //0
console.log(+undefined);

//console.log(+Symbol()); error
console.log('------------------------');
console.log(+{});
console.log(+[]);
console.log(+function(){});
/*
빈문자열 빈배열 ㅇ널 펄스는 0
객체와 undefined 는 변환되지 않아서 null*/