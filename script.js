// counter function
var count = 9;
var countElement = document.querySelector("#count");

console.log(countElement);

function add1() {
    count++;
    countElement.innerText = count;
    console.log(count);
}
