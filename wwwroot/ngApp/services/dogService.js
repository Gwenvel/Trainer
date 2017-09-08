class DogService {
    constructor($resource, $stateParams) {
        this.dogsResource = $resource("/api/dogs/:id");
        // let id = $stateParams["id"];
    }

    getDogs() {
        return this.dogsResource.query();
    }

    addDog(dog, callback) {
        this.dogsResource.save(dog, callback);
    }

    getDog(id) {
        return this.dogsResource.get( { id: id } );
    }

    editDog(dog, callback) {
        this.dogsResource.save(dog, callback);
    }

    deleteDog(id, callback) {
        return this.dogsResource.remove( { id: id }, callback );
    }
}

