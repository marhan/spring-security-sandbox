angular.module('hello', [])
    .controller('home', function($http) {
        var self = this;
        $http.get('/ui/resource/').then(function(response) {
            self.greeting = response.data;
        })
    });