angular.module('listDemo1', ['ngMaterial'])
app.controller('ListCtrl', function($scope) {
    $scope.todos = [
      {
        face : 'img/list/60.jpg',
        what: 'Test for chat?',
        who: 'Yon',
        when: '3:08PM',
        notes: " Cinemed Ouverture Mélanie Laurent présentation du film Respire "
      },
      {
        face : 'img/list/10.jpg',
        what: 'Just try?',
        who: 'Obvoy',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/list/60.jpg',
        what: 'Amoureux avec toi?',
        who: 'Tess',
        when: '3:08PM',
        notes: " PAPA WAS NOT A ROLLING STONE"
      },
      {
        face : 'img/list/10.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " Internet Explorer 9 supports an alternative, the -ms-transform property. Newer versions of IE support the transform property (do not need the ms prefix)"
      },
      {
        face : 'img/list/10.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
	   {
        face : 'img/list/60.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/list/10.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/list/60.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/list/10.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/list/60.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ]
});