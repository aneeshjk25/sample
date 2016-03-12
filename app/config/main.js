require.config({
	baseUrl : '.',
	waitSeconds : 0,
	paths : {
		jQuery : '/jquery/dist/jquery',
		angular : '/angular/angular',
		bootstrap : '/bootstrap/dist/js/bootstrap',
		"angular-bootstrap" : '/angular-bootstrap/ui-bootstrap',
		"angular-ui-router" : '/ui-router/release/angular-ui-router',
		'underscore' : '/underscore/underscore',
		'restangular' : '/restangular/dist/restangular',
		libs : 'config/libs',
		sample : 'config/app'
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
	},
	priority : ['angular']
})

require(
	['jQuery',
	 'angular','sample'],function($,angular,app){
	 	$(function(){
	 		angular.bootstrap(document,['sample'])
	 	})
	 })