function fibonacci(num) {
    if (isNaN(num) || num < 1 || num % 1 != 0) {
        return "Please enter a valid number (a positive integer greater than 0)."
    }

    let str = "";
    let prev = 0;
    let curr = 1; 
    let next = 1; 
    for (let i = 0; i < num; i++) {
        if (i != num - 1) {
            str += prev + ", ";
            prev = curr; 
            curr = next; 
            next = prev + curr; 
        } else {
            str += prev
        }
    }
    return str; 
}

var submit = document.getElementById("button");
submit.addEventListener("click", function() {
    let number = document.getElementById("number").value;
    document.getElementById("fibscreen").innerHTML = fibonacci(number);
});



