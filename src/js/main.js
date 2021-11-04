// Make two variables called first and last,
// then log them out together as your name.

// 1. Make first variable
let first = "Ella";

// 2. Make last variable
let last = "Speer";

// 3. Log them out, but there needs to be a space between
console.log(first + " " + last);

// Log that same thing out, whenever a person clicks
// a button on the page
// Make a variable (GET)
var button = document.querySelector("button");

// Define a function
function logName() {
  console.log(first + " " + last);
}

function appendName() {
  // Create p element
  let p = document.createElement("p");

  // Put text inside the p element
  p.innerText = first + " " + last;

  // Append the p element as a child of the page's body
  document.body.appendChild(p);

  didAppend = true;
}

// Attach function to click on button
button.addEventListener("click", appendName);

// Make an array of your three favorite hobbies
let hobbies = ["Mario Kart", "Reading", "Coding"];

let ul = document.createElement("ul");

// Loop through the array and log each item using console.log ()
for (let i = 0; i, hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);
