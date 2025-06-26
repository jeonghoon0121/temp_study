/*boolean타입으로 변환 */

if(true) console.log("if(true)");
if(false) console.log("if(true)");
//truthy 는 true falsy는 false로 암묵적 변환

if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('javascript') console.log("if('javascript')");

//false, undefined null 0 NaN (빈문자열) 은 falsy값

