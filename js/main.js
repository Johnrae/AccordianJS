(function(){
  $('h2').click(function(){
    $(this).parents().siblings().addClass('hidden');
    $(this).parents('section').removeClass('hidden');
  })
}());