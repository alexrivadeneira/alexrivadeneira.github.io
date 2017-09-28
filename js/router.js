// needs directing capability
var router = {
	router: function(){
		route = location.hash.split("#")[1] || "home";

		console.log("route", route);

		if(controllers[route]){
			controllers[route]();
		}
		
	},

	render: function(content){
		console.log("rendering");
		mainContent.innerHTML = content;
	}
}


// needs rendering functionality