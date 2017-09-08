class AddDogController {
    constructor($dogService, $state) {
        this.dogService = $dogService;
        this.state = $state;
        this.dog = {
            name: "",
            age: 0,
            owner: "",
            breed: "",
        }
    }

    addDog2() {
        this.dogService.addDog(this.dog, res=> {
            this.state.go("dogs");
        });
    }

}