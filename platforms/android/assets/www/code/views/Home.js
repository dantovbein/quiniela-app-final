function Home(config) {
	View.call(this,config);
	this.container = config.container;
	this.pathSnippet = "views/home.html";
}

inheritPrototype(Home, View);

Home.prototype.constructor = Home;

Home.prototype.initialize = function(){
	View.prototype.initialize.call(this);
	var snippet = new Snippet( { "path" : this.pathSnippet, "data" : [] });
	this.node = $.parseHTML(snippet.getSnippet());
	this.container.append(this.node);

	$(this.node).find(".generate-bet").click( { context:this }, function(e){
		$( e.data.context.node ).trigger( "generateBet" );
	} );

	$(this.node).find(".edit-bet").click( { context:this }, function(e){
		$( e.data.context.node ).trigger( "editBet" );
	} );

	$(this.node).find(".remove-bet").click( { context:this }, function(e){
		$( e.data.context.node ).trigger( "removeBet" );
	} );

	$(this.node).find(".synchronize").click( { context:this }, function(e){
		$( e.data.context.node ).trigger( "synchronize" );
	} );

	this.addHandlers();	
}