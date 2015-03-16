//Lägg till en controller på clientsidan för att ta bort en person


app.controller("DeletePersonController", function ($scope, $location, ShareData, SPACRUDService) {

    getPerson();
    function getPerson() {

        //Hämta person från services
        var promiseGetPerson = SPACRUDService.getPerson(ShareData.value);


        promiseGetPerson.then(function (pl) {
            $scope.Person = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'blev fel', errorPl;
              });
    }

    $scope.delete = function () {
        //Anropar delete-funktionen på services med person_key för att ta bort person
        var promiseDeletePerson = SPACRUDService.delete(ShareData.value);

        promiseDeletePerson.then(function (pl) {
            $location.path("/showpeople");
        },
              function (errorPl) {
                  $scope.error = 'blev fel', errorPl;
              });
    };

});