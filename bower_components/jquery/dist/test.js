
// hover image fade opacity

$(document).ready(function() {
  $('.thumbnail img').hover(function() {
      $(this).stop().fadeTo("medium", 0.65);
      event.stopPropagation();
      event.preventDefault();
  }, function() {
      $(this).stop().fadeTo("medium", 1);
  });

});

// background-color on click

  $('.col-one').on('click', '.btn-primary', function(event){
    $('body').css({"background-color": "#337ab7"});
      event.stopPropagation();
      event.preventDefault();
  });

  $('.col-two').on('click', '.btn-success', function(event){
    $('body').css({"background-color": "#5cb85c"});
      event.stopPropagation();
      event.preventDefault();
  });

  $('.col-three').on('click', '.btn-info', function(event){
    $('body').css({"background-color": "#5bc0de"});
      event.stopPropagation();
      event.preventDefault();
  });

  $('.col-four').on('click', '.btn-warning', function(event){
    $('body').css({"background-color": "#f0ad4e"});
      event.stopPropagation();
      event.preventDefault();
  });
  
// toggle text
  $('.caption-one, .caption-two, .caption-three, .caption-four').on('click', '.btn-default',function() {
    $(this).closest('.caption-one, .caption-two, .caption-three, .caption-four').children('.feature-one, .feature-two, .feature-three, .feature-four').slideToggle('Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
      event.stopPropagation();
      event.preventDefault();
});
















