/**
 * Created by Yuefeng on 2017/11/30.
 */

window.onload = function() {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("I inserted ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("this");
    var txt3 = document.createTextNode(" content123456.");
    para.appendChild(txt1);
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}