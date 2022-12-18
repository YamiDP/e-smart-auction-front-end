(function($){'use strict';$(document).ready(function(){function ibid_monthly_yearly_service_tables(){jQuery(".cd-services-switcher .monthly-label").on("click",function(){jQuery(".cd-services-switcher .yearly-label").removeClass('active');jQuery(this).addClass('active');jQuery('.package_price_per_year-parent').hide();jQuery('.package_price_per_month-parent').show();});jQuery(".cd-services-switcher .yearly-label").on("click",function(){jQuery(".cd-services-switcher .monthly-label").removeClass('active');jQuery(this).addClass('active');jQuery('.package_price_per_month-parent').hide();jQuery('.package_price_per_year-parent').show();});}
ibid_monthly_yearly_service_tables();if(jQuery("form .cd-filter-block").length==0){jQuery("form .cd-filter-block").bind("keypress",function(e){if(e.keyCode==13){return false;}});}
if(jQuery('.variations select').length==0||jQuery('.ibid-header-searchform select').length==0||jQuery('.widget_archive select').length==0||jQuery('.widget_categories select').length==0||jQuery('.widget_text select').length==0||jQuery('.woocommerce-ordering select').length==0){jQuery('.variations select, .ibid-header-searchform select, .widget_archive select, .widget_categories select, .widget_text select, .woocommerce-ordering select').niceSelect();}
jQuery('.ibid-shop-filters-button').on("click",function(event){event.preventDefault();jQuery('.ibid-shop-sidebar').toggleClass('is-active');});jQuery('.ibid-shop-sidebar-close-btn').on("click",function(event){event.preventDefault();jQuery('.ibid-shop-sidebar').removeClass('is-active');});jQuery('.ibid-header-searchform input#keyword').on('blur',function(){jQuery('.data_fetch').removeClass('focus');}).on('focus',function(){jQuery('.data_fetch').addClass('focus');});if(jQuery(".slider-moving").length){var scrollSpeed=60;var step=1;var current=0;var imageWidth=3473;var headerWidth=1170;var restartPosition=-(imageWidth-headerWidth);function scrollBg(){current+=step;if(current==restartPosition){current=0;}
jQuery('.slider-moving').css("background-position",current+"px 0");}
setInterval(scrollBg,scrollSpeed);}
jQuery('#register .show_if_seller input').each(function(){jQuery(this).prop('disabled',true);});jQuery('#register .user-role input[value="customer"]').click(function(){if(jQuery(this).is(':checked')){jQuery('#signup-modal-content .show_if_seller').hide();jQuery('#signup-modal-content .show_if_seller input').each(function(){jQuery(this).prop('disabled',true);});}});jQuery('#register .user-role input[value="seller"]').click(function(){if(jQuery(this).is(':checked')){jQuery('#register .show_if_seller').show(300);jQuery('#register .show_if_seller input').each(function(){jQuery(this).prop('disabled',false);});}});jQuery('#register .user-role input[value="customer"]').click(function(){if(jQuery(this).is(':checked')){jQuery('#register .show_if_seller').hide(300);}});jQuery('.ibid_datetime_picker').each(function(){jQuery(this).datetimepicker({format:'Y-m-d H:i',});});if(jQuery(".auction-checkbox .ibid_is_auction").length){if(jQuery('.auction-checkbox .ibid_is_auction').is(':checked')){jQuery(".dokan-form-group.dokan-price-container").hide();}else{jQuery(".dokan-form-group.dokan-price-container").show();}}
jQuery(function(){if(jQuery(".woocommerce-tabs .tabs.wc-tabs").length){jQuery(".woocommerce-tabs .tabs.wc-tabs > li > a").matchHeight({byRow:true});}
if(jQuery("body").hasClass("woocommerce-js")){jQuery('.products .product .woocommerce-title-metas').matchHeight({byRow:true});jQuery('.iconfilter-shortcode .product-wrapper').matchHeight({byRow:true});jQuery('.domain-list-shortcode .post').matchHeight({byRow:true});}});function ibid_dokan_vendor_yith_auction_conditional_fields(){jQuery(document).ready(function(){function ibid_yith_auction_bid_type_onoff(){if(jQuery('#_yith_auction_bid_type_onoff').is(':checked')){jQuery(".ibid-conditional-bid_type_set_radio").show();jQuery(".ibid-conditional-ywcact_automatic_product_bid_simple").show();}else{jQuery(".ibid-conditional-bid_type_set_radio").hide();jQuery(".ibid-conditional-bid_type_radio").hide();jQuery(".ibid-conditional-ywcact_automatic_product_bid_simple").hide();}
if(jQuery('#_yith_wcact_bid_type_set_radio').val()=='automatic'){jQuery(".ibid-conditional-bid_type_radio").show();jQuery(".ibid-conditional-ywcact_automatic_product_bid_simple").show();}else{jQuery(".ibid-conditional-bid_type_radio").hide();jQuery(".ibid-conditional-ywcact_automatic_product_bid_simple").hide();}
if(!jQuery('#_yith_auction_bid_type_onoff').is(':checked')&&jQuery('#_yith_wcact_bid_type_set_radio').val()=='automatic'){jQuery(".ibid-conditional-bid_type_radio").hide();}}
ibid_yith_auction_bid_type_onoff();jQuery('#_yith_auction_bid_type_onoff').on("click",function(){ibid_yith_auction_bid_type_onoff();});jQuery('#_yith_wcact_bid_type_set_radio').change(function($e){ibid_yith_auction_bid_type_onoff();});function ibid_yith_auction_fee_ask_onoff(){if(jQuery('#yith_auction_fee_onoff').is(':checked')){jQuery(".ibid-conditional-fee_ask_onoff").show();}else{jQuery(".ibid-conditional-fee_ask_onoff").hide();jQuery(".ibid-conditional-fee_amount").hide();}
if(jQuery('#yith_auction_fee_ask_onoff').is(':checked')){jQuery(".ibid-conditional-fee_amount").show();}else{jQuery(".ibid-conditional-fee_amount").hide();}
if(!jQuery('#yith_auction_fee_onoff').is(':checked')&&jQuery('#yith_auction_fee_ask_onoff').is(':checked')){jQuery(".ibid-conditional-fee_amount").hide();}}
ibid_yith_auction_fee_ask_onoff();jQuery('#yith_auction_fee_onoff, #yith_auction_fee_ask_onoff').on("click",function(){ibid_yith_auction_fee_ask_onoff();});function ibid_yith_auction_rescheduling_options(){if(jQuery('#_yith_auction_reschedule_onoff').is(':checked')){jQuery(".ibid-conditional-yith-reschedule_closed_without_bids_onoff").show();jQuery(".ibid-conditional-reschedule_reserve_no_reached_onoff").show();}else{jQuery(".ibid-conditional-yith-reschedule_closed_without_bids_onoff").hide();jQuery(".ibid-conditional-reschedule_reserve_no_reached_onoff").hide();}
if(jQuery('#_yith_auction_reschedule_closed_without_bids_onoff').is(':checked')&&jQuery('#_yith_auction_reschedule_reserve_no_reached_onoff').is(':checked')){jQuery(".ibid-conditional-yith-reschedule-timer").show();}else{jQuery(".ibid-conditional-yith-reschedule-timer").hide();}}
ibid_yith_auction_rescheduling_options();jQuery('#_yith_auction_reschedule_onoff, #_yith_auction_reschedule_closed_without_bids_onoff, #_yith_auction_reschedule_reserve_no_reached_onoff').on("click",function(){ibid_yith_auction_rescheduling_options();});function ibid_yith_auction_overtime_onoff(){if(jQuery('#_yith_auction_overtime_onoff').is(':checked')){jQuery(".ibid-conditional-set-overtime").show();}else{jQuery(".ibid-conditional-set-overtime").hide();jQuery(".ibid-conditional-override-settings").hide();}
if(jQuery('#_yith_auction_overtime_set_onoff').is(':checked')){jQuery(".ibid-conditional-override-settings").show();}else{jQuery(".ibid-conditional-override-settings").hide();}
if(!jQuery('#_yith_auction_overtime_onoff').is(':checked')&&jQuery('#_yith_auction_overtime_set_onoff').is(':checked')){jQuery(".ibid-conditional-override-settings").hide();}}
ibid_yith_auction_overtime_onoff();jQuery('#_yith_auction_overtime_onoff, #_yith_auction_overtime_set_onoff').on("click",function(){ibid_yith_auction_overtime_onoff();});});}
ibid_dokan_vendor_yith_auction_conditional_fields();function ibid_dokan_vendor_auctions_blue_box(){jQuery(document).ready(function(){if(jQuery('.auction-checkbox .ibid_is_auction').is(':checked')){jQuery(".ibid-auction-settings").show();jQuery(".dokan-form-group.dokan-price-container").hide();}});jQuery('.auction-checkbox .ibid_is_auction').on("click",function(){if(jQuery('.auction-checkbox .ibid_is_auction').is(':checked')){jQuery(".ibid-auction-settings").show();jQuery(".dokan-form-group.dokan-price-container").hide();}else{jQuery(".ibid-auction-settings").hide();jQuery(".dokan-form-group.dokan-price-container").show();}});}
ibid_dokan_vendor_auctions_blue_box();jQuery('#product_type').on('change',function(){var product_type_value=jQuery(this).val();if(product_type_value=='auction'){jQuery(".ibid-auction-settings").show();}else{jQuery(".ibid-auction-settings").hide();}});jQuery('input#_regular_price').change(function(){jQuery('p._regular_price_field input#_regular_price').val(jQuery(this).val());});jQuery("#modal-log-in #loginform").validate({rules:{log:{required:true,minlength:2},pwd:{required:true,}},messages:{log:{required:"Please enter your username",},pwd:{required:"Please enter your password",},},});jQuery("#contact_form").validate({rules:{user_name:{required:true,minlength:2},user_message:{required:true,minlength:10},user_subject:{required:true,minlength:5},user_email:{required:true,email:true}},messages:{user_name:{required:"Please enter a name",minlength:"Your name must consist of at least 2 characters"},user_message:{required:"Please enter a message",minlength:"Your message must consist of at least 10 characters"},user_subject:{required:"Please provide a subject",minlength:"Your subject must be at least 5 characters long"},user_email:"Please enter a valid email address"},submitHandler:function(){jQuery('#contact_form').ajaxSubmit();jQuery('.success_message').fadeIn('slow');}});if(jQuery(window).width()<768){var expand='<span class="expand"><a class="action-expand"></a></span>';jQuery('.navbar-collapse .menu-item-has-children, .navbar-collapse .mega_menu, .aside-navbar .menu-item-has-children,.aside-navbar .mega_menu, .aside-navbar .mega3menu').append(expand);jQuery('header #navbar .sub-menu').hide();jQuery('.aside-navbar .sub-menu').hide();jQuery(".menu-item-has-children .expand a").on("click",function(){jQuery(this).parent().parent().find(' > ul').toggle();jQuery(this).toggleClass("show-menu");});jQuery(".mega_menu .expand a").on("click",function(){jQuery(this).parent().parent().find(' > .cf-mega-menu').toggle();jQuery(this).toggleClass("show-menu");});jQuery(".mega3menu .expand a").on("click",function(){jQuery(this).parent().parent().find(' > .cf-mega-menu').toggle();jQuery(this).toggleClass("show-menu");});}
if(jQuery(window).width()<768){jQuery("#aside-menu").on('click',function(){jQuery(this).toggleClass('is-active');jQuery('.mt-header').toggleClass('aside-open');jQuery('body').toggleClass('burger-open');});jQuery('.mt-nav-content .mt-second-menu').hide();jQuery(".aside-tabs a:first-child").addClass('is-selected');jQuery(".aside-tabs a:first-child").on('click',function(){jQuery(".aside-tabs a:last-child").removeClass('is-selected');jQuery(this).addClass('is-selected');jQuery('.mt-nav-content .mt-first-menu').show();jQuery('.mt-nav-content .mt-second-menu').hide();});jQuery(".aside-tabs a:last-child").on('click',function(){jQuery(".aside-tabs a:first-child").removeClass('is-selected');jQuery(this).addClass('is-selected');jQuery('.mt-nav-content .mt-first-menu').hide();jQuery('.mt-nav-content .mt-second-menu').show();});jQuery(document).mouseup(function(e){var container=jQuery(".header-aside");if(!container.is(e.target)&&container.has(e.target).length===0)
{jQuery('.mt-header').removeClass('aside-open');jQuery('body').removeClass('burger-open');}});}
jQuery(function(){if(jQuery('body').hasClass('is_nav_sticky')){jQuery(window).resize(function(){if(jQuery(window).width()<=768){}else{jQuery("#ibid-main-head").sticky({topSpacing:0});}});if(jQuery(window).width()>=768){jQuery("#ibid-main-head").sticky({topSpacing:0});}}});(function(){[].slice.call(document.querySelectorAll(".mt-tabs .tabs")).forEach(function(el){new CBPFWTabs(el);});})();(function(){[].slice.call(document.querySelectorAll(".mt-multicateg .tabs")).forEach(function(el){new CBPFWTabs(el);});})();jQuery('.cart-contents').hover(function(){jQuery('.header_mini_cart').addClass('visible_cart');},function(){jQuery('.header_mini_cart').removeClass('visible_cart');});jQuery('.shop_cart').hover(function(){jQuery('.header_mini_cart').addClass('visible_cart');},function(){jQuery('.header_mini_cart').removeClass('visible_cart');});jQuery('.header_mini_cart').hover(function(){jQuery(this).addClass('visible_cart');},function(){jQuery(this).removeClass('visible_cart');});if(jQuery(".woocommerce_categories").length){jQuery(".category a").click(function(){var attr=jQuery(this).attr("class");jQuery(".products_by_category").removeClass("active");jQuery(attr).addClass("active");jQuery('.category').removeClass("active");jQuery(this).parent('.category').addClass("active");});jQuery('.products_category .products_by_category:first').addClass("active");jQuery('.categories_shortcode .category:first').addClass("active");}
if(jQuery("#ibid-search").length){new UISearch(document.getElementById('ibid-search'));}
jQuery(function($){if(!String.prototype.getDecimals){String.prototype.getDecimals=function(){var num=this,match=(''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!match){return 0;}
return Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0));}}
$(document.body).on('click','.plus, .minus',function(){if(jQuery('form.auction_form.cart').length){}else{var $qty=$(this).closest('.quantity').find('.qty'),currentVal=parseFloat($qty.val()),max=parseFloat($qty.attr('max')),min=parseFloat($qty.attr('min')),step=$qty.attr('step');if(!currentVal||currentVal===''||currentVal==='NaN')currentVal=0;if(max===''||max==='NaN')max='';if(min===''||min==='NaN')min=0;if(step==='any'||step===''||step===undefined||parseFloat(step)==='NaN')step=1;if($(this).is('.plus')){if(max&&(currentVal>=max)){$qty.val(max);}else{$qty.val((currentVal+parseFloat(step)).toFixed(step.getDecimals()));}}else{if(min&&(currentVal<=min)){$qty.val(min);}else if(currentVal>0){$qty.val((currentVal-parseFloat(step)).toFixed(step.getDecimals()));}}
$qty.trigger('change');}});});jQuery(".testimonials-container").owlCarousel({navigation:true,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,2],[1200,2],[1400,2],[1600,2]]});jQuery(".testimonials-container-1").owlCarousel({navigation:false,navigationText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,1],[700,1],[1000,1],[1200,1],[1400,1],[1600,1]]});jQuery(".testimonials-container-2").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,2],[1200,2],[1400,2],[1600,2]]});jQuery(".testimonials-container-3").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,itemsCustom:[[0,1],[450,1],[600,2],[700,2],[1000,3],[1200,3],[1400,3],[1600,3]]});jQuery(".categories_shortcode").owlCarousel({navigation:true,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,navigationText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],itemsCustom:[[0,1],[450,2],[600,2],[700,5],[1000,5],[1200,5],[1400,5],[1600,5]]});jQuery(".modeltheme_products_carousel").owlCarousel({navigation:true,pagination:false,autoPlay:true,slideSpeed:700,paginationSpeed:700,navigationText:["<i class='fas fa-angle-left' aria-hidden='true'></i>","<i class='fas fa-angle-right' aria-hidden='true'></i>"],itemsCustom:[[0,1],[450,2],[600,2],[700,4],[1000,4],[1200,4],[1400,4],[1600,4]]});jQuery(".portfolio_thumbnails_slider").owlCarousel({navigation:true,pagination:true,autoPlay:false,slideSpeed:700,paginationSpeed:700,navigationText:["",""],singleItem:true});jQuery(".post_thumbnails_slider").owlCarousel({navigation:false,pagination:false,autoPlay:false,slideSpeed:700,paginationSpeed:700,singleItem:true});var owl=jQuery(".post_thumbnails_slider");jQuery(".next").click(function(){owl.trigger('owl.next');})
jQuery(".prev").click(function(){owl.trigger('owl.prev');})
jQuery(".testimonials_slider").owlCarousel({navigation:false,pagination:true,autoPlay:false,slideSpeed:700,paginationSpeed:700,singleItem:true});jQuery('.animateIn').animateIn();var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=jQuery('.back-to-top');jQuery(window).scroll(function(){(jQuery(this).scrollTop()>offset)?$back_to_top.addClass('ibid-is-visible'):$back_to_top.removeClass('ibid-is-visible ibid-fade-out');if(jQuery(this).scrollTop()>offset_opacity){$back_to_top.addClass('ibid-fade-out');}});$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});jQuery(".single-project .project-tabs li a").on("click",function(e){e.preventDefault();const href=jQuery(this).attr("href");jQuery("html, body").animate({scrollTop:jQuery(href).offset().top},800);});jQuery(function(){if(jQuery('.ibid-breadcrumbs-b').hasClass('sticky-wrapper')){jQuery(window).resize(function(){if(jQuery(window).width()<=768){}else{jQuery(".ibid-breadcrumbs-b").sticky({topSpacing:0});}});if(jQuery(window).width()>=768){jQuery(".ibid-breadcrumbs-b").sticky({topSpacing:0});}}});jQuery('.statistics').appear(function(){jQuery('.percentage').each(function(){var dataperc=jQuery(this).attr('data-perc');jQuery(this).find('.skill-count').delay(6000).countTo({from:0,to:dataperc,speed:5000,refreshInterval:100});});});});var ModalEffects=(function(){function init_modal(){var overlay=document.querySelector('.modeltheme-overlay');var overlay_inner=document.querySelector('.modeltheme-overlay-inner');var modal_holder=document.querySelector('.modeltheme-modal-holder');var html=document.querySelector('html');[].slice.call(document.querySelectorAll('.modeltheme-trigger')).forEach(function(el,i){var modal=document.querySelector('#'+el.getAttribute('data-modal')),close=modal.querySelector('.modeltheme-close');function removeModal(hasPerspective){classie.remove(modal,'modeltheme-show');classie.remove(modal_holder,'modeltheme-show');classie.remove(html,'modal-open');if(hasPerspective){classie.remove(document.documentElement,'modeltheme-perspective');}}
function removeModalHandler(){removeModal(classie.has(el,'modeltheme-setperspective'));}
el.addEventListener('click',function(ev){classie.add(modal,'modeltheme-show');classie.add(modal_holder,'modeltheme-show');classie.add(html,'modal-open');overlay.removeEventListener('click',removeModalHandler);overlay.addEventListener('click',removeModalHandler);overlay_inner.removeEventListener('click',removeModalHandler);overlay_inner.addEventListener('click',removeModalHandler);if(classie.has(el,'modeltheme-setperspective')){setTimeout(function(){classie.add(document.documentElement,'modeltheme-perspective');},25);}});});}
if(!jQuery("body").hasClass("login-register-page")){init_modal();}})();jQuery("#dropdown-user-profile").on({mouseenter:function(){jQuery(this).addClass("open");},mouseleave:function(){if(jQuery(this).hasClass("open")){jQuery(this).removeClass("open");}}});jQuery("#member_hover").on("hover",function(e){if(jQuery(this).hasClass("open")){jQuery(this).removeClass("open");}else{jQuery(this).addClass("open");}});jQuery('.mt-search-icon').on("click",function(event){event.preventDefault();jQuery('.fixed-search-overlay').toggleClass('visible');});jQuery('.fixed-search-overlay .icon-close').on("click",function(){jQuery('.fixed-search-overlay').removeClass('visible');});jQuery(document).keyup(function(e){if(e.keyCode==27){jQuery('.fixed-search-overlay').removeClass('visible');jQuery('.fixed-sidebar-menu').removeClass('open');jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');}});jQuery('#DataTable-icondrops-active').dataTable({responsive:true,language:{searchPlaceholder:"Search "},});jQuery("#modal-log-in #register-modal").on("click",function(){jQuery("#login-modal-content").fadeOut("fast",function(){jQuery("#signup-modal-content").fadeIn(500);});});jQuery("#modal-log-in .btn-login-p").on("click",function(){jQuery("#signup-modal-content").fadeOut("fast",function(){jQuery("#login-modal-content").fadeIn(500);});});jQuery("#login-content-shortcode .btn-register-shortcode").on("click",function(){jQuery("#login-content-shortcode").fadeOut("fast",function(){jQuery("#register-content-shortcode").fadeIn(500);});});jQuery('#nav-menu-login').on("click",function(){jQuery(".modeltheme-show ~ .modeltheme-overlay, .modeltheme-show .modeltheme-overlay-inner").on("click",function(){jQuery("#signup-modal-content").fadeOut("fast");jQuery("#login-modal-content").fadeIn(500);});});var baseUrl=document.location.origin;if($(window).width()<768){jQuery("#dropdown-user-profile").on("click",function(){window.location.href=(baseUrl+'/my-account');});}
jQuery('#product-type').change(function(){if(jQuery(this).val()=="auction"){jQuery('.advanced_options').show();}else{jQuery('.advanced_options').hide();}});if(jQuery('#yith-wcwl-popup-message').length==0){var message_div=jQuery('<div>').attr('id','yith-wcwl-message'),popup_div=jQuery('<div>').attr('id','yith-wcwl-popup-message').html(message_div).hide();jQuery('body').prepend(popup_div);}
(function($){var openBtn=$('#navbar .bot_cat_button'),slideMenu=$('#navbar .bot_nav_cat_wrap'),headerBotClass=$('#navbar');if(jQuery(window).width()>1024){if(slideMenu.hasClass("cat_open_default")){openBtn.addClass("active");slideMenu.addClass("active");slideMenu.slideDown(300);}}else{slideMenu.slideUp(0);openBtn.removeClass("active");slideMenu.removeClass("active");}
openBtn.on("click",function(){if(slideMenu.is(':hidden')){slideMenu.slideDown(300);openBtn.addClass("active");openBtn.removeClass("close");}else{slideMenu.slideUp(300);openBtn.removeClass("active");openBtn.addClass("close");slideMenu.removeClass("active");}});})(jQuery);}(jQuery));(function($){$(document).ready(function(){MTPopups.init();});var MTPopups={init:function(){var $popup=$(".popup");if($popup.length){$(function(){jQuery('#exit-popup').click(function(e){jQuery('.popup').fadeOut(1000);jQuery('.popup').removeClass("modeltheme-show");});var expireDate=jQuery('.popup').attr('data-expire');var timeShow=jQuery('.popup').attr('show');var visits=jQuery.cookie('visits')||0;visits++;if(expireDate=1){jQuery.cookie('visits',visits,{expires:1,path:'/'});}else if(expireDate=3){jQuery.cookie('visits',visits,{expires:3,path:'/'});}else if(expireDate=7){jQuery.cookie('visits',visits,{expires:7,path:'/'});}else if(expireDate=30){jQuery.cookie('visits',visits,{expires:30,path:'/'});}else{jQuery.cookie('visits',visits,{expires:3000,path:'/'});}
if(jQuery.cookie('visits')>1){jQuery('.popup').removeClass("modeltheme-show");jQuery.cookie();}else{jQuery(function(){setTimeout(function(){showElement();},timeShow);function showElement(){jQuery('.popup').addClass("modeltheme-show");}});}});}}};})(jQuery);(function($){$(document).ready(function(){MTAuctionCountdown.init();});$(document).on('awf_ajax_filter',function(){$('.countdownv2_holder .countdownv2 ').countdown('destroy');});$(document).on('awf_after_ajax_products_update',function(){MTAuctionCountdown.init();});var MTAuctionCountdown={init:function(){var countdown_holders=$('.countdownv2_holder');if(countdown_holders.length){countdown_holders.each(function(i){var inlineDate_end=$(this).attr('data-insert-date'),inlineDate_start=$(this).attr('data-insert-date-start'),uniqueID=$(this).attr('data-unique-id'),dateFormatRedux=$(this).attr('data-date-format-redux'),countdownDirection=$(this).attr('data-countdown-direction'),gmt_offset=$(this).attr('data-gmt-offset'),siteLanguage=$('html').attr('lang').toLowerCase();if(inlineDate_start!=''){var datetime=inlineDate_start;}else{var datetime=inlineDate_end;}
datetime=datetime.replace(/\-/g,"/");var untilDate=new Date(datetime);if(countdownDirection=='true'){$("#"+uniqueID).countdown({until:untilDate,format:dateFormatRedux,isRTL:true,});}else{$("#"+uniqueID).countdown({until:untilDate,format:dateFormatRedux,isRTL:false,});}});}}};})(jQuery);