app.controller('singleHouseController',['$http','$routeParams','gotservice',function ($http,$routeParams,gotservice) {
	
	var main = this;
	this.houseId = $routeParams.id3;
	this.singleHouse = [];

	this.getHouse = function(){
		gotservice.getSingleHouseDetail(main.houseId)
		.then(function successCallback(response){
			main.singleHouse.push(response.data);
		})
	}
}])