//Anropar PersonAPI för att skapa, hämta, uppdatera och ta bort personer

app.service("SPACRUDService", function ($http) {

    //Hämta alla personer
    this.getPeople = function () {

        return $http.get("/api/PeopleAPI");
    };

    //Hämta person med person_key 
    this.getPerson = function (id) {
        return $http.get("/api/PeopleAPI/" + id);
    };

    //Skapa ny person 
    this.post = function (Person) {
        debugger;
        var request = $http({
            method: "post",
            url: "/api/PeopleAPI",
            data: Person
        });
        return request;
    };

    //Ändra person med specefik person_key  
    this.put = function (id, Person) {
        var request = $http({
            method: "put",
            url: "/api/PeopleAPI/" + id,
            data: Person
        });
        return request;
    };

    //Ta bort person med person_key
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/PeopleAPI/" + id
        });
        return request;
    };
});