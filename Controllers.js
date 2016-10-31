angular.module('g3cApp.huongDan')
     .controller('huongDanEntriesController', [ '$scope', function huongDanEntriesController( $scope ) {
		$scope.Entries = [	
			{ text: "this is the first tutorial", 
				id: "100",
			  comments: [
				{text: "1. Comment"}, 
				{text: "2. Comment"}
			  ] 
			},
			{ text: "this is the second tutorial", 
			 id: "200",
			  comments: [
				{text: "3. Comment"}, 
				{text: "4. Comment"}
			  ] 
			}
		];
	}])
	.controller('huongDanController', [ '$scope', function huongDanController( $scope ) {
		$scope.Title = "This is my tutorial";
	}])
	.controller('huongDanDetailController', [ '$scope','$routeParams', function huongDanDetailController( $scope, $routeParams ) {
		$scope.Title = "This is my detail " + $routeParams.vid;

	}]);
