class DogsController {
    constructor($dogService, $state) {
        this.dogService = $dogService;
        this.state= $state;
        this.dogs = $dogService.getDogs();
    }

    getDogId(id) {
        this.state.go("editDog", { id: id });
}

deleteDog(id) {
    this.dogService.deleteDog({ id: id }, res=> {
        this.state.go("dogs");
    });
}
}