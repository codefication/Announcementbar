var app = angular.module("app", []);

app.controller('AnnouncementCtrl', ['$scope', function ($scope) {   

    var vm = $scope;

    if (typeof sessionStorage.showAnnouncement === 'undefined') {
      sessionStorage.setItem('showAnnouncement', 'true');
    }

    if (sessionStorage.showAnnouncement === 'true') {
      vm.show = true;
    } else {
      vm.show = false;
    }

    vm.hideAnnouncement = function () {
      sessionStorage.setItem('showAnnouncement', 'false');
      vm.show = false;
    };
}]);
  
  