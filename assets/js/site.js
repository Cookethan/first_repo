$('#circle').hover(function() {
    $('p').html("We've changed the text"); 
   });

$('.square').click(function(){
    $(this).css('background-color', 'blue');
});

$('.square').hover(function(){
    $(this).css('width', '400px');
});