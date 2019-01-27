$(document).ready(function() {
// Transition effect for navbar 
  
  $(window).scroll(function() {
    if($(this).width() > 767) {
      if($(this).scrollTop() > 170) { 
          $('.navbar').addClass('stick');
      } else {
          $('.navbar').removeClass('stick');
      }
    } else {
      $('.navbar').addClass('stick');
    }
  });
  //triangle under navbar items
  var array = ['1', '2', '3', '4', '5'],
      width = $(window).width();
  
    array.forEach(function(x) {
        $('.nav' + x).hover(
        function() {
          $('.arrow' + x).addClass('arrow-down');
        },
        function() {
          $('.arrow' + x).removeClass('arrow-down');
        });  
    });
  
  //slide in and out effect
  (function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
 })(jQuery);
  
 var win = $(window),
     allMods = $("#contact, .col2, .col1, #bio, #skill, .fa");

allMods.each(function(i, elem) {
  var el = $(elem),
      body = $(window),
      offset = el.offset();
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } else if (offset.top < body.scrollTop()) {
    el.addClass("already-visible");
  }
});
  
  //if in view, add class come-in
 win.scroll(function(event) {
  
  $("#contact, .col2").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-right"); 
    } 
  });
   
  $(".col1").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-left"); 
    } 
  });
   
  $("#bio, #skill").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-bottom"); 
    } 
  });
  
  $(".fa").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-bounce");
    } 
  });
   
}); 
  
});
