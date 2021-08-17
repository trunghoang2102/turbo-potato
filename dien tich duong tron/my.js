function dien_tich() {
    let r = +document.getElementById('bankinh').value;
    let S = Math.round(Math.PI * Math.pow(r,2));
    document.getElementById('result1').innerHTML = "Dien tich hinh tron la: " + S;
}
function chu_vi() {
    let r = +document.getElementById('bankinh').value;
    let P = Math.round(Math.PI * 2 * r);
    document.getElementById('result2').innerHTML = "Chu vi duong tron la: " + P;
}