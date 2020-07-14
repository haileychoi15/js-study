var arr = [1,2,3];
for(var i=0, len = arr.length; i < len; i++){

} // length 값을 미리 계산해두는 것이 좋다.

var len = arr.length;
for(var i=len; i > 0; i--){ // reverse

}

arr.forEach(function () {

});

// Iterating over an Array
for(const element of arr){
    console.log(element);
}

// Iterating over a String
const iterable = 'boo';
for(const value of iterable){
    console.log(value); // 'b', 'o', 'o'
}

// Iterating over a Map
const iterable = new Map([['a',1],['b',2],['c',3]]);
for (const entry of iterable){
    console.log(entry); // ['a',1],['b',2],['c',3]
}

for(const [key, value] of iterable){
    console.log(value); // 1,2,3
}