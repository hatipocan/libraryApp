// an array that stores all the book objects comming from the Book constructor
let myLibrary = [];

// a constructor object which constructs Book objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }
};

// form elements turned into variables

    const enteredTitle = document.getElementById('book-title');
    const enteredAuthor = document.getElementById('book-author');
    const enteredPages = document.querySelector('#total-pages');
    let readStatus = '';
   

// reset function for form imputs

function reset() {
    enteredTitle.value = ''
    enteredAuthor.value = ''
    enteredPages.value = ''

}
    


// popup form variables and appearance 
const popUpFrom = document.querySelector('.form-popup')
const bookAddButton = document.querySelector("#book-add-btn");
const container = document.querySelector('.container')
const bookCard = document.querySelector('.book-card');

bookAddButton.addEventListener('click', () => {
    popUpFrom.style.display = "block"
    
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    popUpFrom.style.display = "none"
});


const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {

    readStatus = document.querySelector("input[name='read-status']:checked").value;

    
    let book = new Book (enteredTitle.value,  enteredAuthor.value,  enteredPages.value , readStatus); 

    myLibrary.push(book);

    reset();

    popUpFrom.style.display = 'none'

});


// a function that adds the user input to the Book constructor

function addBookToLibrary (){
    

}

// a function that loops through the myLibrary array and displays each book on the page.

// const bookOne = new Book('Kafka on the Shore', 'Haruki Murakami', 465, 'read');


