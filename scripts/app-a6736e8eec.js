function HeaderController(){this.title="Sampler!"}function routesConfig(e,r,t){t.html5Mode(!0).hashPrefix("!"),r.otherwise("/"),e.state("app",{url:"/",component:"app"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("twitterDemo",["ui.router"]),angular.module("twitterDemo").run(["$rootScope","$templateCache",function(e,r){e.$on("$viewContentLoaded",function(){r.removeAll()})}]),angular.module("twitterDemo").controller("HeaderController",HeaderController),angular.module("twitterDemo").component("appHeader",{templateUrl:"app/header/header_template.html",controller:"HeaderController"}),angular.module("twitterDemo").component("app",{templateUrl:"app/app_template.html",controller:"AppController"}),angular.module("twitterDemo").controller("AppController",[function(){var e=this;e.name="Mika"}]),angular.module("twitterDemo").run(["$templateCache",function(e){e.put("app/app_template.html","<app-header></app-header>\r\n<p> Hello {{$ctrl.name}}! </p>\r\n"),e.put("app/header/header_template.html",'<div class="header-container">\r\n  <div class="button-container right-separator">\r\n      <div class="button button--rounded button--active">\r\n        <i class="fa fa-envira" aria-hidden="true"></i>\r\n      </div>\r\n  </div>\r\n  <div class="flex layout-row main-menu--container">\r\n      <div class="button-container">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-bell" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n      <div class="button-container">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-envelope" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n      <div class="button-container menu--active">\r\n        <div class="button button--rounded">\r\n          <i class="fa fa-hashtag" aria-hidden="true"></i>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class="flex flex-rem layout-row layout-align-center-center">\r\n    <div class="logo"></div>\r\n  </div>\r\n  <div class="flex layout-align-end-center">\r\n      <div class="input--search-container">\r\n        <input type="text" placeholder="Search" class="input--search">\r\n      </div>\r\n      <div class="margin-lr-20 button button--rounded profile--img"></div>\r\n  </div>\r\n</div>\r\n')}]),angular.module("twitterDemo").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-a6736e8eec.js.map
