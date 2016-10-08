angular.module('twitterDemo')
.controller('HeaderController', HeaderController);

function HeaderController(){
  var vm = this;

  this.title = "Sampler!";

};

angular.module('twitterDemo')
.component('appHeader', {

  templateUrl: 'app/header/header_template.html',
  controller: 'HeaderController'

});
