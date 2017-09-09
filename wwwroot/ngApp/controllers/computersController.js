class ComputersController {
    constructor($computerService, $state, $stateParams) {
        this.message = "List and Details";
        let id = $stateParams["id"];
        this.state = $state;
        this.computerService = $computerService;
        this.computers = $computerService.getComputers();
    }
    delComputer(id) {
        this.computerService.del(id, res =>{
            this.state.reload();
        });
    }
    getComputerId(id) {
        this.state.go("editComputer", {id: id});
    }
}