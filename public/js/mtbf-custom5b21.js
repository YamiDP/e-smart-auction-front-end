/*
 Project name:       MODELTHEME
 Project author:     ModelTheme
 File name:          Custom JS
*/
(function ($) {
    'use strict';
	jQuery(function() {
		var mq = window.matchMedia( "(min-width: 1200px)" );
		if(jQuery('.archive.tax-product_cat').find('#blackgriday-main-head').length !== 0) {
			/* sticky sidebar */
			if (mq.matches) {
			    var sidebar = new StickySidebar('#bf-sidebar', {
			        containerSelector: '.black-friday .subcategories-section',
			        innerWrapperSelector: '.black-friday .subcategories-section',
			        topSpacing: 0,
			        bottomSpacing: 0
			    });
		    }
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-subcategories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		}

		if(jQuery('.page-template-black-friday').find('#blackgriday-main-head').length !== 0) {
			/* sticky sidebar */
			if (mq.matches) {
			    var sidebar = new StickySidebar('#bf-sidebar', {
			        containerSelector: '.black-friday .subcategories-section',
			        innerWrapperSelector: '.black-friday .subcategories-section',
			        topSpacing: 0,
			        bottomSpacing: 0
			    });
		    }
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-subcategories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-categories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		}

		if(jQuery('.page-template-black-friday-template5').find('#blackgriday-main-head').length !== 0) {
			/* sticky sidebar */
			if (mq.matches) {
			    var sidebar = new StickySidebar('#bf-sidebar', {
			        containerSelector: '.black-friday .subcategories-section',
			        innerWrapperSelector: '.black-friday .subcategories-section',
			        topSpacing: 0,
			        bottomSpacing: 0
			    });
		    }
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-subcategories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-categories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		}

		if(jQuery('.page-template-black-friday-template4').find('#blackgriday-main-head').length !== 0) {
			/* sticky sidebar */
			if (mq.matches) {
			    var sidebar = new StickySidebar('#bf-sidebar', {
			        containerSelector: '.black-friday .side-subcateg',
			        innerWrapperSelector: '.black-friday .side-subcateg',
			        topSpacing: 0,
			        bottomSpacing: 0
			    });
		    }
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-subcategories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		    /* smooth transition anchors */
			jQuery(".black-friday ul.nav-categories li a").on('click', function(event) {
				if (this.hash !== "") {
				  event.preventDefault();
				  var hash = this.hash;
				  jQuery('html, body').animate({
				    scrollTop: jQuery(hash).offset().top
				  }, 800, function(){
				    window.location.hash = hash;
				  });
				} 
			});
		}

		if ( jQuery( ".woocommerce-categ" ).length ) {
            
            jQuery(".category-element a").click(function () {
                var attr = jQuery(this).attr("class");

                jQuery(".section-product-item").removeClass("active");
                jQuery(attr).addClass("active");

                jQuery('.category-element').removeClass("active");
                jQuery(this).parent('.category-element').addClass("active");

            });  

            jQuery('.section-product-item:first').addClass("active");
            jQuery('.category-element:first').addClass("active");

        }
		
		if ( jQuery( ".side-subcateg" ).length ) {
            jQuery('.subcategory-element:first').addClass("active");

            jQuery(".subcategory-element a").click(function () {

                jQuery('.subcategory-element').removeClass("active");
                jQuery(this).parent('.subcategory-element').addClass("active");

            }); 

        }

        jQuery(document).ready(function() {
                  jQuery(".popup-vimeo-video").magnificPopup({
                  	type:"iframe",
	              	disableOn: 700,
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});


                  jQuery(".popup-vimeo-youtube").magnificPopup({
                  	type:"iframe",
             		disableOn: 700,
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false});
                });

	});
} (jQuery) )