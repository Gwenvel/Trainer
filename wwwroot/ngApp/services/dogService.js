class DogService {
    constructor($resource) {
        this.dogs = $resource("/api/Dogs/:id");

    }
    getDogs(){
        return this.dogs.query();
    }
    getDog(id){
        return this.dogs.get({id:id});
    }
}