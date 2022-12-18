import { useState } from "react";
import { useMemo, useEffect } from "react";
import { useContext } from "react";
import { HomeContext } from "../Templates/HomeTemplate";
import { Link } from "react-router-dom";
import { useNavigate    } from 'react-router-dom';

export const Header = () => {
  const { dataMenu } = useContext(HomeContext);
  const [isShow, setIsShow] = useState(false)
  const token =  localStorage.getItem("access_token")
  const type = localStorage.getItem("type")
  const [styleSub, setStyleSub] = useState({
    display: "none",
  });

let history = useNavigate ();
  const url = window.location.pathname
  const changeBackground = () =>{
    setIsShow(!isShow)
  }
  const Logout = () =>{
    localStorage.removeItem("access_token")
    localStorage.removeItem("user_id")
    localStorage.removeItem("type")
    history('/',
    {state: { message: "Đăng xuất thành công!" }
  });
  }
  const renderHeader = () =>{
    if(url == '/login')
    {
      return (
        <li id="nav-menu-login" className="ibid-logoin">
        <Link to="register">
          Đăng Ký{" "}
        </Link>
       
      
      </li>
      )
    }
    else if(url == '/register'){
        return (
          <li id="nav-menu-login" className="ibid-logoin">
          <Link to="login">
            Đăng nhập{" "}
          </Link>
        </li>
        )
    }
    else if( localStorage.getItem("type")){
      return (
        <li id="nav-menu-login" className="ibid-logoin">
          <Link to="#">
          Hello: {localStorage.getItem("type")}
          </Link>
         
      </li>
      )
    }
    else{
      return (
        <li id="nav-menu-login" className="ibid-logoin">
        <Link to="login">
          Đăng nhập{" "}
        </Link>
      </li>
      )
    }
  }
  const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
    useEffect(() => {
      const startTime = 2
      const count = startTime
      var counter = startTime;
      var step = 1
    var newYearCountdown = setInterval(async function(){
   
      const next_count = count - startTime*step
      counter--
      if (counter === next_count) {
          step++
          const next_round = next_count - startTime
          if(productsInCart != JSON.parse(
            localStorage.getItem(
              "shopping-cart"
            )))
            { 
              setProducts(JSON.parse(
                localStorage.getItem(
                  "shopping-cart"
                )
              ))
            }
      }
    }, 2000);
    }, []);

  const View = useMemo(
    () =>
      dataMenu?.map((item) => (
        <li
          key={item.id}
          className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat"
        >
          <Link to="shop/products-by-categories">
            {item.name}
          </Link>
          <div className="cf-mega-menu sub-menu">
            <div className="vc_row wpb_row vc_row-fluid no-margin vc_row-has-fill">
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                      {
                        item.firstSubCategories.map((item1, index3) => (
                          <>
                          <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                          <div className="wpb_wrapper">
                          <Link to={"product-category-first-sub-category/"+item1.slug}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 14,
                              color: "#484848",
                            }}
                          >
                            {item1.name}
                          </p></Link>
                        </div>
                        </div>
                            <div className="vc_empty_space" style={{ height: 5 }}>
                            <span className="vc_empty_space_inner" />
                          </div>
                          {
                            item1.secondSubCategories.map((item2, index4) => (
                              
                    <div className="wpb_text_column wpb_content_element  menu-cat">
                    <div className="wpb_wrapper">
                      <p>
                        <Link to={"product-category-second-sub-category/"+item2.slug}>{item2.name}</Link>
                        <br />
                      </p>
                    </div>
                  </div>
                            ))
                          }
                          </>
                        ))
                      }
                      
                    
                
                    <div className="vc_empty_space" style={{ height: 20 }}>
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </li>
      )),
    []
  );
  return (
    <header className="header-v1">
      <div className="navbar navbar-default" id="ibid-main-head">
        <div className="container">
          <div className="row">
            <div className="navbar-header col-md-3 col-sm-12">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="mobile_only_icon_group search">
                <a href="/#" className="mt-search-icon">
                  <i className="fas fa-search" aria-hidden="true" />
                </a>
              </div>
              <div className="mobile_only_icon_group cart">
                <a>
                  <i className="fas fa-shopping-basket" />
                </a>
              </div>
              <div className="mobile_only_icon_group wishlist">
                <a
                  className="top-payment"
                 
                >
                  <i className="fas fa-heart" />
                </a>
              </div>
              <div className="mobile_only_icon_group account">
                <a >
                  <i className="far fa-user" />
                </a>
              </div>
              <div className="logo logo-image">
                <a>
                  <img
                    src="https://ibid.modeltheme.com/wp-content/uploads/2019/08/logo-ibid.png"
                    alt="iBid"
                  />
                </a>
              </div>
              
            </div>
            
            
            <div className="col-md-8 menu-products">
        
              
        <Link to="cart" className="shop_cart">
          <font style={{verticalAlign: 'inherit'}}>
            <font style={{verticalAlign: 'inherit'}}>
              Giỏ hàng</font>
          </font>
        </Link>
        <a className="cart-contents" href="#" title="xem xe đẩy hàng của bạn">
          <font style={{verticalAlign: 'inherit'}}>
          <font style={{verticalAlign: 'inherit'}}>{productsInCart.length || 0} sản phẩm</font>

          </font>
        </a>
        <div className="header_mini_cart">
          <div className="widget woocommerce widget_shopping_cart">
            <h2 className="widgettitle">
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>Giỏ hàng</font>
              </font>
            </h2>
            <div className="widget_shopping_cart_content">
              <p className="woocommerce-mini-cart__empty-message">
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Không có sản phẩm nào trong
                    giỏ.</font>
                </font>
              </p>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
        <nav className="navbar bottom-navbar-default" id="modeltheme-main-head">
          <div className="container">
            <div className="row row-0">
              <div id="navbar" className="navbar-collapse collapse col-md-10">
                <div className="bot_nav_cat_inner">
                  <div className="bot_nav_cat">
                    <button
                      className="bot_cat_button"
                      onClick={() =>
                        setStyleSub((prev) => ({
                          ...prev,
                          display: prev.display === "block" ? "none" : "block",
                        }))
                      }
                    >
                      <span className="cat_ico_block">Categories</span>
                    </button>
                    <ul
                      className="bot_nav_cat_wrap"
                      style={{
                        display: styleSub.display,
                      }}
                    >
                      {/* Chỗ này */}
                      {View}
                      <li
                        id="menu-item-5681"
                        className="mega3menu menu-item menu-item-type-custom menu-item-object-custom menu-item-5681"
                      >
                        <a href="/#">
                          <i className="fa fa-truck" /> Order Tracking
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 50 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="woocommerce">
                                    <form
                                      action="https://ibid.modeltheme.com/cf_mega_menu/order-tracking-mega-menu/"
                                      method="post"
                                      className="woocommerce-form woocommerce-form-track-order track_order"
                                      data-hs-cf-bound="true"
                                    >
                                      <p>
                                        To track your order please enter your
                                        Order ID in the box below and press the
                                        "Track" button. This was given to you on
                                        your receipt and in the confirmation
                                        email you should have received.
                                      </p>
                                      <p className="form-row form-row-first">
                                        <label htmlFor="orderid">
                                          Order ID
                                        </label>{" "}
                                        <input
                                          className="input-text"
                                          type="text"
                                          name="orderid"
                                          id="orderid"
                                          defaultValue=""
                                          placeholder="Found in your order confirmation email."
                                        />
                                      </p>{" "}
                                      <p className="form-row form-row-last">
                                        <label htmlFor="order_email">
                                          Billing email
                                        </label>{" "}
                                        <input
                                          className="input-text"
                                          type="text"
                                          name="order_email"
                                          id="order_email"
                                          defaultValue=""
                                          placeholder="Email you used during checkout."
                                        />
                                      </p>{" "}
                                      <div className="clear" />
                                      <p className="form-row">
                                        <button
                                          type="submit"
                                          className="button"
                                          name="track"
                                          value="Track"
                                        >
                                          Track
                                        </button>
                                      </p>
                                      <input
                                        type="hidden"
                                        id="woocommerce-order-tracking-nonce"
                                        name="woocommerce-order-tracking-nonce"
                                        defaultValue="a5f4474a6c"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wp_http_referer"
                                        defaultValue="/"
                                      />
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bot_nav_wrap">
                  <ul className="menu nav navbar-nav pull-left nav-effect nav-menu">
                    <li
                      id="menu-item-6467"
                      className="mega_menu menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-6467"
                    >
                      <Link
                       to="/"
                        aria-current="page"
                      >
                        Trang chủ
                      </Link>
                    
                    </li>
                    <li
                      id="menu-item-4605"
                      className="mega_menu menu-item menu-item-type-post_type menu-item-object-page menu-item-4605"
                    >
                      <a href="https://ibid.modeltheme.com/shop/">Tin tức</a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      SHOP SHORTCODES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/sale-banner/">
                                        <i className="fa fa-percent" /> Sale
                                        Banners
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/products-by-categories/">
                                        <i className="fa fa-th" /> Categories
                                        Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/clients-slider/">
                                        <i className="fa fa-sliders" /> Clients
                                        Slider
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/pricing-tables/">
                                        <i className="fa fa-table" /> Pricing
                                        Tables
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/shop-features/">
                                        <i className="fa fa-cart-arrow-down" />{" "}
                                        Shop Features
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      SHOP PAGES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/best-selling-products/">
                                        <i className="fa fa-line-chart" /> Best
                                        Selling
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/featured-products/">
                                        <i className="fa fa-star-o" /> Featured
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/product-category/">
                                        <i className="fa fa-object-group" /> By
                                        Category
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/recent-added-products/">
                                        <i className="fa fa-clock-o" /> Recent
                                        Added
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/sale-products/">
                                        <i className="fa fa-bolt" /> Sales Now
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      MORE PAGES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/">
                                        <i className="fa fa-cart-plus" /> Main
                                        Shop
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/product/space-grey-apple-iphone-x-64gb/">
                                        <i className="fa fa-link" /> Single
                                        Product
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/my-account/">
                                        <i className="fa fa-address-card-o" />{" "}
                                        My Account
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/cart/">
                                        <i className="fa fa-shopping-basket" />{" "}
                                        My Basket
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/checkout/">
                                        <i className="fa fa-credit-card" />{" "}
                                        Checkout
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      id="menu-item-5308"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                    >
                      <a href="#">
                        Giới thiệu
                      </a>
                    </li>
                    <li
                      id="menu-item-5431"
                      className="mega_menu col_2 menu-item menu-item-type-post_type menu-item-object-page menu-item-5431"
                    >
                      <a href="#">
                        Liên hệ
                      </a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                  <div className="wpb_wrapper"></div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shortcodes/#accordion">
                                        <i className="fa fa-bars" /> Accordion
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#client">
                                        <i className="fa fa-briefcase" />{" "}
                                        Clients Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#counter">
                                        <i className="fa fa-circle-o-notch" />{" "}
                                        Counters
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#chart">
                                        <i className="fa fa-pie-chart" />{" "}
                                        Piecharts
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/products-by-categories/">
                                        <i className="fa fa-shopping-bag" />{" "}
                                        Products Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#shop-feature">
                                        <i className="fa fa-shopping-basket" />{" "}
                                        Shop Feature
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                  <div className="wpb_wrapper"></div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shortcodes/#pricing">
                                        <i className="fa fa-table" /> Pricing
                                        Tables
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#services">
                                        <i className="fa fa-credit-card" />{" "}
                                        Services
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#bars">
                                        <i className="fa fa-percent" /> Bars
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#member">
                                        <i className="fa fa-users" /> Members
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#testimonial">
                                        <i className="fa fa-quote-right" />{" "}
                                        Testimonials
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-boxed-layout/">
                                        <i className="fa fa-pencil" /> Blog
                                        posts
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                
                
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-2 my-account-navbar">
                <ul>
                {
                  renderHeader()
                }
                </ul>
              </div> */}
              <div className="col-md-2 my-account-navbar">
  <ul>
  {
    token && type == 'vendor' &&(
      <div id="dropdown-user-profile" className={isShow == true?"ddmenu open":"ddmenu"} onClick={ () => changeBackground() }>
      <li id="nav-menu-register" className="nav-menu-account">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Tài khoản của tôi</font>
        </font>
      </li>
      <ul>
        <li>
          <a href="#/my-account/">
            <i className="fas fa-layer-group" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Bảng điều khiển của tôi
              </font>
            </font>
          </a>
        </li>
        <li>
          <a href="#/dashboard">
            <i className="fas fa-store" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Bảng điều khiển nhà cung cấp
              </font>
            </font>
          </a>
        </li>
        <li>
          <Link to="/order-vendor">
            <i className="fas fa-shopping-basket" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                đơn đặt hàng của tôi
              </font>
            </font>
          </Link>
        </li>
        <li>
        <Link to="/account-vendor">
            <i className="far fa-user" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Chi tiết tài khoản
              </font>
            </font>
          </Link>
        </li>
        <div className="dropdown-divider" />
        <li>
          <a onClick={ () => Logout() }>
            <i className="fas fa-sign-out-alt" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Đăng xuất</font>
            </font>
          </a>
        </li>
      </ul>
    </div>
    )

  }
  {
    token && type=='customer' &&(
      <div id="dropdown-user-profile" className={isShow == true?"ddmenu open":"ddmenu"} onClick={ () => changeBackground() }>
      <li id="nav-menu-register" className="nav-menu-account">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Tài khoản của tôi</font>
        </font>
      </li>
      <ul>
        <li>
          <a href="#/my-account/">
            <i className="fas fa-layer-group" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Bảng điều khiển của tôi
              </font>
            </font>
          </a>
        </li>
        <li>
          <a href="#/dashboard">
            <i className="fas fa-store" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Bảng điều khiển nhà cung cấp
              </font>
            </font>
          </a>
        </li>
        <li>
          <Link to="/aution-customer">
            <i className="fas fa-shopping-basket" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                đơn đặt hàng của tôi
              </font>
            </font>
          </Link>
        </li>
        <li>
        <Link to="/account-customer">
            <i className="far fa-user" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Chi tiết tài khoản
              </font>
            </font>
          </Link>
        </li>
        <div className="dropdown-divider" />
        <li>
          <a onClick={ () => Logout() }>
            <i className="fas fa-sign-out-alt" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Đăng xuất</font>
            </font>
          </a>
        </li>
      </ul>
    </div>
    )
  }
  {
    !token && !type &&(
      renderHeader()
    )
  }
    
  </ul>
</div>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
