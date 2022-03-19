$(document).ready(function(){
    $('#textCaja').change(function(){
        let valor = $('#textCaja').val();
        parseInt(valor) % 2 === 0 ? $('#Answer').text('Es par') : $('#Answer').text('Es impar');
    })
});