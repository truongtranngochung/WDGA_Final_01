
/* App Module */
		
angular.module('g3cApp', ['g3cApp.home', 'g3cApp.blog','g3cApp.huongDan'])
	.config( function g3cAppConfig ( $routeProvider ) {
		'use strict';
		$routeProvider.otherwise({ redirectTo: '/home' });
	});
	
	