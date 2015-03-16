//Lägg till en controller på clientsidan för att visa alla personer

app.controller('ShowPeopleController', function ($scope, $location, SPACRUDService, ShareData) {
    loadAllPeopleRecords();

    //Skapa en funktion som hämtar alla personer
    function loadAllPeopleRecords() {
        //Hämta personer från services, getPeople
        var promiseGetPerson = SPACRUDService.getPeople();

        promiseGetPerson.then(function (pl) { $scope.People = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //Ändra person  
    $scope.editPerson = function (person_key) {
        debugger;
        ShareData.value = person_key;
        $location.path("/editperson");
    }

    //Ta bort person 
    $scope.deletePerson = function (person_key) {
        ShareData.value = person_key;
        $location.path("/deleteperson");
    }
});