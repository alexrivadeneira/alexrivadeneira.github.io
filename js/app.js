var templates = {};
var controllers = {};
var views = {};


var mainContent = document.getElementById("content");
var navBar = document.getElementById("navbar");

window.onload = function(){
	router.router();
}

window.onhashchange = function(){
	router.router();
}


  
// fun stuff

var slider = document.getElementById("crack");

function updateSlider(value){
	if(value < 10){
  		slider.style.background = "url('img/f1.gif')";
  	} else if(value < 30){
  		slider.style.background = "url('img/f2.gif')";
  	} else if(value < 50){
  		slider.style.background = "url('img/f3.gif')"; 	
  	} else if(value < 60){
  		slider.style.background = "url('img/f4.gif')";
  	} else if(value < 70){
  		slider.style.background = "url('img/f5.gif')";
  	} else {
  		slider.style.background = "url('img/f6.gif')";
  	}  	 	
}


