//Lägg till en controller på clientsidan för att ändra person

app.controller("EditPersonController", function ($scope, $location, ShareData, SPACRUDService) {
    getPerson();

    function getPerson() {
        //Hämta person från services
        var promiseGetPerson = SPACRUDService.getPerson(ShareData.value);

        promiseGetPerson.then(function (pl) {
            $scope.Person = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'fel fel fel', errorPl;
              });
    }

    $scope.save = function () {
        var Person = {
            person_key: $scope.Person.person_key,
            email: $scope.Person.email
        };

        //Anropar update-funktion på services me Person-objekt och person_key(id)
        var promisePutPerson = SPACRUDService.put($scope.Person.person_key, Person);
        promisePutPerson.then(function (pl) {
            $location.path("/showpeople");
        },
              function (errorPl) {
                  $scope.error = 'någonting gick snett...', errorPl;
              });
    };

});