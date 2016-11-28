angular.module('NoteWrangler')
	.config(function($routeProvider) {
			$routeProvider
			.when('/notes', {
				templateUrl: 'views/pages/notes/index.html',
				controller: 'NotesIndexController',
				controllerAs: 'indexController'
			})
			.when('/notes/new', {
				templateUrl: 'views/pages/notes/new.html',
				controller: 'NotesCreateController',
				controllerAs: 'createController'
			})
			.when('/notes/:id', {
				templateUrl: 'views/pages/notes/show.html',
				controller: 'NotesShowController',
				controllerAs: 'showController'
			})
			.when('/notes/:id/edit', {
				templateUrl: 'views/pages/notes/edit.html',
				controller: 'NotesEditController',
				controllerAs: 'editController'
			})
			
			.when('/users', {
				templateUrl: 'views/pages/users/index.html',
				controller: 'UsersIndexController',
				controllerAs: 'indexController'
			})
			.when('/users/:id', {
				templateUrl: 'views/pages/users/show.html',
				controller: 'UsersShowController',
				controllerAs: 'showController'
			})
			.otherwise({ redirectTo: '/'});
	});