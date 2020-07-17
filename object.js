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
