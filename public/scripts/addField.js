//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botão

//executar uma ação
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })
    //colocar na pagina
    document.querySelector("#schedule-items").append(newFieldContainer)
}


