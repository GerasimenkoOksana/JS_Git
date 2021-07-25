window.onload = () => {
    class Book{
        id; 
        name;
        author;
        year;
        publisher;
        pages;
        count;
        get id(){return this.id;}
        get name(){return this.name}
        get author(){return this.author}
        get year(){return this.year}
        get publisher(){return this.publisher}
        get pages(){return this.pages}
        get count(){return this.count}
        constructor(id, name, author, year, publisher, pages,count){
            this.id = id;
            this.name = name;
            this.author = author;
            this.year = year;
            this.publisher = publisher;
            this.pages = pages;
            this.count = count;
        }
    } 
    
    function getNewID(books){ 
        if (books.length == 0) return 1;
        let maxId = books[0].id;
        for (let elem of books) 
            if (elem.id>maxId) maxId=elem.id;
        return maxId+1;           
    }
    function sortByName(books){ 
        books.sort((a,b) => a.name > b.name ? 1: -1);
    }
    function sortByID(books){ 
        books.sort((a,b) => a.id > b.id ? 1: -1);
    }   
    function sortByAuthor(books){ 
        books.sort((a,b) => a.author > b.author ? 1: -1);
    }
    function sortByPublisher(books){ 
        books.sort((a,b) => a.publisher > b.publisher ? 1: -1);
    }
    function sortByYear(books){ 
        books.sort((a,b) => a.year > b.year ? 1: -1);
    }
    function sortByPages(books){ 
        books.sort((a,b) => a.pages > b.pages ? 1: -1);
    }
    function sortByCount(books){ 
        books.sort((a,b) => a.count > b.count ? 1: -1);
    }
    //  let books = [
    //      new Book (1, 'Чистый код', 'Мартин Роберт', 2014,'Генеза', 380, 1 ),
    //     new Book (2, 'Эффективное программирование', 'Блох Джошуа', 2020,'Seuil', 267, 2 ),
    //     new Book (3, 'Изучаем Java', 'Бейтс Берт', 2018,'Эксмо', 420, 3 ),
    //      new Book (4, 'Совершенный код', 'Макконнелл Стив', 2014,'Эксмо', 380, 1 ),
    //      new Book (5, 'Язык программирования С', 'Ритчи Деннис', 2016,'Феникс', 376, 2 ),
    //      new Book (8, 'Гордость и предубеждение', 'Джейн Остен', 2002,'Flammarion', 452, 4 ),
    //      new Book (6, 'Мы', 'Замятин Евгений', 2014,'Генеза', 294, 3 ),
    //     new Book (7, 'Горе от ума', 'Грибоедов А.', 2004,'Эксмо', 268, 2 ),
    //     new Book (9, 'Великий Гэтсби', 'Фицджеральд Фрэнсис Скотт', 2007,'Феникс', 512, 2 ),
    //      new Book (10, 'Грозовой перевал', 'Бронте Эмили', 2010,'Эксмо', 448, 2 ),
    //   ];
    // localStorage.setItem("books", JSON.stringify(books));
   let books = JSON.parse(localStorage.getItem('books'));

   function printBooks(books){   
    let tableBooks = document.querySelector('.tableBooks');
    if (tableBooks) tableBooks.remove();
    let table = document.createElement('table'); 
    let tr = table.insertRow(0);
    tr.className = "tableHeader";
    let th1 = tr.insertCell(0);
    th1.innerHTML = 'ID';
    let th2 = tr.insertCell(1);
    th2.innerHTML = 'Name';
    let th3 = tr.insertCell(2);
    th3.innerHTML = 'Author';
    let th4 = tr.insertCell(3);
    th4.innerHTML = 'Year';
    let th5 = tr.insertCell(4);
    th5.innerHTML = 'Publisher';
    let th6 = tr.insertCell(5);
    th6.innerHTML = 'Pages';
    let th7 = tr.insertCell(6);
    th7.innerHTML = 'Count';
    let th8 = tr.insertCell(7);
    th8.innerHTML = 'Delete';
    for (let r = 0; r <books.length; r++) 
    {
        let tr = table.insertRow(r+1);
        let td1 = tr.insertCell(0);
        td1.innerHTML = books[r].id;
        let td2 = tr.insertCell(1);
        td2.innerHTML = books[r].name;
        let td3 = tr.insertCell(2);
        td3.innerHTML = books[r].author;
        let td4 = tr.insertCell(3);
        td4.innerHTML = books[r].year;
        let td5 = tr.insertCell(4);        
        td5.innerHTML = books[r].publisher;
        let td6 = tr.insertCell(5);
        td6.innerHTML = books[r].pages;
        td6.className = 'tdNumber'; 
        let td7 = tr.insertCell(6);
        td7.innerHTML = books[r].count; 
        td7.className = 'tdNumber'; 
        let td8 = tr.insertCell(7);
        td8.innerHTML = 'x'; 
        td8.className = 'tdDel';
        td8.id = books[r].id;
    }
    table.className = "tableBooks";
   let main = document.querySelector('.main');
   document.body.append(table);
   }
   
   printBooks(books);

   let btnAddBook = document.querySelector('.btnAddBook');
   btnAddBook.addEventListener('click', addBook);
  
   function addBook(){   
        let modal = document.querySelector('.modal');
        modal.classList.add("modal_active");
        let btnModalCancel = document.querySelector('.btnModalCancel');
        btnModalCancel.addEventListener('click', () =>{modal.classList.remove('modal_active') });
        let btnModalAdd = document.querySelector('.btnModalAdd');
        btnModalAdd.addEventListener('click', () =>{
            if (!document.querySelector('.inputAuthor').validity.valid ||
                !document.querySelector('.inputName').validity.valid ||
                !document.querySelector('.inputPub').validity.valid ||
                !document.querySelector('.inputYear').validity.valid ||
                !document.querySelector('.inputPages').validity.valid ||
                !document.querySelector('.inputCount').validity.valid )
                {
                    alert('Enter correct data');
                     return;
                }

            let author = document.querySelector('.inputAuthor').value;
            let name = document.querySelector('.inputName').value;
            let publisher = document.querySelector('.inputPub').value;
            let year = document.querySelector('.inputYear').value;
            let pages = document.querySelector('.inputPages').value;
            let count = document.querySelector('.inputCount').value;
            let book = new Book (getNewID(books),name, author, year, publisher, pages, count);
            books.push(book);
            document.querySelector('.inputAuthor').value = "";
            document.querySelector('.inputName').value = "";
            document.querySelector('.inputPub').value = "";
            document.querySelector('.inputYear').value = "";
            document.querySelector('.inputPages').value = "";
            document.querySelector('.inputCount').value = "";
            localStorage.setItem("books", JSON.stringify(books));
            printBooks(books);
            modal.classList.remove('modal_active');
            location.reload();
        })
 
   }

   let btnSort = document.querySelector('.btnSort');
   btnSort.addEventListener('click', sort);
   function sort(){
        let sortby = document.querySelector('.sortby').value;
       switch (sortby) {
           case 'ID': sortByID(books); break;
           case 'Name': sortByName(books); break;
           case 'Author': sortByAuthor(books); break;
           case 'Year' : sortByYear(books); break;
           case 'Publisher' : sortByPublisher(books); break;
           case 'Pages' : sortByPages(books); break;
           case 'Count' : sortByCount(books); break;
       }       
       printBooks(books);
    }
    let btnSearch = document.querySelector('.btnSearch');
    btnSearch.addEventListener('click', search);
    function search(){
        let searchby = document.querySelector('.search').value;
        if (searchby == "")  {
            printBooks(books);
            return;
        }
        let booksSearch = books.filter(book => (book.name.indexOf(searchby)>-1 || book.author.indexOf(searchby)>-1 || book.publisher.indexOf(searchby)>-1));
        localStorage.setItem("booksSearch", JSON.stringify(booksSearch));
        printBooks(JSON.parse(localStorage.getItem('booksSearch')));
        
    }
    
    let tableBooks = document.querySelector('.tableBooks');
    tableBooks.addEventListener('click', (event)=>{
        if (event.target.className != 'tdDel') return;
        let delID = +event.target.id;
        let del = confirm('Are you  sure you want to delete book id='+delID+'?');
        if (del){
            books = books.filter(book => book.id != delID);
            localStorage.setItem("books", JSON.stringify(books));
            printBooks(books);
            location.reload();
        }
    })
}