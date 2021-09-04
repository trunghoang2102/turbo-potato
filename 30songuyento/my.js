function check_primenumber(number) {  
    if (number < 2) {
        return false;
    }else if (number == 2) {
        return true;
    }else if (number % 2 == 0) {
        return false;
    }else {
        for (i = 3; i < Math.floor(Math.sqrt(number)); i += 2) {
            if (number % i == 0) {
                return false
                break;
            }
        }
    }
    return true;
}
function print_primenumber() {
    let limit = document.getElementById("limit").value;
    let prime_number_list = [];
    for (var i = 2; i <= limit; i++) {
        if (check_primenumber(i)) {
            prime_number_list.push(i);
        }
    }
    console.log(prime_number_list);
    document.getElementById("prime_number_list").innerHTML = prime_number_list
}
