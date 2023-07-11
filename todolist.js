const formDOM = document.querySelector("#userform");
formDOM.addEventListener("submit", todolist);

let counter = 0;

function todolist(event) {
    event.preventDefault();
    const ulDOM = document.querySelector("#userlist");
    const inputDOM = document.querySelector("#userinput");
    const alertDOM = document.querySelector("#alert");
    const deleteDOM = document.querySelector("#listdelete")

    const inputValue = inputDOM.value.trim(); 
    // bir kaç boşluk ile ekleme yapılırsa trim bu işlemi saymaz else kısmı alert çalışır

    if(inputValue) {

        const liDOM = document.createElement("li");
        liDOM.innerHTML = `
        ${inputValue}
        `;
        liDOM.classList.add("list-group-item", "height_list");


        const delDOM = document.createElement("li");
        delDOM.innerHTML = `
        <i class="fa-solid fa-circle-xmark fa-lg"></i>
        `;
        delDOM.classList.add("li_del");


        if (counter % 2 == 0) {
            liDOM.style.backgroundColor = "#D8D8D8";
        } 
        else {
            liDOM.style.backgroundColor = "white";
        }

        ulDOM.append(liDOM); 
        deleteDOM.append(delDOM)


        inputDOM.value = "";
        counter++;


/*      
        li mouseover yapınca renk değiştirme işlemi tam yapılamadı
        liDOM.addEventListener("mouseover", function() {
            console.log("calisiyor")
            liDOM.style.backgroundColor == "white" ? liDOM.style.backgroundColor = "wheat" : liDOM.style.backgroundColor = "white";
        });
*/
        
        liDOM.addEventListener("click", function() {
            liDOM.classList.add("del_line")
            liDOM.style.backgroundColor = "rgb(255, 213, 135)"
            liDOM.innerHTML = 
            `
            ${inputValue}
            <i style="text-decoration: none;" class="fa-solid fa-check ms-3"></i>
            `
        });

        
        liClick(liDOM ,delDOM);

        alertDOM.innerHTML = 
        `<div style="width: 35rem; margin-left: 26rem"; class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Liste Eklendi!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
    else {
        console.log("Giris Yapilmadi")
        alertDOM.innerHTML = 
        `<div style="width: 35rem; margin-left: 26rem"; class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Hatali Giris!</strong> Tekrardan Giris Yapmayi Denemelisin.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
}



function liClick(liDOM, delDOM) {
    delDOM.addEventListener("click", function() {
        liDOM.parentNode.removeChild(liDOM);
        delDOM.parentNode.removeChild(delDOM);
    });
}
