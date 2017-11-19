app.controller('singleCharController',['$http','$routeParams','gotservice',function ($http,$routeParams,gotservice) {
	
	var main = this;
	this.charId = $routeParams.id2;
	this.singlechar = [];

	this.getchar = function(){
		gotservice.getSingleCharacterDetail(main.charId)
		.then(function successCallback(response){
			main.singlechar.push(response.data);
		})
	}
}])