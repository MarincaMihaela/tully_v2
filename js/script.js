$(document).ready(function() {
  $('#menu button.navbar-toggler').click(function () {
    $('body').toggleClass('active-menu');
  });

  buildMap();
});


var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "https://maps.google.com/maps/api/staticmap?center=55.7402023,12.5341835&zoom=13&markers=55.7402023,12.5341835&size=640x320&sensor=true";
var embed = '<iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.934015192174!2d23.61998111560151!3d46.766197079137854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c4733c71bbf%3A0x20f659e0db0c5ff9!2sAleea+B%C4%83i%C8%9Ba%2C+Cluj-Napoca+400000!5e0!3m2!1sen!2sro!4v1531150195697" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';


function buildMap() {
if(sw > bp) { //If Large Screen
  if($('.map-container').length < 1) { //If map doesn't already exist
    buildEmbed();
  }
} else {
  if($('.static-img').length < 1) { //If static image doesn't exist
    buildStatic();
  }
}
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};

function buildStatic() { //Build static map
    var mapLink = $('.map-link').attr('href'),
      $img = $('<img class="static-img" />').attr('src',static);
    $('<a/>').attr('href',mapLink).html($img).prependTo($map);
}

$(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
});


