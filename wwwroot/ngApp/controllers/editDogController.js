class EditDogController {
    constructor($dogService, $stateParams, $state) {
        let id = $stateParams["id"];
        this.state = $state;
        this.dogService = $dogService;
        this.dog = $dogService.getDog(id);
        this.doggy = {
            name: "",
            age: 0,
            owner: "",
            breed: "",
        }
    }
    
    addDog3() {
        this.dogService.editDog(this.dog, res=> {
            this.state.go("dogs");
        });
    }
}