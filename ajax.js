function regListener(){

}

var oReg = new XMLHttpRequest();
oReg.addEventListener("readystatechange", function () {

    if(this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
        console.log(response);
    }
});

//oReg.open("GET","http://www.jsstudy.test");
//oReg.send();

oReg.open("POST","http://www.jsstudy.test");
oReg.setRequestHeader("Content-type","application/x-www-form-urlencoded");
oReg.send();
/*
onreadystatechange가 요청에 대한 응답을 받는 이벤트 리스너이다.
AJAX 요청 시 XHR 객체는 각 상태별로 readyState가 바뀝니다.
처음에는 readyState가 0(xhr.UNSENT, 보내지 않음)이었다가, open 메소드를 호출하는 순간 1(xhr.OPENED)로 바뀝니다.
그리고 send 시 순차적으로 2(xhr.HEADERS_RECEIVED), 3(xhr.LOADING), 4(xhr.DONE)로 바뀝니다.
(onload event는 4(xhr.DONE)일 때 발생한다고 보면 된다.)
readyState가 바뀔 때마다 onreadystatechange에 설정해두었던 콜백 함수가 호출됩니다.
최종적으로 readyState가 4(xhr.DONE)가 되었을 때 요청이 완료가 된 것이기 때문에 이제 xhr.status로 HTTP 상태 코드를 확인하고요.
상태 코드가 성공을 가리키는 200이나 201일 때 응답을 확인합니다.


GET 요청은 HTTP 스펙 상 body에 데이터를 보내면 안 됩니다. 데이터를 굳이 보내고 싶다면 주소에 쿼리스트링을 붙여 보내시면 됩니다.
POST 요청을 보내봅시다. 주로 JSON을 보내거나 FormData를 body에 실어 보냅니다.
 */

var xhr = new XMLHttpRequest();
var data = {
    name: 'zerocho',
    birth: 1994,
};
xhr.onload = function() {
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    } else {
        console.error(xhr.responseText);
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/json');
xhr.setRequestHeader('Content-Type', 'application/json'); // 컨텐츠타입을 json으로
xhr.send(JSON.stringify(data));


// form data 보내기

var xhr = new XMLHttpRequest();
var formData = new FormData();
formData.append('name', 'zerocho');
formData.append('birth', 1994);
xhr.onload = function() {
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    } else {
        console.error(xhr.responseText);
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/formdata');
xhr.send(formData); // 폼 데이터 객체 전송

// 자동으로 Content-type이 multipart/form-data가 됩니다.