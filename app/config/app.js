dependencies_path = [];
dependencies_path.push('./scripts/todo-list-controller');
dependencies_path.push('./scripts/todo-list-services');
dependencies_path.push('libs');
define(dependencies_path,function(){
	var sample = angular.module('sample',['ui.router','restangular','sample.todo-list-controller','sample.todo-list-services']);
	sample.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url : '/',
			templateUrl : 'partials/list.html',
			controller : 'todoListController'
		})
		.state('add',{
			url : '/add',
			templateUrl : 'partials/add-edit.html',
			controller : 'todoListAddController'
		})
		.state('edit',{
			url : '/edit/:id',
			templateUrl : 'partials/add-edit.html',
			controller : 'todoListEditController'
		});
	});
	sample.config(function(RestangularProvider){
		RestangularProvider.setBaseUrl('https://todo-backend-rails.herokuapp.com/');
	});
});