var a = [];
var a = [1,2,3,"hello",null, true, [{1:0}]]; // 배열안에는 모든 타입이 다 들어갈 수 있다.

var a = [4];
a[1000] = 3; // 배열에 원소 추가는 index번호와 함께 추가할 수 있다.
console.log(a.length); // 1001
console.log(a[500]); // undefined

// push 메서드를 통해서 순차적으로 추가
var a = [4];
a.push(5);
console.log(a.length);

// 여러 메서드
var array = [1,2,3,4,5];
array.indexOf(3); // 2 값이 없으면 -1 -> 원소가 들어 있는지 판단 가능
array.join(); // "1,2,3,4,5"
array.concat(2,3); // [1,2,3,4,5,2,3] 배열을 합칠 수 있다.
var result = [...array,2,3]; // [1,2,3,4,5,2,3] concat이랑 똑같이 동작

result.forEach(function(v,i,o){ // value, index
    console.log(v);
});

var mapped = result.map(function (v) {
    return v * 2; // result 원소를 돌면서, 값을 변경시킨 후에 새로운 배열로 만들어서 반환
});
console.log(mapped);

array.filter(element => element > 3);
console.log(array);