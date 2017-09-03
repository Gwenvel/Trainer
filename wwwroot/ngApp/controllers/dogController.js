class DogController {
    constructor($dogService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.dog = $dogService.getDog(id);
    }
}