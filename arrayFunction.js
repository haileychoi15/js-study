// 배열의 함수형 메서드

var data = [{title : "hello", content:"hello world", price: 12000},
            {title : "crong", content:"I am crong", price: 5500},
            {title : "code", content:"clean code", price: 1200}];

// filter & map

var newData = data.filter(function(v){
    return v.price > 5000; //조건문 처럼
}).map(function (v) { // 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것

    var obj = {titile : v.title, content : v.content, price : (v.price * 2) + ""}
    // 가격을 문자열로 바꾼다.
    return obj;
});

console.table(data);
console.table(newData);

// map
// 배열.map((요소, 인덱스, 배열) => { return 요소 });

// reduce
// 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값);
var array = [1,2,3];

result = array.reduce((acc, cur, i)=>{

    console.log(acc, cur, i);
    return acc + cur;

},0);

// 0 1 0
// 1 2 1
// 3 3 2
// result 6

// 초기값을 적어주지 않으면 자동으로 0번째의 값이 초기값이 된다.
result = array.reduce((acc, cur, i)=>{

    console.log(acc, cur, i);
    return acc + cur;

});
// 1 2 1
// 3 3 2
// result 6

// 초깃값을 배열로 만들고, 배열에 값들을 push하면 map과 같아집니다.
result2 = array.reduce((acc, cur)=>{

    acc.push(cur % 2? '홀수':'짝수');
    return acc;

},[]);
// ["홀수", "짝수", "홀수"]


