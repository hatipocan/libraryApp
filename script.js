// an array that stores all the book objects comming from the Book constructor
let myLibrary = [];

// a constructor object which constructs Book objects
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            return (`${title} by ${author}, ${pages} pages, ${read}`);
        };
    }
};

// Book.prototype.changeReadStatus = () => {
//     if (this.read == 'read') {this.read = 'not read'}
//     else if (this.read == 'not read') { this.read = 'read'}

// }

// form elements turned into variables

    const enteredTitle = document.getElementById('book-title');
    const enteredAuthor = document.getElementById('book-author');
    const enteredPages = document.querySelector('#total-pages');
    let readStatus = '';
   

// reset function for form inputs

function reset() {
    enteredTitle.value = ''
    enteredAuthor.value = ''
    enteredPages.value = ''

}



// function that loops through the myLibrary array and adds the object to the book-card article as a table

let tableData = document.getElementById('tableData');

function deleteRowFunction(o, index) {
    
    let p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);

    myLibrary.splice(index, 1);

    
   }

function changeReadStatus () {
    if (myLibrary[i].read == 'read') { return 'not read'}
    else if (myLibrary[i].read == 'not read') { return  'read'}
}


function myLibraryToTable () {
    let k = '<tbody>'
    
        for(i = 0;i < myLibrary.length; i++){
            k+= `<tr class="table-row">`;
            k+= '<td>' + myLibrary[i].title + '</td>';
            k+= '<td>' + myLibrary[i].author + '</td>';
            k+= '<td>' + myLibrary[i].pages + '</td>';
            k+= '<td>' + `<select name="readStatus"><option value="read1">${myLibrary[i].read}</option><option value="read2">${changeReadStatus()}</option></select>` + '</td>';
            k+= '<td>' + `<input type="button" value="Delete Row" class="index-${i}" onclick="deleteRowFunction(this, ${i})">  ` + '</td>';
            k+= '</tr>';
        
           
            
        }
        k+='</tbody>';
        tableData.innerHTML = k;
    
    };
    



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

    myLibraryToTable();


    reset();

    popUpFrom.style.display = 'none'

});





