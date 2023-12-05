//your JS code here. If required.
let currElement = document.querySelector("#circle-1");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let pos = 1; 

function next() {
	// if(prevBtn.disabled) prevBtn.disabled = false;
	if(pos < 5){
		const nextLine = currElement.nextElementSibling;
		nextLine.classList.add("active");
		const nextCircle = nextLine.nextElementSibling;
		nextCircle.classList.add("active");

		currElement = nextCircle;
	    pos++;

		// if(pos === 5){
		// 	nextBtn.disabled = true;
		// }
	}else{
		alert("Reached limit");
	} 
} 
 
function prev() {
	// if(nextBtn.disabled) nextBtn.disabled = false;
	if(pos !== 1){
		currElement.classList.remove("active");
		const prevLine = currElement.previousElementSibling;
		prevLine.classList.remove("active");	
		currElement = prevLine.previousElementSibling;
		pos--;

		// if(pos === 1){
		// 	prevBtn.disabled = true;
		// }
	}
	
}