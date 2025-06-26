/* 1
옵셔널 체이닝 연산자
*/

var obj =null;
var val1 =obj?.value;
console.log(val1);
//null을 없애고 undefined 를 사용

/* 2
null 병합 연산자
*/
var test=null??'기본값';
console.log(test);
//null을 안정적으로 기본값으로 바꿈 