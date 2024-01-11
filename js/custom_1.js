jQuery(document).ready(function() {
  console.log(url_custom_script);
  var geturl = url_custom_script.get_posturl;
  var get_open_url = url_custom_script.get_open_url;
  var get_bg_color = url_custom_script.get_bg_color;
  var icon_color = url_custom_script.icon_color;
  var posttext = url_custom_script.posttext;

  console.log(geturl , get_open_url);
    if (geturl === '') {
    console.log('value is empty');
  }else {
    if (get_open_url == 'on') {
      jQuery("body").append('<div class="url-button"><div class="shopping-icon"><i class="fa-solid fa-cart-shopping" style="color: ' + icon_color + '"></i></div><button class="custon_url_button" onclick="window.open(\'' + geturl + '\', \'_blank\')">'+ posttext +'</button></div>');
      jQuery(".custon_url_button").css({
        'background': get_bg_color,
        'color': icon_color,
        'right': 0
      });
      jQuery(".shopping-icon svg, .shopping-icon i").css({
        'background': get_bg_color,
      });
    }else {
      jQuery("body").append('<div class="url-button"><div class="shopping-icon"><i class="fa-solid fa-cart-shopping" style="color: ' + icon_color + '"></i></div><button class="custon_url_button" onclick="window.open(\'' + geturl + '\', \'_self\')">'+posttext+'</button></div>');
      jQuery(".custon_url_button").css({
        'background': get_bg_color,
        'color': icon_color,
        'right': 0
      });
      jQuery(".shopping-icon svg, .shopping-icon i").css({
        'background': get_bg_color,
      });
    }
  }
});
