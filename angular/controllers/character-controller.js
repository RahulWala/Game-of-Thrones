app.controller('characterController',['$http','$routeParams','gotservice',function ($http,$routeParams,gotservice) {
	var main = this;
	this.charData = [];


	//Function Calling
	this.allchar = function(){
		for(var i = 1; i<50; i++){

		gotservice.getcharacterDetail(i)
		.then(function successCallback(response){
			main.charData.push.apply(main.charData, response.data);
			// console.log(response.data);


		},function errorCallback(response){
			alert("Some error in GET method");
		}
		)
	}}

    this.orderByField = 'name','culture';
	this.reverseSort = false;
}])