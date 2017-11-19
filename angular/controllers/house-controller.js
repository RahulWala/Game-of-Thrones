app.controller('houseController',['$http','gotservice',function ($http, gotservice) {
	var main = this;
	this.houseData = [];


	//Function Calling
	this.allHouse = function() {
		for(var i = 1; i<50; i++){

		gotservice.getHouseDetail(i)
		.then(function successCallback(response){
			main.houseData.push.apply(main.houseData, response.data);


		},function errorCallback(response){
			alert("Some error in GET method");
		}
		)
	}}


    this.orderByField = 'name','region';
	this.reverseSort = false;
}])