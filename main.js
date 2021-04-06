console.log("This is working");

/* // todos // 
1. Store all the data in local storage.
2. Give another column as an option to delete the book
3. Add a scroll bar to the view
*/

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype

Display.prototype.add = function (book) {
    //console.log("Adding to ui");

    let tableBody = document.getElementById('tableBody');

    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`

    tableBody.innerHTML += uiString;
}

// implemenet the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// implemenet the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
                            <strong>Message: </strong>${displayMessage}
                        </div>`;

    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}




// Add submit event listner to Library Form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", function (e) {
    console.log("You have submitted");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'You book successfully added');
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }


    e.preventDefault();
})