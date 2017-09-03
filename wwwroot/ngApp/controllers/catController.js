class CatController {
    constructor($catService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.cat = $catService.getCat(id);
    }
}