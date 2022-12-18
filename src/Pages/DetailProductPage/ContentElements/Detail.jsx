/* eslint-disable jsx-a11y/anchor-has-content */
import { useCallback, useState, useEffect } from "react";
import { CountDown } from "../../CountDown"
import {ShoppingCart} from "../../Component/ShoppingCart"
import {API} from "../../../Configs/api.js"
import { useNavigate    } from 'react-router-dom';
import axios from "axios";
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
export const Detail = ({productDetail, allColor, allCate}) => {
  const now = moment()
  let history = useNavigate ();
  const token_access =  localStorage.getItem("access_token")
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  const [stepBid, setStepBid] = useState(0)
  const [stepBid1, setStepBid1] = useState(0)
  const [productsInCart, setProducts] =
	useState(
		JSON.parse(
			localStorage.getItem(
				"shopping-cart"
			)
		) || []
	);
  const setSetUp = () =>{
    const result = stepBid + stepBid1
    setStepBid(result)
  }
  const setSetDown = () =>{
    const result = stepBid - stepBid1
    setStepBid(result)
  }
  
  const renderCountDownComponent = useCallback((time) => {
    if (productDetail) {
      return <CountDown propsTimeCount={{show: true, time: time}}/>
    }
    return <div>loading</div>
  
  }, [])
  const addBid = (async (product) => {
    if(!localStorage.getItem("access_token"))
    {
     history('/login',
     {state: { message: "Đăng nhập để mua hàng" }
   });
    }
    const headers = {
      'Content-Type': 'application/json',
      "access_token": token_access,
    }
    await axios.post(API['newBid'],{ 
     
      product_id: product.id,
      current_bid: stepBid,

    }, {
      headers: headers
    }).then(function (response) {
      toast('Đấu giá thành công!');
  }).catch(function (error) {
        console.log(error);
        toast(error.response.data);
    });
  
  })
  const addProductToCart = (product) => {
		const updatedCart = [...productsInCart];
	  const updatedItemIndex = updatedCart.findIndex(
		(item) => item.id === product.id
	  );
	
	  if (updatedItemIndex < 0) {
		updatedCart.push({ ...product, count: 1 });
	  } else {
		const updatedItem = {
		  ...updatedCart[updatedItemIndex]
		};
		//updatedItem.count++;
		updatedCart[updatedItemIndex] = updatedItem;
	  }
		setProducts(
			updatedCart
		  );
		};
    useEffect(() => {
			localStorage.setItem( 
			  "shopping-cart",
			  JSON.stringify(productsInCart)
			);
      async function fetchData() {
        // You can await here
        console.log(productDetail.start_bid_amount)
        setStepBid(productDetail.start_bid_amount)
        setStepBid1(productDetail.step_bid_amount)
      }
      fetchData()
		  },  [productsInCart,productDetail]); // Or [] if effect doesn't need props or state
  return (
    <div className="col-md-12 thumbnails-summary">
      <ToastContainer />
      <div className="row">
        <div className="col-md-5 product-thumbnails">
          <div
            className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
            data-columns={4}
            style={{ opacity: 1, transition: "opacity 0.25s ease-in-out 0s" }}
          >
            <a href="/#" className="woocommerce-product-gallery__trigger">
              <img
                draggable="false"
                role="img"
                className="emoji"
                alt=""
                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f50d.svg"
              />
            </a>
            <div className="ibid-auction-no-reserve">No reserve</div>{" "}
            <figure className="woocommerce-product-gallery__wrapper">
              <div
                data-thumb="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-200x200.jpg"
                data-thumb-alt=""
                className="woocommerce-product-gallery__image"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <a href="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1.jpg">
                  <img
                    width={600}
                    height={600}
                    src={BaseUrl+productDetail.featured_image}
                    className="wp-post-image"
                    alt=""
                    loading="lazy"
                    title="asus-laptop (1)"
                    data-caption=""
                    data-large_image_width={600}
                    data-large_image_height={600}
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </a>
                <img
                  role="presentation"
                  alt=""
                  src={BaseUrl+productDetail.hover_featured_image}
                  className="zoomImg"
                  style={{
                    position: "absolute",
                    top: "-74.6778px",
                    left: "-191.948px",
                    opacity: 0,
                    width: 600,
                    height: 600,
                    border: "none",
                    maxWidth: "none",
                    maxHeight: "none",
                  }}
                />
              </div>
              <div
                data-thumb="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-200x200.jpg"
                data-thumb-alt=""
                className="woocommerce-product-gallery__image"
              >
                <a href="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4.jpg">
                  <img
                    width={200}
                    height={200}
                    src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-200x200.jpg"
                    className=""
                    alt=""
                    loading="lazy"
                    title="electronic-cat4"
                    data-caption=""
                    data-src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4.jpg"
                    data-large_image="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4.jpg"
                    data-large_image_width={1080}
                    data-large_image_height={1080}
                    srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4.jpg 1080w"
                    sizes="(max-width: 200px) 100vw, 200px"
                  />
                </a>
              </div>
              <div
                data-thumb="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-200x200.jpg"
                data-thumb-alt=""
                className="woocommerce-product-gallery__image"
              >
                <a href="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2.jpg">
                  <img
                    width={200}
                    height={200}
                    src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-200x200.jpg"
                    className=""
                    alt=""
                    loading="lazy"
                    title="laptop-cat2"
                    data-caption=""
                    data-src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2.jpg"
                    data-large_image="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2.jpg"
                    data-large_image_width={1080}
                    data-large_image_height={1080}
                    srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/laptop-cat2.jpg 1080w"
                    sizes="(max-width: 200px) 100vw, 200px"
                  />
                </a>
              </div>
              <div
                data-thumb="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-200x200.jpg"
                data-thumb-alt=""
                className="woocommerce-product-gallery__image"
              >
                <a href="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3.jpg">
                  <img
                    width={200}
                    height={200}
                    src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-200x200.jpg"
                    className=""
                    alt=""
                    loading="lazy"
                    title="electronic-cat3"
                    data-caption=""
                    data-src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3.jpg"
                    data-large_image="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3.jpg"
                    data-large_image_width={1080}
                    data-large_image_height={1080}
                    srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3.jpg 1080w"
                    sizes="(max-width: 200px) 100vw, 200px"
                  />
                </a>
              </div>{" "}
            </figure>
          </div>{" "}
        </div>
        <div className="summary entry-summary col-md-7">
          <h1 className="product_title entry-title">Laptop Latitude d3300</h1>
          <div className="woocommerce-product-details__short-description">
            <p>
             {productDetail.short_subscription}
            </p>
          </div>
          <p className="price">
            <span className="sold-for auction">Starting bid</span>:{" "}
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol"></span>
              {new Intl.NumberFormat('vi-VN').format(productDetail.start_bid_amount)}
            </span>
          </p>
          <div className="auction-ajax-change">
            <p className="auction-condition">
            Item condition: <span className="curent-bid">{productDetail.condition}</span>
            </p>
            <div class="auction-time" id="countdown">
              <div class="main-auction auction-time-countdown hasCountdown" data-time="1670716800" data-auctionid="4467" data-format="yowdHMS">
                {
                  (moment(productDetail.auction_end, 'YYYY-MM-DD HH:mm:ss') > now ?(
                    renderCountDownComponent(productDetail.auction_end)
                  ):
                  ( <div>Auction Ended</div>)
                  )
                  
                }
              </div>
            </div>   
          </div>
          <p className="auction-end">Auction ends: {moment(productDetail.auction_end).format('YYYY-MM-DD HH:mm:ss')}</p>
          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4458">
            <div
              className="yith-wcwl-add-button show"
              style={{ display: "block" }}
            >
              <a
                href="/product/laptop-latitude-d3300/?add_to_wishlist=4458"
                data-product-id={4458}
                data-product-type="auction"
                className="add_to_wishlist single_add_to_wishlist button "
                data-tooltip="Add to Wishlist"
              >
                <i className="far fa-heart" />
              </a>
              <img
                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                className="ajax-loading"
                alt="loading"
                width={16}
                height={16}
                style={{ visibility: "hidden" }}
              />
            </div>
            <div
              className="yith-wcwl-wishlistaddedbrowse hide"
              style={{ display: "none" }}
            >
              <a
                href="https://ibid.modeltheme.com/wishlist/"
                data-toggle="tooltip"
                data-tooltip="Add to Wishlist Wishlist"
                data-placement="top"
                title="Browse Wishlist"
              >
                <i className="fas fa-heart" />{" "}
              </a>
            </div>
            <div
              className="yith-wcwl-wishlistexistsbrowse hide"
              style={{ display: "none" }}
            >
              <a
                href="https://ibid.modeltheme.com/wishlist/"
                data-tooltip="Check Wishlist"
                className="button"
              >
                <i className="fas fa-heart" />{" "}
              </a>
            </div>
            <div style={{ clear: "both" }} />
            <div className="yith-wcwl-wishlistaddresponse" />
          </div>
          <div className="product_meta">
            <span className="sku_wrapper">
              SKU: <span className="sku">{productDetail.sku}</span>
            </span>
            <span className="posted_in">
              Categories:
                {allCate.map((item, index) => (item.id == productDetail.category_id &&(
                    <a
                    href="#"
                    rel="tag"
                  >
                  {item.name}
                  </a>
                )))
                }
             
            </span>
            {/* <span className="tagged_as">
              Tags:{" "}
              <a
                href="https://ibid.modeltheme.com/product-tag/black-friday/"
                rel="tag"
              >
                black friday
              </a>
              ,{" "}
              <a
                href=""
                rel="tag"Yellow
              >
                sales
              </a>
            </span> */}
            <span>
              Sales: <span></span>
            </span>
            <span>
              Color: <span>
                {allColor.map((item, index) => (item.id == productDetail.color_id &&(
                  item.name
                )))
                }</span>
            </span>
            <form
              className="auction_form cart"
              method="post"
              encType="multipart/form-data"
              data-product_id={4466}
              data-hs-cf-bound="true"
            >
              <input type="hidden" name="bid" defaultValue={4466} />
              <div className="quantity buttons_added" >
                <input type="button" defaultValue="+" onClick={() =>setSetUp()} className="plus" />
                <input
                  type="text"
                  name="bid_value"
                  value={stepBid}
                  title="đấu thầu"
                  autoComplete="off"
                  className="input-text qty bid text left"
                />
                <input type="button" defaultValue="-" className="minus"  onClick={() =>setSetDown()}/>
              </div>
              <input type="hidden" name="place-bid" defaultValue={4466} />
              <input type="hidden" name="product_id" defaultValue={4466} />
            </form>
            <form className="buy-now cart">
        <div className="quantity hidden">
          <input type="hidden" id="quantity_638639a33c030" className="qty" name="quantity" defaultValue={1} />
        </div>
        <button type="button"	onClick={() =>
		addProductToCart(
productDetail		)
		} className="single_add_to_cart_button button alt">Buy now for <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span> {new Intl.NumberFormat('vi-VN').format(productDetail.price)}</bdi></span></button>
        <div>
          <input type="hidden" name="add-to-cart" defaultValue={5468} />
          <input type="hidden" name="product_id" defaultValue={5468} />
        </div>
      </form>
            <div className="social-box">
              <div className="social-btn">
              <div class="component add-to-cart"><button onClick={() =>
                  addBid(
                  productDetail)
                  } data-quantity="1" data-tooltip="Bid Now" class="button product_type_auction add_to_cart_button" data-product_id="4467" data-product_sku="BF009" aria-label="Read more about “Tablet Surface Go”" rel="nofollow"><i class="fa fa-gavel"></i></button></div>
                            
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
