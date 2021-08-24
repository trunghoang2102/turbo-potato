function doi_nam_am_lich () {
    let a = document.getElementById("date").value;
    let date = new Date(a);
    let birthday_year = date.getFullYear();

    // tinh can:
    let can = birthday_year % 10;
    var message = ""
    if (can == 0) {
        message = "Canh"
    }else if (can == 1) {
        message = "Tan"
    }else if (can == 2) {
        message = "Nham"
    }else if (can == 3) {
        message = "Quy"
    }else if (can == 4) {
        message = "Giap"
    }else if (can == 5) {
        message = "At"
    }else if (can == 6) {
        message = "Binh"
    }else if (can == 7) {
        message = "Dinh"
    }else if (can == 8) {
        message = "Mau"
    }else {
        message = "Ky"
    }

    let chi = birthday_year % 12
    message += ""
    if (chi == 0) {
        message += " Than"
    }else if (chi == 1) {
        message += " Dau"
    }else if (chi == 2) {
        message += " Tuat"
    }else if (chi == 3) {
        message += " Hoi"
    }else if (chi == 4) {
        message += " Ty"
    }else if (chi == 5) {
        message += " Suu"
    }else if (chi == 6) {
        message += " Dan"
    }else if (chi == 7) {
        message += " Mao"
    }else if (chi == 8) {
        message += " Thin"
    }else if (chi == 9) {
        message += " Ty"
    }else if (chi == 10) {
        message += " Ngo"
    }else {
        message += " Mui"
    }

    document.getElementById("result").innerHTML = message
}