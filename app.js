// good luck !

/*##1ere étape
Les boutons doivent avoir leur fond de la couleur qui se trouvve dans le
data attribute data - color

## 2e étape
Un click sur le bouton doit mettre cette couleur en fond

## 3e étape
quand la
case# modify - texte est cochée, la couleur du texte
doit etre modifiée*/
$(document).ready(function () {


    $('input').each(function(index, element){
        $(element).css("background-color", $(this).attr("data-color"))
    })


    $('input').click(function(){

        var color = $(this).attr("data-color");

    if ($('#modify-texte').prop('checked')){
        $('.main').css("color", color);
    } else {
        $('body').css("background-color", color);
    }

    });


    
});