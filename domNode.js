
    var base = document.querySelector(".w3-table-all tr:nth-child(3)");
    console.log(base);

    var parent = document.querySelector(".w3-table-all tbody"); // tbody

    // 넣을 노드 만들기
    var div = document.createElement("div");
    var str = document.createTextNode("좋은 하루 보내세요");
    div.appendChild(str);
    //console.log(div);

    parent.insertBefore(div, base); // 부모(parent)를 기준으로 base 앞에 div를 추가

    var standard = document.querySelector(".div-description");
    standard.insertAdjacentHTML("afterbegin", "<h1>hello world</h1>");
    // standard element를 기준으로 afterbegin 위치에 <h1>hello world</h1>을 삽입한다.

    var standard2 = document.querySelector("p:nth-child(3)"); // 세번째 자식 노드가 P이면 querySelect, 아니면 null을 반환
    // 여기서 p element가 속한 자식 노드 중 첫번째는 h1이므로 p:nth-child(1)은 null이다.
    console.log(document.querySelector("p:nth-of-type(1)")); //  p태그 한정 첫번째 노드
    standard2.insertAdjacentHTML("beforebegin", "<p>가운데 문단</p>");
