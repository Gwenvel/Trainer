class EditComputerController {
    constructor($computerService, $stateParams, $state) {
        this.message = "edit computer";
        this.computerService = $computerService;
        this.state = $state;
        let id = $stateParams["id"];
        this.id = id;
        this.computer = $computerService.getComputer(id);
    }
    editComputer() {
        this.computerService.edit(this.id, this.computer, res => {
            this.state.go("computers");
        });
    }
    // editComputer() {
    //     this.computerService.edit(this.id, this.computer, res => {
    //         this.state.go("computers");
    //     }, res=> {
    //         console.log(res);
    //         this.state.go("computers");
    //     });
    // }
}