angular.module('twitterDemo').component('app', {
  templateUrl: 'app/app_template.html',
  controller: 'AppController'
});

angular.module('twitterDemo').controller('AppController', [function AppController(){
  var vm = this;

  vm.tweets = [{
    name: 'Zeeshan Hyder',
    user: 'zee',
    content: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
    when: '2m',
    isretweet: false,
    retweets: 20
  },
  {
    name: 'Moosa Saleem',
    user: 'moosasaleem',
    content: '<p>Check this out!</p><iframe width="560" height="315" src="https://www.youtube.com/embed/XGFQOZ_owtc" frameborder="0" allowfullscreen></iframe>',
    when: '5m',
    isretweet: true,
    retweets: null
  }
];

}]);
