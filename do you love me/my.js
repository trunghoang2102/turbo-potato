function yes() {
    alert("yes, you are right")
}
function no() {   
    document.getElementById("no").style.top =  Math.round(Math.random() * 500) + "px"
    document.getElementById("no").style.left = Math.round(Math.random() * 500) + "px"
}