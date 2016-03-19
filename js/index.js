var app = angular.module("myChat", ['firebase']);

app.controller('ctrl', function ($window, $scope, $firebaseArray) { 
    $scope.msg = {name: "Desconhecido", text: ''};
    
    var rootRef = new Firebase('https://luminous-fire-5196.firebaseio.com');
    var listRef = rootRef.child('message');
    $scope.chats = $firebaseArray(listRef);
    
    $scope.send = function(msg){
        $scope.chats.$add(angular.copy(msg));
        $scope.chats.$save();
    };
    
});

app.directive('uiChat', function () {
   return {
        templateUrl : 'chat.html',
        replace: true,
        restrict: 'E',
        scope: {name: "@", text: "@", type: "@"}
   }; 
});