function chuyentien() {
    let a = +document.getElementById('from_currency').value;
    let b = +document.getElementById('to_currency').value;
    let c = +document.getElementById('sotien').value;
    let d = c * b / a;
    document.getElementById('result').innerHTML = "Số tiền sau khi chuyển đổi là " + d 
}
