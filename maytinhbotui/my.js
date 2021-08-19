function hienthi(value) {
    document.getElementById('display').value += value;
}

function tinh() {
    var a = document.getElementById('display').value;
    var b = eval(a);
    document.getElementById('display').value = b;
}

function xoa() {
    document.getElementById('display').value = "";
}