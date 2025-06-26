/*
논리연산자 단축평가

||
or

&&
and

!
not

왼쪽에서 우측으로 진행하며 왼쪽에서 끝나면 뒷내용을 생략한다. 
*/
console.log('apple'||'banana'); //true true 이기 때문에 앞내용을 그냥 뱉는다.
console.log(false||'banana'); //false true 이기 때문에 뒷내용을 뱉는당
console.log('apple'||false);//true false 이여서 그냥 apple 출력


//and는 좌항, 우항 모두확인해야하므로 
console.log('apple'&&'banana'); //true true 둘다 true이며 뒤에 있는 것까지 확인하므로 뒤에것을 출력
console.log(false&&'banana'); //false
console.log('apple'&&true);
console.log('apple'&&false);


var num=1;
    if(num%2==0)
                console.log('짝수입니다.');
    else
        console.log('홀수입니다.');
    
    
    
        
    

    num%2==0&&console.log('짝수입니다.');
   num%2==0||console.log('짝수입니다.');
