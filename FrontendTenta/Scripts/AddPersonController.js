//Lägg till en controller på clientsidan för att lägga till en person

app.controller('AddPersonController', function ($scope, SPACRUDService) {
    $scope.person_key = 0;

    $scope.save = function () {
        var Person = {
            person_key: $scope.person_key,
            email: $scope.email
        };

        //Anropar post-funktionen på services med ett Person-objekt för att skapa ny person
        var promisePost = SPACRUDService.post(Person);

        promisePost.then(function (pl) {
            alert("Person sparad.");
        },
              function (errorPl) {
                  $scope.error = 'fel fel fel', errorPl;
              });

    };

});
