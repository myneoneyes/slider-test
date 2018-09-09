function checkFocus() {
    var focusedNum = 1;
    while (!document.getElementById("slider__point-" + focusedNum).checked) {
        focusedNum++;
    }
    return focusedNum;
}

function changeFocus(focusedNum) {
    document.getElementsByClassName("slider__inner")[0].style.marginLeft = -(focusedNum * 100 - 100) + "%";
    document.getElementById("slider__point-" + focusedNum).checked = true;
    document.getElementsByClassName("focused")[0].classList.remove("focused");
    document.getElementsByClassName("slider__img")[focusedNum - 1].classList.add("focused");
}

var sliderLength = document.getElementsByClassName("slider__img").length;

document.getElementById("sliderPrev").onclick = function () {
    var focusedNum = checkFocus();
    if (focusedNum === 1) {
        focusedNum = sliderLength;
    } else {
        focusedNum--;
    }
    changeFocus(focusedNum);
};

document.getElementById("sliderNext").onclick = function () {
    var focusedNum = checkFocus();
    if (focusedNum === sliderLength) {
        focusedNum = 1;
    } else {
        focusedNum++;
    }
    changeFocus(focusedNum);
};

document.getElementsByClassName("slider__points")[0].onclick = function () {
    if (event.target.tagName !== 'INPUT') return;
    changeFocus(checkFocus());
};

