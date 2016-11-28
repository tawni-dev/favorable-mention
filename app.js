var favorableMention = angular.module('favorableMention', ['ui.router']);

favorableMention.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
            url: '/',
            templateUrl: 'views/home/homeTempl.html'
        })
        .state('music', {
            url: '/music',
            templateUrl: 'views/music/musicTempl.html'
        });
});
