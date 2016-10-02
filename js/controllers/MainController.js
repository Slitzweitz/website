app.controller('MainController', ['$scope',
  function($scope) {
    $scope.networks = [
      {
        name: 'LinkedIn',
        url: 'http://linkedin.com/in/colinmbarlow',
        logo: 'img/linkedin.jpg';
      },
      {
        name: 'Codepen.io',
        url: 'http://linkedin.com/in/colinmbarlow',
        logo: 'img/linkedin.jpg';
      },
      {
        name: 'Github',
        url: 'http://linkedin.com/in/colinmbarlow',
        logo: 'img/linkedin.jpg';
      },
      {
        name: 'LinkedIn',
        url: 'http://linkedin.com/in/colinmbarlow',
        logo: 'img/linkedin.jpg';
      }
  ]
    $scope.plusOne = function(index) {
      $scope.networks[index].likes += 1;
    }
  }]);
