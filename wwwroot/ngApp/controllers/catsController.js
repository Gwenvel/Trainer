class CatsController {
    constructor($catService,$state) {
        this.message = "These are our Cats";
        this.cats = $catService.getCats();
        this.state = $state;
    }
    click(id){
        this.state.go("cat",{id:id});
    }
}