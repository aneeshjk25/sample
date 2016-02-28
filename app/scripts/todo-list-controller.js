'use strict';
var module = angular.module('sample.todo-list-controller',[]);
module.controller('todoListController',function($scope,$state,TodoListServices){
	TodoListServices.getAll().then(function(response){
			$scope.todos = response;
	});
	$scope.delete = function(record,index){
		TodoListServices.remove(record).then(function(){
			$scope.todos.splice(index,1);
		});
	}
	$scope.toggleComplete = function(record){
		TodoListServices.save(record).then(function(){
			
		});
	}
})
var todoListSaveController = function($scope,$state,TodoListServices){
	$scope.processForm = function(form){
		if(form.$valid){
			TodoListServices.save($scope.todo).then(function(){
				$state.go('home');
			})
		}
	}	
}
module.controller('todoListAddController',function($scope,$state,TodoListServices){
	angular.extend(this,new todoListSaveController($scope,$state,TodoListServices));
	$scope.todo = {

	};
})

module.controller('todoListEditController',function($scope,$state,TodoListServices){
	angular.extend(this,new todoListSaveController($scope,$state,TodoListServices));
	TodoListServices.get($state.params.id).then(function(response){
		$scope.todo = response;
	})
})