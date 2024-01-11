
jQuery(document).ready(function() {

  var interval=null;
  function show_loading_box(){
  jQuery(".demo").css("display","none");
  clearInterval(interval);
  }
  jQuery('document').ready(function(){
  interval = setInterval(show_loading_box,1000);
});

  // removed slider number
  jQuery('.bdt-dotnav li').attr('data-label','');

  // progress  bar section
  var progress_percentage = jQuery('.ebs-why-choose-right-section .elementor-progress-bar .elementor-progress-percentage');
  progress_percentage.each(function( index ) {
    jQuery(this).closest('.ebs-why-choose-right-section .elementor-progress-wrapper').after('<span class="ebs-pogress-percentage">' + jQuery(this).html() + '</span>' );
  })

});
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
jQuery('#return-to-top').click(function() {      // When arrow is clicked
  jQuery('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 1000);
});
jQuery(window).scroll(function(){
  if(jQuery(this).scrollTop() > 100){
    jQuery('.yoga-header-section').addClass('sticky')
  }
  else{
    jQuery('.yoga-header-section').removeClass('sticky')
  }
});

// jQuery(document).ready(function(){
//     jQuery("#formButton").click(function(){
//         jQuery(".cat-list").toggleClass('test');
//     });
// });
// jQuery(document).ready(function(){
//     jQuery("#formButton1").click(function(){
//         jQuery(".cat-list").toggleClass('test');
//     });
//     });
