//    Display party.
// 		Display total delegate count.
// 		Display number of delegates allotted and not yet allotted.
// 		Each bar should be labeled with state name and number of delegates.
// 		Each bar should be colored one of two colors depending on whether its delegates have been allotted.
//Show key.

//Derricks
var repnum = [172, 155, 99, 95, 76, 72, 71, 69, 66, 59, 58, 58, 57, 52, 51, 50, 50, 49, 46, 46, 44, 43, 42, 42, 40, 40, 40, 40, 38, 38, 37, 36, 34, 32, 30, 30, 29, 29, 28, 28, 28, 28, 27, 24, 23, 23, 23, 19, 19, 19, 16, 16, 9, 9, 9, 9];

var repstate = ["California", "Texas", "Florida", "New York", "Georgia", "North Carolina", "Pennsylvania", "Illinois", "Ohio", "Michigan", "Tennessee", "Arizona", "Indiana", "Missouri", "New Jersey", "Alabama", "South Carolina", "Virginia", "Kentucky", "Louisiana", "Washington", "Oklahoma", "Massachusetts", "Wisconsin", "Mississippi", "Utah", "Arkansas", "Kansas", "Minnesota", "Maryland", "Colorado", "Nebraska", "West Virginia", "Idaho", "Iowa", "Nevada", "South Dakota", "Wyoming", "Oregon", "Connecticut", "North Dakota", "Alaska", "Montana", "New Mexico", "New Hampshire", "Puerto Rico", "Maine", "Hawaii", "District of Columbia", "Rhode Island", "Vermont", "Delaware", "Virgin Islands", "American Samoa", "Northern Marianas", "Guam"];

//Ricks
var democratNumber = [548, 291, 251, 246, 210, 182, 160, 147, 142, 121, 118, 118, 117, 116, 109, 96, 93, 92, 85, 84, 78, 75, 74, 71, 67, 60, 59, 59, 52, 46, 43, 43, 42, 41, 37, 37, 37, 37, 35, 33, 32, 31, 30, 30, 27, 27, 26, 25, 23, 20, 18, 17, 12, 12, 11, 11, 1];

var democratState = ["California", "New York", "Texas", "Florida", "Pennsylvania", "Illinois", "Ohio", "Michigan", "New Jersey", "North Carolina", "Maryland", "Washington", "Georgia", "Massachussets", "Virginia", "Wisconsin", "Minessota", "Indiana", "Arizona", "Missouri", "Colorado", "Tennessee", "Oregon", "Connecticut", "Puerto Rico", "Alabama", "Kentucky", "Louisiana", "South Carolina", "Iowa", "District of Columbia", "Nevada", "New Mexico", "Oklahoma", "Mississippi", "Arkansas", "Kansas", "Utah", "West Virginia", "Hawaii", "Rhode Island", "New Hampshire", "Delaware", "Maine", "Nebraska", "Idaho", "Montana", "Vermont", "South Dakota", "North Dakota", "Alaska", "Wyoming", "Democrats Abroad", "Guam", "Virgin Islands", "American Samoa", "Northern Marianas", "Unassigned"];
//

var repalloted = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachussets", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "District of Columbia", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio"];

var create_graph = function(){
		d3.select(".chart").selectAll("div").remove();
		rdelegates.innerHTML = "<b>Total Number of Republican Delegates:</b> 2,472 <br> <b>Number of Alloted Delegates:</b> 1,719 <br>";
		keyhtml.innerHTML = "<hr> Key <br>";
		rkeychart();
		rkeychart2();
		d3chart(repnum, repstate, repalloted);
		democratD3chart(democratNumber);
};

var rkeychart = function rkeychart() {
    d3.select(".kchart")
				.selectAll("div")
				.data([0, 1])
				.enter()
				.append("div")
				.style("width","100px")
				.text(function(d) {
						// Something here messes up
						if (d == 0){
								return "unallotted";
						} else {
								return "allotted";
						}
				})
				.style("background-color", function(d) {
						if (d == 0)
								return "#C5746E";
				})
				.style("font-size", "15px");
};

var rkeychart2 = function rkeychart2() {
    d3.select(".kchart2")
				.selectAll("div")
				.data([0, 1])
				.enter()
				.append("div")
				.style("width","100px")
				.text(function(d) {
						if (d == 0){
								return "allotted";
						} else {
								return "unallotted";
						}
				})
				.style("background-color", function(d) {
						if (d == 0)
								return "blue";
				})
				.style("font-size", "15px");
};


var d3chart = function(data, state, allot){
		d3.select(".chart")
				.selectAll("div")
				.data(data)
				.enter()
				.append("div")
				.style("width", function(d)
							 {return d*4 + "px"; })
		// Add allotment coloring
				.style("background-color", function(i){
						if (isInArray(state[i], allot)){
								return "#7F0000";
						} else {
								return "#C5746E";
						}
				})
		// end allotment
				.text(function(d,i) {
						return state[i] + " - " + d;
						//console.log(d);
				});
};

//Rick's function for democrats
var democratD3chart = function(data) {
    d3.select(".chart2")
				.selectAll("div")
				.data(data)
				.enter()
				.append("div")
				.style("width", function(d){
						return d*2 + "px";
				})
				.text(function(d, i) {
						return democratState[i] + " - " + d;
				})
};


function isInArray(value, array) {
		return array.indexOf(value) > -1;
};

create_graph();

console.log(isInArray("foo",repalloted));
console.log(isInArray("Ohio",repalloted));
