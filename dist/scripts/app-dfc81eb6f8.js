function TweetCardController(e){var t=this;t.deliberatelyTrustDangerousSnippet=function(){return e.trustAsHtml(t.tweet.content)}}function HeaderController(){this.title="Sampler!"}function routesConfig(e,t,r){r.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",component:"app"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],TweetCardController.$inject=["$sce"],angular.module("twitterDemo",["ui.router"]),angular.module("twitterDemo").controller("TweetCardController",TweetCardController),angular.module("twitterDemo").component("tweetCard",{templateUrl:"app/tweet-card/tweet-card_template.html",controller:"TweetCardController",bindings:{tweet:"="}}),angular.module("twitterDemo").controller("HeaderController",HeaderController),angular.module("twitterDemo").component("appHeader",{templateUrl:"app/header/header_template.html",controller:"HeaderController"}),angular.module("twitterDemo").component("app",{templateUrl:"app/app_template.html",controller:"AppController"}),angular.module("twitterDemo").controller("AppController",[function(){var e=this;e.tweets=[{name:"Zeeshan Hyder",user:"zee",content:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",when:"2m",isretweet:!1,retweets:20},{name:"Moosa Saleem",user:"moosasaleem",content:'<p>Check this out!</p><iframe width="560" height="315" src="https://www.youtube.com/embed/XGFQOZ_owtc" frameborder="0" allowfullscreen></iframe>',when:"5m",isretweet:!0,retweets:null}]}]),angular.module("twitterDemo").run(["$templateCache",function(e){e.put("app/app_template.html",'<div class="main flex layout-column">\r\n  <app-header></app-header>\r\n  <div class="container">\r\n\r\n      <div class="card profile-stats profile-stats--container">\r\n        <div class="profile-stats--stat stat--active">\r\n          <p>TWEETS</p>\r\n          <span>148</span>\r\n        </div>\r\n\r\n        <div class="profile-stats--stat">\r\n          <p>PHOTOS/VIDEOS</p>\r\n          <span>265</span>\r\n        </div>\r\n\r\n        <div class="profile-stats--stat">\r\n          <p>FOLLOWING</p>\r\n          <span>348</span>\r\n        </div>\r\n\r\n        <div class="profile-stats--stat">\r\n          <p>FOLLOWERS</p>\r\n          <span>1M</span>\r\n        </div>\r\n      </div>\r\n\r\n        <div ng-repeat="tweet in $ctrl.tweets">\r\n          <tweet-card tweet="tweet"></tweet-card>\r\n        </div>\r\n  </div>\r\n</div>\r\n'),e.put("app/header/header_template.html",'<div class="header-container">\r\n  <div class="button-container right-separator">\r\n      <div class="button button--rounded button--active">\r\n        <i class="fa fa-envira" aria-hidden="true"></i>\r\n      </div>\n\r\n  </div>\r\n  <div class="flex layout-row main-menu--container">\r\n      <div class="button-container">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-bell" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n      <div class="button-container">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-envelope" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n      <div class="button-container menu--active">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-hashtag" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class="flex flex-rem layout-row layout-align-center-center">\r\n    <div class="logo"></div>\r\n  </div>\r\n  <div class="flex layout-align-end-center main-search">\r\n      <div class="input--search-container margin-r-10">\r\n        <input type="text" placeholder="Search" class="input--search">\r\n      </div>\r\n      <div class="margin-lr-20 button button--rounded profile--img"></div>\r\n  </div>\r\n</div>\r\n<div class="card menu--mobile layout-align-start-center layout-row">\r\n  <div class="flex flex-rem button layout-align-center-center menu--active">\r\n      <span>HOME</span>\r\n  </div>\r\n  <div class="flex flex-rem button layout-align-center-center">\r\n      <span>MESSAGES</span>\r\n  </div>\r\n  <div class="flex flex-rem button layout-align-center-center">\r\n      <span>NOTIFICATIONS</span>\r\n  </div>\r\n</div>\r\n'),e.put("app/tweet-card/tweet-card_template.html",'<div class="card tweet-card">\r\n  <div class="margin-r-20 button button--rounded profile--img"></div>\r\n  <div class="flex layout-column flex-rem">\r\n    <div class="flex layout-row layout-align-space-between-center">\r\n      <h4 class="flex flex-rem margin-0">{{$ctrl.tweet.name}} <span class="tweet-user">@{{$ctrl.tweet.user}}</span> </h4>\r\n      <span class="tweet-moment">{{$ctrl.tweet.when}}</span>\r\n    </div>\r\n    <div class="tweet-content" ng-bind-html="$ctrl.deliberatelyTrustDangerousSnippet()">\r\n    </div>\r\n    <div class="flex layout-row tweet-menu margin-t-10">\r\n      <div class="tweet-card-menu--icons flex layout-row flex-rem layout-align-start-center">\r\n        <div>\r\n          <i class="fa fa-mail-forward button"></i>\r\n        </div>\r\n        <div>\r\n          <i class="fa fa-star button"></i>\r\n        </div>\r\n        <div>\r\n          <i class="fa fa-retweet button"></i>\r\n          <span>{{$ctrl.tweet.retweets}}</span>\r\n        </div>\r\n        <div>\r\n          <i class="fa fa-ellipsis-h button"></i>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <i class="fa fa-expand button"></i>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n</div>')}]),angular.module("twitterDemo").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-dfc81eb6f8.js.map