$(function(){
  /* navi */
 
   $("nav > ul > li").mouseover(function(){
         $(this).children(".submenu").stop().slideDown();
   }).mouseout(function(){
         $(this).children(".submenu").stop().slideUp();
   });
  

/* modal */

$(".partner img").click(function(){
	$(".overlay").fadeIn();
});

$(".close").click(function(){
	$(".overlay").fadeOut();
});

$(".iconWrap").hover(function(){
     $(this).css({ background:"rgba(255,255,255,0.5)", transition:"background 0.5s ease"})
}, function(){ $(this).css({background:"transparent"});

});


$("nav > ul > li:last-child").click(function(){
   window.open("contact.html", "blank","width=500, height=300")
});

}); // ready function


/* slide */
setInterval("slide()", 2000);

function slide(){
  $(".slide").animate({marginLeft:"-=1000"}, function(){
  	$(".slide li:first").appendTo(".slide");
  	$(".slide").css("marginLeft", 0);
  });
} 
