/*
    비교연산자
*/
/*
    동등/일치 비교연산자
    동등 비교(==,!= ) 연산자는 먼저 암묵적 타입 변환으로 타입을 일치시킨 후 같은 값인지 비교;
    일치 비교(===,!==) 연산자는 타입과 값이 모두 일치하는지 비교한다. 
*/

// 숫자1, 문자'1; true비교


console.log(`1==1 : ${1=='1'}`)
console.log(`1==true : ${1==true}`);

console.log(`1===1 : ${1==='1'}`)
console.log(`1===true : ${1===true}`);

//숫자0 문자'0' 빈문자열'' false비교

console.log(`0=='0' :${0=='0'}`);
console.log(`0=='' :${0==''}`);
console.log(`0==false :${0==false}`);


console.log(`0==='0' :${0==='0'}`);
console.log(`0==='' :${0===''}`);
console.log(`0===false :${0===false}`);

//null 과 undefined 비교

console.log(`null == undefined : ${null ==undefined}`);
console.log(`null === undefined : ${null ===undefined}`);

//NaN은 자신과 일치하지 않는당~!~!~!~!~!~!~!~

console.log(`NaN==NaN : ${NaN==NaN}`);
console.log(`NaN===NaN : ${NaN===NaN}`);
//builtin 함수 중에서 Numver.isNaN()을 사용해서 확인해야된다. 
console.log(`Number.isNaN(NaN):${Number.isNaN(NaN)}`);

/**
  비교연산자를 통해 String 끼리 비교 가능하며 유니코드 순으로 비교한다. 
 */
console.log(`'Hello!==='hello' : ${'hello'==='hello'}`);
console.log(`'Hello'!=='hello' : ${'hello'!=='hello'}`);

console.log(`'apple'<'banana' : ${'apple'<'banana'}`);
console.log(`'apple'>'banana' : ${'apple'<'banana'}`);
console.log(`'cat'>'Zoo' : ${'cat'<'Zoo'}`);

//문자열의 대소문자 끼리 비교가능
//문자끼리 같은지 아닌지 비교가능 