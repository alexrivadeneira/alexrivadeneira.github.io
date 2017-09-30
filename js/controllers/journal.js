controllers.journal = function(data){
	content = views.journal();
	router.render(mainContent, content);
}

controllers._journal_entry = function(data){
	content = views._journal_entry();
	router.render(mainContent, content);
}