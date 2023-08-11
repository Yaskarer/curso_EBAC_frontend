$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#nomeTarefa').val();
        const adicionaTarefa = $(`<div><li>${nomeTarefa}</li></div>`);
        
        $(adicionaTarefa).appendTo('ul');
        
        
        $('ul').on('click','li',function(){
            $(this).addClass("concluido");
        })

        $('#nomeTarefa').val('');
    })
});