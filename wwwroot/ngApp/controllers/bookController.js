class BookController {
    constructor($bookService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.book = $bookService.getBook(id);
    }
}