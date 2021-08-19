function tinh_tuoi() {
    let birthday = document.getElementById("birthday").value;
    let date = new Date(birthday)
    birthday_year = date.getFullYear()

    let today = new Date()
    today_year = today.getFullYear()
    let age = today_year - birthday_year

    document.getElementById("result").innerHTML = "Tuoi cua ban la " + age
}