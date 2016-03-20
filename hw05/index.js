//    Display party.
// 		Display total delegate count.
// 		Display number of delegates allotted and not yet allotted.
// 		Each bar should be labeled with state name and number of delegates.
// 		Each bar should be colored one of two colors depending on whether its delegates have been allotted.
//Show key.

var repnum = [172, 155, 99, 95, 76, 72, 71, 69, 66, 59, 58, 58, 57, 52, 51, 50, 50, 49, 46, 46, 44, 43, 42, 42, 40, 40, 40, 40, 38, 38, 37, 36, 34, 32, 30, 30, 29, 29, 28, 28, 28, 28, 27, 24, 23, 23, 23, 19, 19, 19, 16, 16, 9, 9, 9, 9];

var repstate = ["California", "Texas", "Florida", "New York", "Georgia", "North Carolina", "Pennsylvania", "Illinois", "Ohio", "Michigan", "Tennessee", "Arizona", "Indiana", "Missouri", "New Jersey", "Alabama", "South Carolina", "Virginia", "Kentucky", "Louisiana", "Washington", "Oklahoma", "Massachusetts", "Wisconsin", "Mississippi", "Utah", "Arkansas", "Kansas", "Minnesota", "Maryland", "Colorado", "Nebraska", "West Virginia", "Idaho", "Iowa", "Nevada", "South Dakota", "Wyoming", "Oregon", "Connecticut", "North Dakota", "Alaska", "Montana", "New Mexico", "New Hampshire", "Puerto Rico", "Maine", "Hawaii", "District of Columbia", "Rhode Island", "Vermont", "Delaware", "Virgin Islands", "American Samoa", "Northern Marianas", "Guam"];

var repalloted = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachussets", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "District of Columbia", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio"];

var delegates = document.getElementById("delegates");
var donkey = document.getElementById("donkey");
var elephant = document.getElementById("elephant");

var create_graph = function(){
    d3.select(".chart").selectAll("div").remove();
		rdelegates.innerHTML = "<b>Total Number of Republican Delegates:</b> 2,472 <br> <b>Number of Alloted Delegates:</b> 1,719 <br>";
		d3chart(repnum);
};

var d3chart = function(data){ 
		d3.select(".chart")
				.selectAll("div")
				.data(data)
				.enter()
				.append("div")
   			.style("width", function(d)
							 {return d*4 + "px"; })
				.text(function(d,i) {
						return repstate[i] + " - " + d;
						//console.log(d);
				});
};

create_graph();
