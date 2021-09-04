/* loop
- bao gom: +dieu kien lap
           +khoi lenh de thuc thi
- co 3 loai vong lap: for, while, do-while
- for (bien khoi tao; dieu kien lap; khoi lenh thuc thi) {
    statement(s);
}
    +b1: chay bien khoi tao
    +b2: chay dieu kien lap
    +b3: chay than vong lap
    +b4: chay khoi lenh thuc thi 
    +b5: quay lai b2
*/

//demo




for (let i = 0; i < 9; i++) {
    document.write("xin chao viet nam")
}

/*
- xac dinh dieu kien lap
- xac dinh than vong lap
*/

//in day so tu 1 den 100
for (let i = 1; i <= 100; i++) {
    document.write(i)
    document.write("<br>")
}

/*
TH1: Gia su vong lap bi khuyet bien khoi tao
    - khai bao bien truoc for
TH2: Khuyet dieu kien lap
    - for (let i = 0; i++) {
        if (i > 1000) {
            break;
        }
        document.write(i)
    }
*/

/*
  - BT tinh tong cac so chan tu 1 den 100
*/
let sum = 0
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0)
        sum += i
}
document.write(sum)


let a = +prompt("nhap vao 1 so")
if (a < 2) {
    alert("khong phai so nguyen to")
} else if (a > 2) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            alert("khong phai so nguyen to");
            break;
        } else {
            alert("so nguyen to");
        }

    }
} else if (a == 2) {
    alert("so nguyen to")
}



