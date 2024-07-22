// Define your Book class here:
class Book{
    constructor(title, author, copyright, isbn, numberOfPages,  timesCheckOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.timesCheckOut = timesCheckOut;
        this.discarded = discarded;
    }
    checkOut(used){
        this.timesCheckOut = this.timesCheckOut + used;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyright, isbn, numberOfPages, timesCheckOut, discarded){
        super(title, author, copyright, isbn, numberOfPages, timesCheckOut, discarded);
    }
    dispose(current){
        if(current-this.copyright>5){
            this.discarded = 'yes';
        }
    }
}
class Novel extends Book{
    constructor(title, author, copyright, isbn, numberOfPages, timesCheckOut, discarded){
        super(title, author, copyright, isbn, numberOfPages, timesCheckOut, discarded);
    }
    dispose(){
        if(this.timesCheckOut>100){
            this.discarded = 'yes';
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let pride = new Novel('Pride and Prejudice', 'Jane Austin', 1813, '1111111111111', 432, 32, 'no');
let shuttle = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147,1, 'no');

// Code exercises 4 & 5 here:
pride.dispose();
shuttle.dispose(2024);

console.log(pride.discarded, shuttle.discarded);
pride.checkOut(5);
console.log(pride.timesCheckOut);