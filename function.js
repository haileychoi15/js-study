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