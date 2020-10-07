const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
    mouseOver: () => {
        text.innerText = "The mouse is on!";
        text.style.color = colors[0];
    },
    mouseLeave: () => {
        text.innerText = "The mouse is gone!";
        text.style.color = colors[1];
    },
    windowResize: () => {
        text.innerText = "You just resized!";
        text.style.color = colors[2];
    },
    clickRight: () => {
        text.innerText = "That was a right click!";
        text.style.color = colors[4];
    }
};

const text = document.querySelector("h2");

text.addEventListener("mouseover", superEventHandler.mouseOver);
text.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
text.addEventListener("contextmenu", superEventHandler.clickRight);
