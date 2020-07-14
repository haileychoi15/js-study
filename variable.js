var a = 2;
var b = "bbb";
var c = 'ccc';
var d = true;
var e = [];
var f = {};
var g = undefined;

// or 연산자 사용
const name = "crong";
const result = name || "coedsquad";

0 == false; // true
"" == false; // true
null == false; // false(null은 객체이기 때문에)
0 == "0"; // true
null == undefined; //true

0 === "0" // === 은 false (type까지 비교)

// && 연산자
var result = false && true; // false
// && 연산자는 모든 값이 true인지 확인하지만, 첫번째가 이미 false라면 그 이후의 값은 확인하지 않는다.

// **** js type ****


// undefined, null, boolean, number, string, object, function, array, Date, RegExp
// 변수는 선언될 때가 아니라 실행될 때 타입이 결정된다.
console.log(typeof ""); //  기본 type 확인
toString.call(new Date); // type 확인

