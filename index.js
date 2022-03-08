var numSquares=6;
var color =[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");


init();

function init(){
	// mode button event listeners
	setupModeButtons();
	setupSquares();
 	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButton.length;i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="EASY"? numSquares=3: numSquares=6;
		// if(this.textContent==="EASY"){
		// 	numSquares=3;
		// }
		// else{
		// 	numSquares=6;
		// }
		reset();
	});

}
}

function setupSquares(){
	for(var i=0; i < squares.length; i++){
	//add initial colors to Square 
	squares[i].style.background=color[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor=(this.style.background);
		// compare color to picked
		if(clickedColor ===pickedColor){
			messageDisplay.textContent="CORRECT";
			resetButton.textContent="play again ?";

			changeColor(clickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="try again";
		}

	});
}
}



function reset(){
	// generate all new colors
	color=generateRandomColor(numSquares);
	// picked a NEW color from array
	pickedColor =pickColor();
	 // change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent=" NEW COLOR";
	messageDisplay.textContent="";
	// change color of squares
	for(var i=0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.display="block";
			squares[i].style.background=color[i];
		}else {
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";


}


// easyBtn.addEventListener("click", function(){
// 	  hardBtn.classList.remove("selected");
// 	  easyBtn.classList.add("selected");
// 	  numSquares=3;
// 	  color=generateRandomColor(numSquares);
// 	  pickedColor=pickColor();
// 	  colorDisplay.textContent=pickedColor;
// 	  for(var i=0; i<squares.length;i++){
// 	  	if(color[i]){
// 	  		squares[i].style.background=color[i];
// 	  	}
// 	  	else{
// 	  		squares[i].style.display="none";
// 	  	}
// 	  }
//  });
// hardBtn.addEventListener("click", function(){
// 	 hardBtn.classList.add("selected");
// 	  easyBtn.classList.remove("selected");
// 	  numSquares=6;
// 	  color=generateRandomColor(numSquares);
// 	  pickedColor=pickColor();
// 	  colorDisplay.textContent=pickedColor;
// 	  for(var i=0; i<squares.length;i++){
// 	  	squares[i].style.background=color[i];
// 	  	squares[i].style.display="block";
	  	
	  	
// 	  }
//  });



resetButton.addEventListener("click",function(){
	// // generate all new colors
	// color=generateRandomColor(numSquares);
	// // picked a NEW color from array
	// pickedColor =pickColor();
	//  this.textContent=" NEW COLOR";
	// // change colorDisplay to match picked color
	// colorDisplay.textContent=pickedColor;
	// messageDisplay.textContent="";
	// // change color of squares
	// for(var i=0; i < squares.length; i++){
	// 	squares[i].style.background=color[i];
	// }
	// h1.style.background="steelblue";
	reset();

});


 



function changeColor(color){
	// loop through all Squares
	for(var i=0;i<squares.length;i++){
		// change each color to match Given Color
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}

function generateRandomColor(num){
	// make an array
	var arr=[]
	// repeat num times
	for(i=0;i<num; i++){
		// get random color and push into array
		arr.push(randomColor())

	}
	// return array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	// pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	// pick a "blue" from 0-255
	var b=Math.floor(Math.random()*256);

	return "rgb("+ r + ", "+ g +", "+ b +")"
}