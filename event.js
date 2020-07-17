var el = document.querySelector(".element");
el.addEventListener("click", function (e) {
    var target = e.target;
    console.log('clicked!!', e); // e 는 MouseEvent
    console.log(target.className, target.nodeName);
    debugger;
});

// 이벤트 버블링
// img, li, ul 각각 이벤트등록을 하였다면 하위엘리멘트부터 이벤트 발생.
var ul = document.querySelector(".img-ul");
ul.addEventListener("click", function (evt) {
    console.log(evt.target.tagName, evt.currentTarget.tagName); // img , ul
    console.log(this.tagName); //ul

    var target = evt.target;
    if(target.tagName == "IMG"){
        console.log(target.src);
    }
    else if(target.tagName == "LI"){
        console.log(target.firstElementChild.src);
    }
}); // target은 클릭한 정보를 알려준다.

// capturing 단계에서 이벤트 발생하고 싶다면 addEventListener의 세번째 인자값에 true를 준다.
