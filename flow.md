
### NEXT ACTIONS:
- [_] Work on output



### OUTPUT TO HTML
put bands array in a section
put vegetables array in a section


### VARIABLES
#### Var for output
bandOut (has 5 items)
vegOut (has 5 items)


### ARRAYS & FUNCTIONS
bands array
vegetables array


Use forEach loop
For each item...
- Put each item in band array in an unordered list
- Put each item in vegetables array in an unordered list







====================================
Loop through the two arrays provided (`bands` and `vegetables`) and output each element in the arrays into their corresponding HTML `<div>` element. Ensure that each item is in a block element (e.g. li, div, p. etc...)


// The number of loops to perform (what if the array changes?)
let loopCount = 5;

// Keep track of which band we're on in the loop
let currentBand = "";

// Keep track of which veggie we're on in the loop
let currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
let bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
let veggieElement = ???;

// Start looping
for (let loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = ???;

  
  // Add the veggie names into the correct <div>
  currentVeggie = ???;
