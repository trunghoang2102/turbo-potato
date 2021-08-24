// slice(start, end) : cat string. vi du: 40px slice(0, 2) -> 40
// parseInt(): ep kieu du lieu. vi du: parseInt(40px) -> 40
// su kien onmouseover: khi dua con tro chuot den 1 doi tuong thi kich hoat 1 function
// su kien oumouseout : khi dua con tro chuot doi khoi 1 doi tuong thi kich hoat 1 function
// luu y: 2 su kien tren phai di cung voi nhau
// <input type="" onchange="" su kien onchange: khi co su thay doi o the input thi kich hoat 1 function



function move_up() {
    let currentTop = parseInt(document.getElementById("object").style.top);
    document.getElementById("object").style.top = currentTop - 20 + "px";
}
function move_down() {
    let currentTop = parseInt(document.getElementById("object").style.top);
    document.getElementById("object").style.top = currentTop + 20 + "px";
}
function move_left() {
    let currentLeft = parseInt(document.getElementById("object").style.left);
    document.getElementById("object").style.left = currentLeft - 20 + "px";
}
function move_right() {
    let currentLeft = parseInt(document.getElementById("object").style.left);
    document.getElementById("object").style.left = currentLeft + 20 + "px";
}