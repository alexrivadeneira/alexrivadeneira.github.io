var templates = {};
var controllers = {};
var views = {};


var mainContent = document.getElementById("content");

window.onload = function(){
	router.router();
}

window.onhashchange = function(){
	router.router();
}


