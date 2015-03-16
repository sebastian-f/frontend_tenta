var app = angular.module("ApplicationModule", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Ladda rätt vy
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;
    $routeProvider.when('/showpeople',
                        {
                            templateUrl: 'People/ShowPeople',
                            controller: 'ShowPeopleController'
                        });
    $routeProvider.when('/addperson',
                        {
                            templateUrl: 'People/AddNewPerson',
                            controller: 'AddPersonController'
                        });
    $routeProvider.when("/editperson",
                        {
                            templateUrl: 'People/EditPerson',
                            controller: 'EditPersonController'
                        });
    $routeProvider.when('/deleteperson',
                        {
                            templateUrl: 'People/DeletePerson',
                            controller: 'DeletePersonController'
                        });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!')
}]);