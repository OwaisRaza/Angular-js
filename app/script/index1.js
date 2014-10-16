/**
 * Created by appBakerz - 05 on 9/10/2014.
 */

var app = angular.module("demo", []);

app.controller('mainController',function($scope){

    $scope.mainArea = 'upVoteCount';

      $scope.event = {
          name: 'Khanzada',
          data: '12548632',
          time: '12:00pm',
          location:{
              address:'Pakistan',
              city:'karachi',
              provinces:'sindh'
          },
          imageUrl:'app/images/site_logo_03_04.png',
          sessions:[
              {
                  name1:'first',
                  detail:'first one in a row',
                  rs:'350',
                  quality:'just ok',
                  upVoteCount:0,
                  duration:1
              },
              {
                  name1:'sec',
                  detail:'sec one in a row',
                  rs:'400',
                  quality:'good',
                  upVoteCount:0,
                  duration:2
              },
              {
                  name1:'third',
                  detail:'third one in a row',
                  rs:'450',
                  quality:'very good',
                  upVoteCount:0,
                  duration:3
              }
          ]

      };

  $scope.upVoteSession = function(session){
         session.upVoteCount++;
  };

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };


});

app.filter('durations', function(){
    return function(duration){
        switch (duration){
            case 1:
                return 'Half Hour';
            case 2:
                return 'One Hour';
            case 3:
                return 'Two Hour'
        }
    }
});

app.controller('newController',function newController($scope){
            $scope.saveEvent = function(event, newEditForm){
                if(newEditForm.$valid ){
                window.alert('event' + ' ' + event.name + ' ' + 'saved')
                }
            };
    $scope.isOpen = false;
});