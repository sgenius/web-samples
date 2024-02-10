class Book {
   // this will be common to all books
   static hasWords = true;

   constructor(name, author, text) {
      this.name = name;
      this.author = author;
      this.text = text;
   };

   recommend() {
      console.log(`This book is recommended: ${this.name} by ${this.author}`);
   };
   read() {
      console.log(this.text);
   };
}

class BlankBook extends Book {
   constructor(name, author) {
      super(name, author, "This book is intentionally blank");
   }

   read() {
      console.log("...");
   }
}

const dune = new Book("Dune", "Frank Herbert", "This is a novel with space worms.");
console.log(dune);
dune.read();

const blank = new BlankBook("Blankie", "me");
blank.read();
blank.recommend();
console.log('blank.hasWords: ', blank.hasWords);
console.log('Book.hasWords: ', Book.hasWords);