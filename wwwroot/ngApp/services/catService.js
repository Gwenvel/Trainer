class CatService {
    constructor($resource) {
        this.cats = $resource("/api/Cats/:id");

    }
    getCats(){
        return this.cats.query();
    }
    getCat(id){
        return this.cats.get({id:id});
    }
}