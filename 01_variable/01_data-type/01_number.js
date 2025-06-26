//250626 jeonghoon 01_number.js

/*
data-type은 값의 종류를 의미하며 자바스크립트는 7개의 데이터타입을 제공
*/
/*
    01.숫자타입
    자바의 경우 정수와 실수를 구분하나 자바스크립트는 정수와 실수를 구분하지 않는다.
    int, long, float, double 등으로 구분

    자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다. 
*/

/*
    var let const
*/

var interger1 = 10;
var double1 = 5.5;
var negative1 = -10;
//정수, 실수, 음수 모두 숫자타입이다. 

console.log(interger1);
console.log(double1);
console.log(negative1);
//console 은 메소드이다. 출력하는

console.log(10===10.0);
//10===10.0 같은거이면서 타입까지 같은지 체크함 

console.log(interger1===10.00);
//숫자타입은 모두 실수로 처리되므로 같음 
console.log(10/4);
//실수끼리 나누기이므로 소수점까지 처리

/*
    숫자타입은 세가지 특별한 값도 표현이 가능
    Infinity : 양의 무한대
    -Infinity : 음의 무한대
    NaN : 산술 연산 불가
    (Not a Number)
*/
console.log(10/0); //자바스크립트에서는 0으로 나누기하면 무한대로 처리한다.
console.log(-10/0); //음의 무한대도 마찬가지이다. 
console.log(1*'문자열'); //문자열 곱하기 숫자는 연산이 불가능 

/*
램 stack, heap static

변수가 stack 공간에 저장됨 

*/
