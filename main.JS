document.getElementById("form.number").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var numA = parseFloat(document.getElementById("campoA").value);
    var numB = parseFloat(document.getElementById("campoB").value);
    const messagemSucesso ='O número A é menor que número B .'
    const messagemErro ='O número A é maior que número B.'
    const avisoErro = containerMsgFail = document.querySelector('.fail-message')
    const avisoSucesso = containerMsgSucesso = document.querySelector('.success-message');

    if (numB > numA) {
        avisoSucesso
        avisoErro
        containerMsgSucesso.innerHTML=messagemSucesso;
        containerMsgSucesso.style.display = 'block';
        containerMsgFail.style.display = 'none';
    } else {
        avisoSucesso
        avisoErro 
        containerMsgFail.innerHTML=messagemErro;
        containerMsgFail.style.display = 'block';
        containerMsgSucesso.style.display = 'none';
    }
    
});


