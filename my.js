 function giai_phuong_trinh_bac_nhat() {
    var a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    console.log(a);
    if(a == 0) {
        if(b == 0) {
            document.getElementById('result').innerHTML = 'Vo so nghiem';
        } else {
            document.getElementById('result').innerHTML = 'Vo nghiem';
        }
    } else {
        document.getElementById('result').innerHTML = "Ngiem x = " + b/a;
    }
 }


 function giai_phuong_trinh_bac_hai() {
     // code 
 }