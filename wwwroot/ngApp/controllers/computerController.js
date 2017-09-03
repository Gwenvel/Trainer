class ComputerController {
    constructor($computerService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.computer = $computerService.getComputer(id);
    }
}