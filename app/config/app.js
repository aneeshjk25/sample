dependencies_path = [];
dependencies_path.push('./app/scripts/todo-list-controller');
dependencies_path.push('./app/scripts/todo-list-services');
dependencies_path.push('libs');
define(dependencies_path,function(){
	var sample = angular.module('sample',['ui.router','restangular','sample.todo-list-controller','sample.todo-list-services'])
	sample.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url : '/',
			templateUrl : 'app/partials/list.html',
			controller : 'todoListController'
		})
	})
	sample.config(function(RestangularProvider){
		RestangularProvider.setBaseUrl('https://todo-backend-rails.herokuapp.com/');
	})
})