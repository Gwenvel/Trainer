class DogsController {
    constructor($dogService,$state) {
        this.message = "These are our Dogs";
        this.dogs = $dogService.getDogs();
        this.state = $state;
    }
    click(id){
        this.state.go("dog",{id:id});
    }

}