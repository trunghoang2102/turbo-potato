function tinh_tuoi() {
    let birthday = document.getElementById('birthday').value;
    let date = new Date(birthday);
    let birthday_year = date.getFullYear();

    let today = new Date();
    let today_year = today.getFullYear();

    if(date.getMonth() > today.getMonth()){
        var tuoi = today_year - birthday_year - 1;
    }else{
        var tuoi = today_year - birthday_year;
    }
    
    document.getElementById('result').innerHTML = "Tuổi của bạn là " + tuoi;
}