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
	service.save = function(record){
		if(record.id){
			return service.edit(record);
		}else{
			return service.add(record);
		}
	}
	service.add = function(record){
		return Restangular.all(resource_url).post(record);
	}
	service.edit = function(record){
		return record.patch();
	}
	service.remove = function(record){
		return record.remove();
	}
	return service;
}])