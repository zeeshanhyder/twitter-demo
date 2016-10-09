angular.module('twitterDemo')
.controller('TweetCardController', TweetCardController);

function TweetCardController($sce){

  var vm = this;

  vm.sanitizedHTML = function() {
    return $sce.trustAsHtml(vm.tweet.content);
  }

}

angular.module('twitterDemo')
.component('tweetCard', {
  templateUrl: 'app/tweet-card/tweet-card_template.html',
  controller: 'TweetCardController',
  bindings : {
    tweet: '='
  }
});
