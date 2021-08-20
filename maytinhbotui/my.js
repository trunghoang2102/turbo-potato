function hienthi(value) {
    document.getElementById('display').value += value;
}

function tinh() {
    var a = document.getElementById('display').value;
    var b = eval(a);
    
    if (b === Infinity){
        document.getElementById("display").value = "Math ERROR";
        return;
    }

    document.getElementById('display').value = b;
    
}

function xoa() {
    document.getElementById('display').value = "";
}