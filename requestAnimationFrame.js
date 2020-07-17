var count = 0;
var el = document.querySelector(".outside");
el.style.left = "0px";

function run(){
    if(count > 50) return;
    count = count + 5;
    el.style.left = parseInt(el.style.left) + count + "px";
    requestAnimationFrame(run); // 재귀호출
}

requestAnimationFrame(run);
// 그냥 run(); 실행시키면 애니메이션효과 없이 로드 될때 바로 이동한 것처럼 된다.
// requestAnimationFrame 여러번 호출하면 등록한 순서대로 번갈아가며 반복된다. 마치 비동기 처럼