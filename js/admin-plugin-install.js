(function($) {

  window.addEventListener( 'load', function() {

    if ( location.href.indexOf("fcgp-ocdi-installed=true") >= 0 ) {

      if ( jQuery( '.ebp-wrap a[href*="plugins.php"]' ).length ) {
        // window.history.back();
        // location.href = ive_notice_params.admin_url + 'themes.php';
        // jQuery( '.ebp-wrap a[href*="plugins.php"]' ).click();
        location.href = jQuery( '.ebp-wrap a[href*="plugins.php"]' ).attr('href');
      } else {
        // Select the node that will be observed for mutations
        const targetNode = document.querySelector( '.ebp-wrap' );
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        // Callback function to execute when mutations are observed
        const callback = function( mutationsList, observer ) {

          // Use traditional 'for loops' for IE 11
          for( const mutation of mutationsList ) {
            if ( mutation.type === 'childList' ) {
            } else if ( mutation.type === 'attributes' ) {
            }
            if ( jQuery( '.ebp-wrap a[href*="plugins.php"]' ).length ) {
              // window.history.back();
              // location.href = ive_notice_params.admin_url + 'themes.php';
              // jQuery( '.ebp-wrap a[href*="plugins.php"]' ).click();
              location.href = jQuery( '.ebp-wrap a[href*="plugins.php"]' ).attr('href');
            }
          }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
        // Later, you can stop observing
        // observer.disconnect();
      }

    }


  }, false);
})( jQuery );
