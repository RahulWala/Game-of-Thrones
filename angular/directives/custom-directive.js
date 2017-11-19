app.directive("allBooks", function(){
	return{
		restrict : 'E',
		templateUrl : './views/book-view.html',
		controller : function($scope) {
			
		}
	}
})


app.directive("allChar", function(){
	return{
		restrict: 'E',
		templateUrl: './views/char-view.html',
		controller: function($scope) {

		}
	}
})


app.directive("allHouse",function(){
	return{
		restrict: 'E',
		templateUrl: './views/house-view.html',
		controller: function($scope) {

		}
	}
})