let book_section = document.getElementsByClassName('book-section')[0];

let book1 = {
    bookName: "Taleh Qushdur",
    bookWriter: "Vidadbgjhbi Ali",
    bookCover: "image/webCover1.jpeg",
    bookPhrase: "Orxan Götdü"
},
    book2 = {
        bookName: "Saleh Qushdur",
        bookWriter: "Vidadi Ali",
        bookCover: "image/webCover1.jpeg",
        bookPhrase: "Orxan Götdü"
    },
    book3 = {
        bookName: "Qismet Qushdur",
        bookWriter: "Vidadi Ali",
        bookCover: "image/webCover1.jpeg",
        bookPhrase: "Orxan Götdü"
    },
    book4 = {
        bookName: "Orxan Qushdur",
        bookWriter: "Vidadi Ali",
        bookCover: "image/webCover1.jpeg",
        bookPhrase: "Orxan Götdü"
    };

let listOfBook = [book1, book2, book3, book4];

for (let i = 0; i < listOfBook.length; i++) {
    const book_s_child = document.createElement('div');
    const book_cover = document.createElement('img');
    book_cover.setAttribute('src', listOfBook[i].bookCover);
    const book_name = document.createElement('h2');
    book_name.textContent = listOfBook[i].bookName;
    const book_writer = document.createElement('h4');
    book_writer.textContent = listOfBook[i].bookWriter;
    const icon_div = document.createElement('div');
    icon_div.className = "icon-div";
    const icon_div_c1 = document.createElement('i');
    icon_div_c1.className = "bx bx-chevron-down";
    const icon_div_c2 = document.createElement('i');
    icon_div_c2.className = "bx bx-chevron-up";
    icon_div.appendChild(icon_div_c1);
    icon_div.appendChild(icon_div_c2);
    const book_phrase = document.createElement('p');
    book_phrase.textContent = listOfBook[i].bookPhrase;

    book_s_child.appendChild(book_cover);
    book_s_child.appendChild(book_name);
    book_s_child.appendChild(book_writer);
    book_s_child.appendChild(icon_div);
    book_s_child.appendChild(book_phrase);


    book_section.appendChild(book_s_child);
}


let count1 = 0, search_div = document.getElementsByClassName('search-div')[0], book_s_child1;

search_icon.onclick = function () {

    search_div.innerHTML="";

    listOfBook.forEach(function (filmofname) {
        if (filmofname.bookName.toLocaleUpperCase().includes(search_input.value.toLocaleUpperCase())) {
            document.getElementsByClassName('search-div-1')[0].style.top = "2.5rem";
            document.getElementsByClassName('search-div-1')[0].style.paddingTop = "30px";
            book_s_child1 = document.createElement('div');
            const book_cover = document.createElement('img');
            book_cover.setAttribute('src', listOfBook[listOfBook.indexOf(filmofname)].bookCover);
            const book_name = document.createElement('h2');
            book_name.textContent = listOfBook[listOfBook.indexOf(filmofname)].bookName;
            const book_writer = document.createElement('h4');
            book_writer.textContent = listOfBook[listOfBook.indexOf(filmofname)].bookWriter;
            const book_phrase = document.createElement('p');
            book_phrase.textContent = listOfBook[listOfBook.indexOf(filmofname)].bookPhrase;

            book_s_child1.appendChild(book_cover);
            book_s_child1.appendChild(book_name);
            book_s_child1.appendChild(book_writer);
            book_s_child1.appendChild(book_phrase);


            search_div.appendChild(book_s_child1);
            count1=0;
        }
        else {
            count1++;
        }
    });

    if (count1 >= listOfBook.length) {
        alert(count1+"Kitab tapılmadı. Başqa bir ad yoxlayın");
    }

}

search_close.onclick = function () {
    search_div.innerHTML="";
    document.getElementsByClassName('search-div-1')[0].style.top = "0rem";
    document.getElementsByClassName('search-div-1')[0].style.paddingTop = "0px";
}

let icon_div_js = document.getElementsByClassName('book-section')[0];

icon_div_js.onclick = function (e) {
    if (e.target.className === "bx bx-chevron-down") {
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
        e.target.parentElement.nextElementSibling.style.display = "block";
    }

    if (e.target.className === "bx bx-chevron-up") {
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "block";
        e.target.parentElement.nextElementSibling.style.display = "none";
    }
}
