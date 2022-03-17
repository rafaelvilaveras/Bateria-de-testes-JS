const btns = document.querySelectorAll(".drum").length

for (let i = 0; i < btns; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {

        var valor = this.textContent
        caseTemplate(valor);
    })

}

document.addEventListener("keydown", function(event){

    caseTemplate(event.key);

})


