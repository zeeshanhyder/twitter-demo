angular
  .module('twitterDemo', ['ui.router']);

  angular.module('twitterDemo').run(function($rootScope, $templateCache) {
     $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
     });
  });
