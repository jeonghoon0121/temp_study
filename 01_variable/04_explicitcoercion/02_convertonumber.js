/* 숫자타입으로 변경*/


//1.number생성자 함수를 new연산자없이 호출
console.log(Number('10')); //10
console.log(Number('10.01')); //10.01
console.log(Number(true));
console.log(Number(false));

//2.parseInt parseFloat

console.log(parseInt('10'));
console.log(parseFloat('10'));

console.log(parseInt('10.01'));
console.log(parseInt('10.99'));
console.log(parseFloat('10'));

console.log(parseInt('10.99.08987.78789787877'));

//3. + 단항연산자 사용하기
//4. * 산술연산자 사용하기 

console.log('10'*1);
console.log(typeof('10'*1));
console.log('10.01'*1);
console.log(typeof('10.01'*1));
console.log(true*1);
console.log(false*1);


