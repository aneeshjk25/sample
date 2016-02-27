var mod = angular.module('sample.todo-list-services',[]);
mod.service('TodoListServices',['Restangular',function(Restangular){
	var resource_url = '';
	var service = { };
	service.get = function(id){
		return Restangular.one(resource_url,id).get();
	}
	service.getAll = function(){
		return Restangular.all(resource_url).getList();
	}
	return service;
}])