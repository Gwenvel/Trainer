class DogsController {
    constructor($dogService, $state) {
        this.state= $state;
        this.dogs = $dogService.getDogs();
    }

    getDogId(id) {
        this.state.go("editDog", { id: id });
}
}