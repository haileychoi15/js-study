
    // 1. strawberry 아래에 새로운 과일을 하나 더 추가

    var ul = document.querySelector(".first-section-ul");
    // var lastLi = document.querySelector("li:nth-last-child(1)"); 마지막에서 첫번째 li

    var str = document.createTextNode("peach");
    var peach = document.createElement("li");
    peach.append(str);

    ul.appendChild(peach);
    // ul.prepend(newLi); 첫 번째로 넣기
    // lastLi.insertAdjacentHTML("afterend",text); 쓰려면 position 뒤에 무조건 text 형식


    // 2. insertBefore메서드를 사용해서, orange와  banana 사이에 새로운 과일을 추가

        var banana = document.querySelector(".first-section-ul > li:nth-of-type(3)");
        var mango = document.createElement("li");
        var text = document.createTextNode("mango");
        mango.appendChild(text);

        ul.insertBefore(mango, banana);

    // 3. insertAdjacentHTML메서드를  사용해서, orange와 banana 사이에 새로운 과일을 추가

        banana.insertAdjacentHTML("beforebegin","<li>melon</li>");


    // 4. apple을 grape 와 strawberry 사이로

        var apple = document.querySelector("li:first-child");
        var cloneApple = apple.cloneNode(true); // true이면 노드 안에 text까지 클론
        apple.remove();

        var li = document.querySelectorAll(".first-section-ul > li");
        for(var i=0; i < li.length; i++){
            var eachLi = document.querySelector("li:nth-child("+(i+1)+")");
            if(eachLi.innerText == "strawberry"){
                ul.insertBefore(cloneApple, eachLi);
            }
        }

        // insertBefore는 move의 효과를 낸다.(복사가 아니라 잘라내서 붙여넣기 효과!!)


   // 5. class 가 'red'인 노드만 삭제

        var reds = document.querySelectorAll(".first-section-ul > li.red");
        for(var i=0; i < reds.length; i++){
                //reds[i].remove();
            ul.removeChild(reds[i]); // removeChild가 브라우저 호환성이 아직 더 좋다.
        }

    // 6. section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 그 하위에 있는 h2 노드를 삭제

        var blues = document.querySelectorAll(".blue");
        blues.forEach(function (v) { // v는 li
            // var ul = v.parentElement;
            // var h2 = ul.previousElementSibling;
            var section = v.closest("section"); // 바로 h2로 갈 수 없다. closest는 형제노드가 아닌 상위노드로만 탐색
            var h2 = section.querySelector("h4");
            //h2.remove();
            section.removeChild(h2);
        });
