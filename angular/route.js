app.config(['$routeProvider',function($routeProvider){
	$routeProvider


	.when('/books',{
		templateUrl    : 'views/all-books.html',
		controller     : 'bookController',
		controllerAs   : 'bookCtrl'
	})



	.when('/books/:id1',{
		templateUrl    : 'views/book-detail-view.html',
		controller     : 'bookViewController',
		controllerAs   : 'bookVeCtrl'
	})



	.when('/characters',{
		templateUrl	   :  'views/all-char.html',
		controller     :  'characterController',
		controllerAs   :  'charCtrl'
	})



	.when('/characters/:id2',{
		templateUrl	   :  'views/char-detail-view.html',
		controller     :  'singleCharController',
		controllerAs   :  'charVeCtrl'
	})



	.when('/houses',{
		templateUrl    :  'views/all-house.html',
		controller     :  'houseController',
		controllerAs   :  'houseCtrl'
	})



	.when('/houses/:id3',{
		templateUrl	   :  'views/house-detail-view.html',
		controller     :  'singleHouseController',
		controllerAs   :  'singleHs'
	})



	.otherwise({
		redirectTo     : '/'
	})
}])
