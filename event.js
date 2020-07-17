var el = document.querySelector(".element");
el.addEventListener("click", function (e) {
    var target = e.target;
    console.log('clicked!!', e); // e 는 MouseEvent
    console.log(target.className, target.nodeName);
    debugger;
});
