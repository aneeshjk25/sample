'use strict';
var module = angular.module('sample.todo-list-controller',[]);
module.controller('todoListController',function($scope,TodoListServices){
	TodoListServices.getAll().then(function(response){
			$scope.todos = response;
	});
})
