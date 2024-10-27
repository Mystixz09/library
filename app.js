// object constructor
function book(title,author,didRead){
    this.title = title;
    this.author = author;
    this.didRead = didRead;
}

book.prototype.info = function() {
    return(`${this.title} is written by ${this.author}`);
};

const book1 = new book("how to die","Shuyesh",true);
const book2 = new book("suffer alone","Shuyesh",true);
const book3 = new book("its just life","Shuyesh",true);


console.log(book1.info());
console.log(book2.info());
console.log(book3.info());