// 비동기 예제 실행 순서

function run() {
    // setTimeout은 지정된 시간을 기다린 후 작업을 수행
    setTimeout(function () {
        var msg = "hello time";
        console.log(msg); // 4
    }, 2000);

    console.log("run function end"); // 2
}

console.log("run start"); // 1
run();
console.log("run end"); // 3


function run2() {
    // setInterval은 일정한 시간 간격으로 작업을 수행(반복수행)
    setInterval(function(){
        console.log("setInterval!!");
    }, 3000);
}
run2();