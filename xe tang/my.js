// slice(start, end) : cat string. vi du: 40px slice(0, 2) -> 40
// parseInt(): ep kieu du lieu. vi du: parseInt(40px) -> 40
// su kien onmouseover: khi dua con tro chuot den 1 doi tuong thi kich hoat 1 function
// su kien oumouseout : khi dua con tro chuot doi khoi 1 doi tuong thi kich hoat 1 function
// luu y: 2 su kien tren phai di cung voi nhau
// <input type="" onchange="" su kien onchange: khi co su thay doi o the input thi kich hoat 1 function


const tank_speed = 20
function move_up() {
    let currentTop_Rick = parseInt(document.getElementById("object").style.top);
    let currentTop_mic = parseInt(document.getElementById("goal").style.top);
    document.getElementById("object").style.top = currentTop_Rick - tank_speed + "px";

    if(Math.abs(currentTop_Rick - tank_speed - currentTop_mic) == 20) {
        
    }
    

    


    
    
    
}
function move_down() {
    var currentTop_Rick = parseInt(document.getElementById("object").style.top);
    document.getElementById("object").style.top = currentTop_Rick + tank_speed + "px";
    
}
function move_left() {
    var currentLeft_Rick = parseInt(document.getElementById("object").style.left);
    document.getElementById("object").style.left = currentLeft_Rick - tank_speed + "px";
    
}
function move_right() {
    var currentLeft_Rick = parseInt(document.getElementById("object").style.left);
    document.getElementById("object").style.left = currentLeft_Rick + tank_speed + "px";
    
}


    