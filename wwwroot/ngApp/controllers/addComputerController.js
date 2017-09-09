class AddComputerController {
    constructor($computerService, $state) {
        this.message = "add computer";
        this.state = $state;
        this.computerService = $computerService;
        this.computer = {
            brand: "",
            cpu: "",
            memory: "",
            price: ""
        }
    }
    addComputer(computer, callback) {
        this.computerService.add(this.computer, res => {
            this.state.go("computers");
        });
    }
}