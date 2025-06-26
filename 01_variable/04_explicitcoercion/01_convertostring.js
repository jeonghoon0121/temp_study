/* 명시적 타입 변환

개발자의 의도에 따라 값을 변환
자바 스크립트에서 기본 제공하는 표준빌트인 생성자 함수
string numbver boolean
를
new 연산자 없이호출할 수 가 있다. */

/*
빌트인 메소드를 사용하는 방법으로 명시적 타입으로 변경할 수 있다. 
*/

//1.String() 생성자 함수를 new연산자 없이 호출
console.log(String(10));//문자열 10
console.log(String(NaN));//문자열 NaN
console.log(String(Infinity));//문자열 Infinity

console.log(String(true));
console.log(String(false));

//2.Object.prototype.toString 메소드 사용 오브젝트의 함수구나 생각

console.log((10).toString());//문자열 10
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString());

//3.문자열 연결 연산자 +fmf dfldyd

