function addOn() {
	var text;
	var reports = document.getElementById("usr").value;
	
	switch(reports) {
		case "Current Grade Status":
			text = "This report shows student status by grade,At-Risk, Benchmark, Above Benchmark";
			break;
		case "Current Class Status":
			text = "This report shows student status by<br> grade,At-Risk, Benchmark, Above Benchmark";
			break;
		case "Student Progress Report":
			text = "Mornitor and track an individual student progress over the current semester for NLM Reading";
			break;
		case "Group Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope: District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "School Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "Student Report Title":
			text = "All Grades Status Assessment: LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "Group Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "Student Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope: District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "District Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "Teacher Report Title":
			text = "All Grades Status Assessment: LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
		case "Teacher Report Title":
			text = "All Grades Status Assessment LDG, easyCBM Math Scope District, School, Project Data Type Benchmark,Outcome.";
			break;
			
		default:
			text = "Report not found!";
	}
	document.getElementById("demo").innerHTML = text;
	
}


var myvar = document.getElementsByTagName("p");
var myBox = document.querySelectorAll(".box");

for (i = 0; i < myvar.length; i++) {
	 myvar[i].addEventListener("click", changeContent);
		 
}
	
function changeContent() {
	this.innerHTML = "Selected!";
}


for (i = 0; i < myBox.length; i++) {
	 myBox[i].addEventListener("mouseover", changeBackground);
		 
}

function changeBackground() {
	this.style.backgroundColor = "red";
}

