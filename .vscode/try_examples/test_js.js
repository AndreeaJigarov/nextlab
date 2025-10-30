function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers do not have a factorial.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
//funcție care verifică dacă un număr este par. 
function isEven(num) {
    return num % 2 === 0;
}   
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
//2.
// // create a button element with class 'submit' and text 'Send'
const button = document.createElement('button');
button.className = 'submit';
button.textContent = 'Send';
document.body.appendChild(button);
// // select the button using querySelector
const selectedButton = document.querySelector('.submit');
console.log(selectedButton); // Output: <button class="submit">Send</button>



//2. 
// add a click event listener to the button with id 'myBtn'.
const myBtn = document.getElementById('myBtn');
if (myBtn) {
    myBtn.addEventListener('click', function() {
        alert('Button clicked!');
    });
} else {
    console.warn("Element with id 'myBtn' not found.");
}

const colors=['red', 'green', 'blue', 'yellow', 'purple'];
colors.forEach(function(color) {
    console.log(color);
});

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function reverseString(str) {
  return str.split('').reverse().join('');
}
