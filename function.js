function printName() {

    console.log(inner); // var inner = function ();
    var result = inner();
    console.log(typeof inner);
    console.log("name is "+ result);

    var inner = function () { // 출력보다 var inner 으로 함수라고 생각하지 않기 때문에 에러 발생
        return "inner value";
    }

    function inner() { // 함수 선언문이 바뀌면 함수로 인식하여 작동한다. Hoisting : 함수 안에 변수들을 모두 끌어올려서 선언
        return "inner value";
    }

}

printName();



// **** arguments *****
function a(){
    // 함수가 실행되면 그 안에서 arguments 라는 특별한 지역변수가 자동 생성.
    // arguments의 타입은 객체. 배열타입은 아니지만, 배열의 형태로 하나하나 접근 가능. 배열 메서드는 사용 불가
    if(arguments.length < 3) return;
    console.log('my name is ', arguments[2]);
    // otherMethod(arguments[1]);

    var sum = 0;
    for (let argument of arguments) {
        sum += argument;
    }
    return sum;
}
var result = a(1,2,3,4,5);
console.log(result);



//  ***** arrow function *****
function getName(name){
    return "kim " + name;
}

var getName = (name) => "kim " + name; // 위와 같은 함수 선언



// ***** call stack *****

function foo(b) {
    var a = 5;
    return a * b + 10;
}

function bar(x){
    var y = 3;
    return foo(x * y);
}

console.log(bar(6));

// call stack에 bar() -> foo() 순서대로 쌓인다.
// foo함수의 결과를 받아올 때까지 bar 함수는 메모리 공간에서 사라지지 못하고 기다린다.
// foo의 경우 실행이 끝나고 return문이 실행되면 메모리 공간에서 사라진다.
// 함수를 연속적으로 계속 호출되어 브라우저에서 지정된 횟수가 넘게 쌓이면 call stack이 꽉 차버리면서 오류가 발생한다.