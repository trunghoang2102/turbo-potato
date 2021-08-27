const tank_speed = 20;


function move_up() {
    let currentTop_tank = parseInt(document.getElementById("tank").style.top);
    let currentLeft_tank = parseInt(document.getElementById("tank").style.left);
    let currentTop_boom = parseInt(document.getElementById("boom").style.top);
    let currentLeft_boom = parseInt(document.getElementById("boom").style.left);
    document.getElementById("tank").style.top = currentTop_tank - tank_speed + "px";

    if(Math.abs(currentTop_tank - tank_speed - currentTop_boom) == 20) {
        if(currentLeft_tank == currentLeft_boom || Math.abs(currentLeft_tank - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }else if(currentTop_tank - tank_speed == currentTop_boom) {
        if(Math.abs(currentLeft_tank - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }   
    }
}   

function move_down() {
    let currentTop_tank = parseInt(document.getElementById("tank").style.top);
    let currentLeft_tank = parseInt(document.getElementById("tank").style.left);
    let currentTop_boom = parseInt(document.getElementById("boom").style.top);
    let currentLeft_boom = parseInt(document.getElementById("boom").style.left);
    document.getElementById("tank").style.top = currentTop_tank + tank_speed + "px";
    if(Math.abs(currentTop_tank + tank_speed -currentTop_boom) == 20) {
        if(currentLeft_tank == currentLeft_boom || Math.abs(currentLeft_tank - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }else if(currentTop_tank + tank_speed == currentTop_boom) {
        if (Math.abs(currentLeft_tank - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }
}

function move_left() {
    let currentTop_tank = parseInt(document.getElementById("tank").style.top);
    let currentLeft_tank = parseInt(document.getElementById("tank").style.left);
    let currentTop_boom = parseInt(document.getElementById("boom").style.top);
    let currentLeft_boom = parseInt(document.getElementById("boom").style.left);
    document.getElementById("tank").style.left = currentLeft_tank - tank_speed + "px";
    if(Math.abs(currentTop_tank - currentTop_boom) == 20) {
        if(currentLeft_tank - tank_speed == currentLeft_boom || Math.abs(currentLeft_tank - tank_speed - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }else if(currentTop_tank == currentTop_boom) {
        if(Math.abs(currentLeft_tank - tank_speed - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }
}

function move_right() {
    let currentTop_tank = parseInt(document.getElementById("tank").style.top);
    let currentLeft_tank = parseInt(document.getElementById("tank").style.left);
    let currentTop_boom = parseInt(document.getElementById("boom").style.top);
    let currentLeft_boom = parseInt(document.getElementById("boom").style.left);
    document.getElementById("tank").style.left = currentLeft_tank + tank_speed + "px";
    if(Math.abs(currentTop_tank - currentTop_boom) == 20) {
        if(currentLeft_tank + tank_speed == currentLeft_boom || Math.abs(currentLeft_tank + tank_speed - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }else if(currentTop_tank == currentTop_boom) {
        if(Math.abs(currentLeft_tank + tank_speed - currentLeft_boom) == 20) {
            document.getElementById("result").innerHTML = "boom"
        }else {
            document.getElementById("result").innerHTML = ""
        }
    }
}

