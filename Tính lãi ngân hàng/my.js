function tinh_lai_don() {
    let a = +document.getElementById('sotien').value;
    let b = +document.getElementById('sothang').value;
    let c = Math.round(a + a * b * 0.05);
    document.getElementById('result1').innerHTML = "Số tiền nhận được: " + c +"VNĐ";
}

function tinh_lai_kep() {
    let x = +document.getElementById('sotien').value;
    let y = +document.getElementById('sothang').value;
    let z = Math.round(x * Math.pow((1 + 0.05), y));
    document.getElementById('result2').innerHTML = "Số tiền nhận được: " + z + "VNĐ";
}