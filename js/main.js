var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

	console.log("bands", bands);

var loopCount = 5; //What if var changes?
var currentBand = "";
var currentVeggie = "";
var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");;

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  currentBand = `<li>${bands[loopTracker]}</li>`;
  currentVeggie = `<li>${vegetables[loopTracker]}</li>`;

  bandElement.innerHTML += currentBand;
  veggieElement.innerHTML += currentVeggie;
}







/*************  ANOTHER WAY TO DO IT  ************
var bandList = document.getElementById(bandOut);
var vegList = document.getElementById(vegOut);

bands.forEach(function(item){
	bandList.getElementById(bandOut).innerHTML += `<li>${item}</li>`;	
});
	console.log("bandList", bandList);

vegetables.forEach(function(item){
	vegList.document.getElementById("vegOut").innerHTML += `<li><${item}</li>`;
	//document.getElementById("vegOut").innerHTML += `<li><${item}</li>`
});
*/

