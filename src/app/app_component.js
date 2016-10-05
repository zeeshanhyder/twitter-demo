angular.module('twitterDemo').component('app', {
  templateUrl: 'app/app_template.html',
  controller: 'AppController'
});

angular.module('twitterDemo').controller('AppController', [function AppController(){
  var vm = this;
  vm.name = "Mika";

}]);
