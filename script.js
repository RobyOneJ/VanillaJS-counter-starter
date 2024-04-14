function add(step) {
    // We gave the number element an id of number so we can use that to get the element 
    // console.log(add)
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}

function subtract(step) {
    add(-step);
}

function reset() {
    document.getElementById("number").innerText = 0;
}

function go() {
    let step = document.getElementById("step").value;
    add(parseInt(step));
    document.getElementById("step").value = "";
}