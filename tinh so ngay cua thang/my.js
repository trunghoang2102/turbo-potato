function so_ngay() {
    let a = document.getElementById("date").value;
    let date = new Date(a);
    let date_month = date.getMonth()
    let date_year = date.getFullYear()
    if (parseInt(date.getFullYear()) % 4 == 0) {
        if (parseInt(date_month) == 2) {
            document.getElementById("result").innerHTML = 29
        } else if (parseInt(date_month) == 1 || parseInt(date_month) == 3 || parseInt(date_month) == 5 || parseInt(date_month) == 7 || parseInt(date_month) == 8 || parseInt(date_month) == 10 || parseInt(date_month) == 12) {
            document.getElementById("result").innerHTML = 31
        } else if (parseInt(date_month) == 4 || parseInt(date_month) == 6 || parseInt(date_month) == 9 || parseInt(date_month) == 11) {
            document.getElementById("result").innerHTML = 30
        } else {
            alert("so thang khong hop le")
        }
    } else {
        if (parseInt(date_month) == 2) {
            document.getElementById("result").innerHTML = 28
        } else if (parseInt(date_month) == 1 || parseInt(date_month) == 3 || parseInt(date_month) == 5 || parseInt(date_month) == 7 || parseInt(date_month) == 8 || parseInt(date_month) == 10 || parseInt(date_month) == 12) {
            document.getElementById("result").innerHTML = 31
        } else if (parseInt(date_month) == 4 || parseInt(date_month) == 6 || parseInt(date_month) == 9 || parseInt(date_month) == 11) {
            document.getElementById("result").innerHTML = 30
        } else {
            alert("so thang khong hop le")
        }
    }
}

