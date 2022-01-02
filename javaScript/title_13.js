var element_1 =document.getElementById("title_13_1");
var element_2 =document.getElementById("title_13_2");
var element_3 =document.getElementById("title_13_3");
var element_4 =document.getElementById("title_13_4");
var element_5 =document.getElementById("title_13_5");
var element_6 =document.getElementById("title_13_6");
var element_7 =document.getElementById("title_13_7");

function state1() {
    element_3.style.left = "100%";
    element_3.style.transform = "translateX(-100%)";

    element_4.style.left = "0";
    element_4.style.transform = "translateX(0)";

    element_7.style.left = "0";
    element_7.style.transform = "translateX(0)";

    setTimeout(state2, 2000);
}

function state2() {
    element_1.style.left = "100%";
    element_1.style.transform = "translateX(-100%)";

    element_6.style.left = "calc("+element_5.clientWidth+"px + 2%)";
    element_6.style.transform = "translateX(0%)";

    setTimeout(state3, 2000);
}

function state3() {
    element_1.style.left = "0%";
    element_1.style.transform = "translateX(0%)";

    element_4.style.left = "100%";
    element_4.style.transform = "translateX(-100%)";

    element_7.style.left = "100%";
    element_7.style.transform = "translateX(-100%)";

    setTimeout(state4, 2000);
}

function state4() {
    element_3.style.left = "calc("+element_2.clientWidth+"px + 2%)";
    element_3.style.transform = "translateX(0%)";

    element_6.style.left = "100%";
    element_6.style.transform = "translateX(-100%)";

    setTimeout(state1, 2000);
}

state1();
