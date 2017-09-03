class ComputersController {
    constructor($computerService,$state) {
        this.message = "These are our Computers";
        this.computers = $computerService.getComputers();
        this.state = $state;
    }
    click(id){
        this.state.go("computer",{id:id});
    }

}