class BooksController {
    constructor($bookService,$state) {
        this.message = "These are our Books";
        this.books = $bookService.getBooks();
        this.state = $state;
    }
    click(id){
        this.state.go("book",{id:id});
    }

}