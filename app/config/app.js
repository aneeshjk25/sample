dependencies_path = [];
dependencies_path.push('./app/scripts/todo-list-controller');
dependencies_path.push('libs');
define(dependencies_path,function(){
	var sample = angular.module('sample',['ui.router','sample.todo-list-controller'])
	sample.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url : '/',
			templateUrl : 'app/partials/list.html',
			controller : 'todoListController'
		})
	})
})