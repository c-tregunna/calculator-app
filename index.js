let showTotal = document.getElementById("total");
let total = 0;

// grab the number clicked
function calcTotal(number) {
    total = number;
    // console.log(number);
    showTotal.textContent = total;
    //math();
    console.log(total);
}

//what math will happen
function math(symbol) {
    showTotal.textContent = symbol;
    if(symbol === '+') {
        total + total;
    }
    console.log(total);
}

//reset to 0
function reset() {
    total = 0;
    showTotal.textContent = 0;
}
