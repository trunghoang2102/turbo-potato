function kiem_tra() {
    let birthday_boy = document.getElementById("birthday_boy").value;
    let birthday_girl = document.getElementById("birthday_girl").value;
    let date_boy = new Date(birthday_boy);
    let date_girl = new Date(birthday_girl);
    let date_boy_year = date_boy.getFullYear();
    let date_girl_year = date_girl.getFullYear();

    //tinh chi cua boy
    var chi_boy = date_boy_year % 12;
    var message1 = ""
    if (chi_boy == 0) {
        message1 = "Bạn trai tuổi Thân"
    } else if (chi_boy == 1) {
        message1 = "Bạn trai tuổi Dậu"
    } else if (chi_boy == 2) {
        message1 = "Bạn trai tuổi Tuất"
    } else if (chi_boy == 3) {
        message1 = "Bạn trai tuổi Hợi"
    } else if (chi_boy == 4) {
        message1 = "Bạn trai tuổi Tý"
    } else if (chi_boy == 5) {
        message1 = "Bạn trai tuổi Sửu"
    } else if (chi_boy == 6) {
        message1 = "Bạn trai tuổi Dần"
    } else if (chi_boy == 7) {
        message1 = "Bạn trai tuổi Mão"
    } else if (chi_boy == 8) {
        message1 = "Bạn trai tuổi Thìn"
    } else if (chi_boy == 9) {
        message1 = "Bạn trai tuổi Tỵ"
    } else if (chi_boy == 10) {
        message1 = "Bạn trai tuổi Ngọ"
    } else {
        message1 = "Bạn trai tuổi Mùi"
    }

    //tinh chi cua girl
    var chi_girl = date_girl_year % 12
    var message2 = ""
    if (chi_girl == 0) {
        message2 = "Bạn gái tuổi Than"
    } else if (chi_girl == 1) {
        message2 = "Bạn gái tuổi Dau"
    } else if (chi_girl == 2) {
        message2 = "Bạn gái tuổi Tuat"
    } else if (chi_girl == 3) {
        message2 = "Bạn gái tuổi Hoi"
    } else if (chi_girl == 4) {
        message2 = "Bạn gái tuổi ý"
    } else if (chi_girl == 5) {
        message2 = "Bạn gái tuổi Sửu"
    } else if (chi_girl == 6) {
        message2 = "Bạn gái tuổi Dần"
    } else if (chi_girl == 7) {
        message2 = "Bạn gái tuổi Mão"
    } else if (chi_girl == 8) {
        message2 = "Bạn gái tuổi Thìn"
    } else if (chi_girl == 9) {
        message2 = "Bạn gái tuổi Tỵ"
    } else if (chi_girl == 10) {
        message2 = "Bạn gái tuổi Ngọ"
    } else {
        message2 = "Bạn gái tuổi Mùi"
    }

    //kiem tra do phu hop
    var message3 = ""
    if (Math.abs(chi_boy - chi_girl) == 6) {
        message3 = "Tứ Hành xung"
    } else {
        message3 = "Tam hợp"
    }

    document.getElementById("result1").innerHTML = message1;
    document.getElementById("result2").innerHTML = message2;
    document.getElementById("result3").innerHTML = message3;


}