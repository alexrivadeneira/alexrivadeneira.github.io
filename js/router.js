var router = {
	router: function(){
		route = location.hash.split("#")[1] || "home";

		console.log("route", route);

		if(controllers[route]){
			controllers[route]();
		}

		if(views[route]){
			controllers.navbar(route)
		};
		
	},

	render: function(target, content){
		console.log("rendering");
		target.innerHTML = content;
	}
}



