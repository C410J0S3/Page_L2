//HEADER

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200){
            $(".header").css({"opacity" : "0"})
        }
        else{
            $(".header").css({"opacity" : "1"})
        }
    })
})

// VIDEO

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600){
            $(".valakas").css({"min-width" : "150rem", "height" : "cover"})
        }
        else{
            $(".valakas").css({"width" : "30%", "height" : "cover"})
        }
    })
})


//RESPONSIVE CHECKBOX

var checkbox = $('#hamburg');

$('body').not('.check_Menu').click(function() {
  checkbox.prop("checked", false);
});

$('#hamburg, .check_Menu').click(function(event) {
  event.stopPropagation();

});

//LOGUIN CHECKBOX

var checkbox_loguin = $('#loguin');

$('body').not('.check_loguin').click(function() {
  checkbox.prop("checked", false);
});

$('#loguin .check_loguin').click(function(event) {
  event.stopPropagation();

});

