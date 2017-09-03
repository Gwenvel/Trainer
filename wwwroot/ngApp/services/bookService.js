class BookService {
    constructor($resource) {
        this.books = $resource("/api/Books/:id");

    }
    getBooks(){
        return this.books.query();
    }
    getBook(id){
        return this.books.get({id:id});
    }
}