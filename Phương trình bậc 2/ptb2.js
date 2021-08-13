function giai_phuong_trinh_bac_hai() {
    var a, b, c;
    a = +document.getElementById("a").value
    b = +document.getElementById("b").value
    c = +document.getElementById("c").value
    if(a == 0) {
        if(b == 0) {
            if(c == 0) {
                document.getElementById("result").innerHTML = "Phương trình có vô số nghiệm";
            }else {
                document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
            }
        }else {
            document.getElementById("result").innerHTML = "Phương trình có nghiệm x =" + -c/b;
        }
    }else {
        var d = Math.pow(b, 2) - 4*a*c;
        if(d < 0) {
            document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
        }else if(d == 0) {
            document.getElementById("result").innerHTML = "Phương trình có nghiệm kép x1 = x2 = " + -b/2*a
        }else {
            document.getElementById("result").innerHTML = "x1 = " + (-b + Math.sqrt(d)) / (2*a) + ", x2 = " + (-b - Math.sqrt(d)) / (2*a)
        }
    }
}