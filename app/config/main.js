require.config({
	baseUrl : '.',
	paths : {
		jQuery : 'bower_components/jquery/dist/jquery',
		angular : 'bower_components/angular/angular',
		bootstrap : 'bower_components/bootstrap/dist/js/bootstrap',
		"angular-bootstrap" : 'bower_components/angular-bootstrap/ui-bootstrap',
		"angular-ui-router" : 'bower_components/ui-router/release/angular-ui-router',
		'underscore' : 'bower_components/underscore/underscore',
		'restangular' : 'bower_components/restangular/dist/restangular',
		libs : 'app/config/libs',
		sample : 'app/config/app'
	},
	shim : {
		jQuery : { exports : 'jQuery'},
		angular : { exports : 'angular' , dependencies : ['jQuery'] },
		bootstrap : { dependencies : ['jQuery']},
		"angular-bootstrap" : { dependencies : ['jQuery','bootstrap']},
		underscore : { exports : 'underscore' },
		restangular : { dependencies : ['angular','underscore']},
		"angular-ui-router" : { dependencies : ['angular'] },
		libs : { dependencies : ['angular'] },
		sample  : { dependencies : ['jQuery' , 'angular' ]}
	}
})

require(
	['jQuery',
	 'angular','sample'],function($,angular,app){
	 	$(function(){
	 		angular.bootstrap(document,['sample'])
	 	})
	 })