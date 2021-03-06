var myfriend = {key : "value",
                addition : [
                    {name:'yuyeong'}, {age:25}
                    ]
};

for(value in myfriend){
    console.log(value); // key addition 키값이 나온다.
}

// for in 은 키 값이 있는 것(객체)을 탐색할 때 잘 쓰인다.
for(key in myfriend){
    console.log(myfriend[key]); // value {name:'yuyeong'}, {age:25}
}

Object.keys(myfriend); // ["a", "addition"] 키 값이 배열로 출력

Object.keys(myfriend).forEach(function (v) {
    console.log(myfriend[v]); // b {name:'yuyeong'}, {age:25}
});

Object.keys(myfriend).forEach(function (v) {
    console.log(myfriend[v][0].name); // undefined yuyeong
});

console.log(typeof(3)); // number



// ***** 타입이 숫자인 것의 키값을 배열형태로 출력하기 *****

const data = {
    "debug":"on",
    "window":{
        "title": "sample",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image":{
        "src": "sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text":{
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "OnMouseUp": "sun1.opacity = (sun1.opacity /100 ) * 90;"
    }
}

var result=[];

Object.keys(data).forEach(function(v){
    for(key in data[v]){
        if(typeof data[v][key]=="number"){
            result.push(key);
        }
    }
})
alert(result);


// ***** 타입이 sk인 것의 name 값을 출력하기 *****

var data2 = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{ //1 childnode
            "id": 115,
            "name": "hary",
            "phone": "211-1111-0000",
            "type": "sk",
            "childnode": [{
                "id": 1159,
                "name": "pobi",
                "phone": "010-444-000",
                "type": "kt",
                "childnode": [{
                    "id": 11592,
                    "name": "cherry",
                    "phone": "111-222-0000",
                    "type": "lg",
                    "childnode": []
                },
                    {
                        "id": 11595,
                        "name": "solvin",
                        "phone": "010-000-3333",
                        "type": "sk",
                        "childnode": []
                    }
                ]
            }]
        },
            { //2 childnode
                "id": 116,
                "name": "kim",
                "phone": "444-111-0200",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-222-0000",
                    "type": "sk",
                    "childnode": [{
                        "id": 11689,
                        "name": "ho",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": [{
                            "id": 116890,
                            "name": "wonsuk",
                            "phone": "010-000-0000",
                            "type": "kt",
                            "childnode": []
                        },
                            {
                                "id": 1168901,
                                "name": "chulsu",
                                "phone": "010-0000-0000",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                }]
            },
            { // 3 childnode
                "id": 117,
                "name": "hong",
                "phone": "010-0000-0000",
                "type": "lg",
                "childnode": []
            }
        ]
    }]
}];
/*
var result2 = [];

Object.keys(data2).forEach(function (v) {

        alert(data2[v].type); //sk
        if(data2[v].type == "sk"){
            result2.push(data2[v].name);
        }

});

alert("result2 : "+result2);
*/
var result2 = [];

function findSk(data){

    data.forEach(function(v){
        //alert(v.type);
        if( v.type === "sk" ) result2.push(v.name);

        if ( v.childnode.length > 0 ) {
            //alert(v.childnode.length);
            findSk(v.childnode);
        }
    })
}

findSk(data2);
alert(result2);

// 객체 리터럴
var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function () {
        console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }
};
// 객체 안에서 this는 그 객체 자신을 가리킨다.
healthObj.showHealth();

healthObj.lastTime = "AM 06:20";
healthObj.showHealth();

// context
// JavaScript에는 전역스크립트나 함수가 실행될 때 실행문맥(Execution context)이 생성
// 모든 context에는 참조하고 있는 객체(thisBinding이라 함)가 존재하는데, 현재 context가 참조하고 있는 객체를 알기 위해서는 this를 사용할 수 있다.

function get() {
    return this;
}
get(); // window. 함수가 실행될 때의 context는 window 객체를 참조
new get(); // object. new 키워드를 쓰면 새로운 object context가 생성


// bind
// function이라는 것이 객체로 동작된다는 정보를 알려준다.
// 또 다른 함수를 반환하는 함수이다.
// this가 가리키는 것을 바꿔준다.
var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function () {

        setTimeout(function(){ // 여기서 this는 window
            console.log("this : "+this);
            console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
        }.bind(this), 500);
        // showHealth 객체의 this를 binding 해준다.
    }
};

healthObj.showHealth();

// es6 arrow 함수로 쓰면 this가 달라진다?
// 함수가 속해있는 context를 유지하면서 동작한다. bind 안해도 this가 healthObjES6를 카리킨다.
var healthObjES6 = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function () {

        setTimeout( () => { // 여기서 this는 window
            console.log("this : "+this);
            console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
        }, 500); // bind하지 않음
    }
};

healthObjES6.showHealth();