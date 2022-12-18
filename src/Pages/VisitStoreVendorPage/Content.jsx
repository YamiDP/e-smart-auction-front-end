import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"
import { CountDown } from "../CountDown"

export const Content = () => {
  let history = useNavigate ();
  const urlOrigin = window.location.origin.toString();
  const now = moment()
  const BaseUrl ='http://localhost:8000'
  const token_access =  localStorage.getItem("access_token")
  
  const user_id =  localStorage.getItem("user_id")
  const [sellerProduct, setSellerProduct] = useState([]);
  const [allSize, setAllSize] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [onePage, setOnePage] = useState(0);
  const [seller, setSeller] = useState([]);
  const [current, setCurrent] = useState(1);

  const listSort = {alpha__asc:"A - Z", alpha__desc:"Z - A",created__desc:"Mới nhất", created__asc:"Cũ nhất",price__asc:"Giá từ thấp đến cao", price__desc:"Giá từ cao đến thấp",current_bid__asc:"Giá thầu hiện tại từ thấp đến cao", 
  current_bid__desc:"Giá thầu hiện tại từ cao đến thấp"};

  const paginatePage =()=>{
    if(totalProduct.length > 0)
    {
      return(
        <ul className="page-numbers">
        {
          totalProduct?.map((item, index)=>(item == current ?(
            <li onClick={ () => paginationPage(item) }className="page-numbers active">
            <a aria-current="page" className="active">
              {item}
            </a>
          </li>
          ):(
            <li onClick={ () => paginationPage(item) }>
            <a aria-current="page" className="page-numbers">
              {item}
            </a>
          </li>
          )))
        }
      </ul>
      )
    }
  }
  const spinner = ()=>{
    if(sellerProduct.length == 0)
    {
      return (<div> <img style={{marginLeft: "30%"}} src="../image/giphy.gif"/></div>)
    }
  }
  async function sortByValue (e) {
    e.preventDefault();
    setSellerProduct([])
    const paramSort = e.target.value.replace("__", "-");
    await axios.get(API['productStore'],
     { params: { sort: paramSort }, headers: {
      'access_token': token_access,
      'Content-Type': 'application/json'
  } }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      setSellerProduct(dataPro)
  }).catch(function (error) {
      console.log(error);
  });
  }
  const renderCountDownComponent = useCallback((time) => {
    if (sellerProduct) {
      return <CountDown propsTimeCount={{show: true, time: time}}/>
    }
    return <div>loading</div>
  
  }, [])
  async function paginationPage (numer) {
    setCurrent(numer)
    setSellerProduct([])
    await axios.get(API['productStore'], { params: { page: numer },  headers: {
      'access_token': token_access,
      'Content-Type': 'application/json'
  } }).then(function (response) {
      const dataPro = response.data;
      setSellerProduct(dataPro)
  }).catch(function (error) {
      console.log(error);
  });
  }
  const getAllProductBySeller = async ()=>{
    await axios.get(API['productStore'], {
      headers: {
          'access_token': token_access,
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
       const data = response.data;
       const count = data.length
       setOnePage(count)
       setSellerProduct(data)
   }).catch(function (error) {
       console.log(error);
   });
  }
  
  useEffect(() => {
  if(!localStorage.getItem("access_token"))
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {
    getAllProductBySeller()

axios.get(API['sellerById']+user_id).then(function (responseSeller) {
    const dataSeller = responseSeller.data;
    const total=dataSeller.products.length
    setSeller(dataSeller);
    const totalPage = Math.ceil(total/9)
    const dataTotalPageArr = [];
    for (let i = 1; i <= totalPage; i++) {
      dataTotalPageArr.push(i);
    }
    setTotalProduct(dataTotalPageArr)

}).catch(function (error) {
    console.log(error);
});

 }
  fetchData()
}, []);
  return (
    <div id="primary" className="content-area">
  <main id="main" className="site-main" role="main">
    <div className="dokan-store-wrap layout-left">
      <div id="dokan-primary" className="dokan-single-store">
        <div
          id="dokan-content"
          className="store-page-wrap woocommerce"
          role="main"
        >
          <div className="dokan-profile-frame-wrapper">
            <div className="profile-frame">
              <div className="profile-info-box profile-layout-default">
                <div
                  className="profile-info-img dummy-image"
                  style={{ height: "502.853px" }}
                >
                  &nbsp;
                </div>
                <div className="profile-info-summery-wrapper dokan-clearfix">
                  <div className="profile-info-summery">
                    <div className="profile-info-head">
                      <div className="profile-img profile-img-circle">
                        <img
                          src="https://secure.gravatar.com/avatar/797ab2ea028693c9e2156b668c552372?s=96&d=mm&r=g"
                          alt="temdetudomesmo2010"
                          size={150}
                        />
                      </div>
                      <h1 className="store-name">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            {seller.company_name}
                          </font>
                        </font>
                      </h1>
                    </div>
                    <div className="profile-info">
                      <ul className="dokan-store-info">
                        <li className="dokan-store-username">
                          <i className="fa fa-user" aria-hidden="true" />
                          <span className="username">  {seller.username}</span>
                        </li>
                        <li className="dokan-store-address">
                          <i
                            className="fas fa-map-marker-alt"
                            aria-hidden="true"
                          />
                          <span className="city"> {seller.housenumber_street},</span>{" "}
                          {/* <span className="city"> {seller.ward.name},</span>{" "} */}
                          <span className="country"> Vietnam </span>
                        </li>
                        <li className="dokan-store-phone">
                          <i className="fas fa-mobile-alt" aria-hidden="true" />
                          <a href="tel:02131326632"> {seller.mobile}</a>
                        </li>
                        <li className="dokan-store-email">
                          <i className="far fa-envelope" aria-hidden="true" />
                          <a href="mailto:yamikami2002@gmail.com">
                          {seller.email}
                          </a>
                        </li>
                      </ul>
                      <div className="store-social-wrapper">
                        <ul className="store-social"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dokan-store-tabs">
              <ul className="dokan-list-inline">
                <li>
                  <a href="#/store/temdetudomesmo2010-com/">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Các sản phẩm
                      </font>
                    </font>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="dokan-store-products-filter-area dokan-clearfix"
            style={{ padding: 20, marginBottom: 20 }}
          >
            <form
              className="dokan-store-products-ordeby"
              method="get"
              data-hs-cf-bound="true"
            >
              <input
                type="text"
                name="product_name"
                className="product-name-search dokan-store-products-filter-search"
                placeholder="Nhập tên sản phẩm"
                autoComplete="off"
                data-store_id={2204}
              />
              <div
                id="dokan-store-products-search-result"
                className="dokan-ajax-store-products-search-result"
              />
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  <input
                    type="submit"
                    name="search_store_products"
                    className="search-store-products dokan-btn-theme"
                    defaultValue="Tìm kiếm"
                  />
                </font>
              </font>
              <select
                onChange={ sortByValue }
                name="product_orderby"
                className="orderby orderby-search"
                aria-label="Đặt hàng tại cửa hàng"
                onchange="if(this.value != 0) { this.form.submit(); }"
              >
               {
                     Object.keys(listSort).map((item,index) => {
                      return(
                          <option value={item}  key={index}  >
                          {listSort[item]}
                        </option>
                      )
                    })
                  }
              </select>
              <input type="hidden" name="paged" defaultValue={1} />
            </form>
          </div>
          <div className="seller-items">
            {
              spinner()
            }
            <ul className="products columns-3">
                {
                    sellerProduct.map((item, index)=>(
                        <li className=" first post-13545 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-black-friday product_tag-sales instock sold-individually shipping-taxable product-type-auction">
                        <div className="products-wrapper">
                          <div className="thumbnail-and-details">
                            <div className="overlay-container">
                              <div className="thumbnail-overlay" />
                              <div className="overlay-components">
                                <div className="component add-to-cart">
                                  <a
                                    href={urlOrigin+"/product/"+item.slug}
                                    data-quantity={1}
                                    data-tooltip="Bid Now"
                                    className="button product_type_auction"
                                    data-product_id={13545}
                                    data-product_sku="BF004-1"
                                    aria-label='Đọc thêm về "Đặt giá thầu tự động (Proxy)"'
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-gavel" />
                                  </a>
                                </div>
                                <div className="component quick-view hide-on-mobile">
                                  <a
                                    href={urlOrigin+"/product/"+item.slug}
                                    className="button yith-wcqv-button"
                                    data-tooltip="Quickview"
                                    data-product_id={13545}
                                  >
                                    <i className="fas fa-search" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <a
                              className="woo_catalog_media_images"
                              title="Đặt giá thầu tự động (Proxy)"
                              href={urlOrigin+"/product/"+item.slug}
                            >
                              <img
                                width={300}
                                height={300}
                                src={item.featured_image}
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                                loading="lazy"
                                sizes="(max-width: 300px) 100vw, 300px"
                              />
                              <img
                                className="woo_secondary_media_image"
                                src={item.hover_featured_image}
                                alt="Đặt giá thầu tự động (Proxy)"
                              />
                                {
                            renderCountDownComponent(item.auction_end)
                            }
                             
                            </a>
                          </div>
                          <span className="auction-bage" />
                          <div className="woocommerce-title-metas" style={{}}>
                            <h3 className="archive-product-title">
                              <a href="#/product/auto-bidding/">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                   {item.name}
                                  </font>
                                </font>
                              </a>
                            </h3>
                            <div className="details-container">
                              <div className="details-price-container details-item">
                                <div className="woocommerce-product-details__short-description">
                                  <p>
                                    The Ragdoll is a cat breed with blue eyes and a
                                    distinct colorpoint coat. It is a large and muscular
                                    semi-longhair cat with a soft and silky coat. Like
                                    all long haired cats, Ragdolls need grooming to
                                    ensure their fur does not mat.
                                  </p>
                                </div>
                            
                                    
                  {
                    ( moment(item.auction_end, 'YYYY-MM-DD HH:mm:ss') > now ?(
                        <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Giá thầu hiện tại
                              </font>
                            </font>
                          </span>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {" "}
                              {new Intl.NumberFormat('vi-VN').format(item.current_bid_amount)}
                            </font>
                          </font>
                        </bdi>
                      </span>
                    ):
                    <div>Auction Ended</div>
                    )
                  }
                                 
                                <div className="details-review-container details-item" />
                                <div className="bottom-components">
                                  <div className="component add-to-cart">
                                    <a
                                      href="#/product/auto-bidding/"
                                      data-quantity={1}
                                      data-tooltip="Bid Now"
                                      className="button product_type_auction"
                                      data-product_id={13545}
                                      data-product_sku="BF004-1"
                                      aria-label='Đọc thêm về "Đặt giá thầu tự động (Proxy)"'
                                      rel="nofollow"
                                    >
                                      <i className="fa fa-gavel" />
                                    </a>
                                  </div>
                                  <div className="component wishlist">
                                    <div className="yith-wcwl-add-to-wishlist add-to-wishlist-13545">
                                      <div
                                        className="yith-wcwl-add-button show"
                                        style={{ display: "block" }}
                                      >
                                        <a
                                          href="/shop/?add_to_wishlist=13545"
                                          data-product-id={13545}
                                          data-product-type="auction"
                                          className="add_to_wishlist single_add_to_wishlist button "
                                          data-tooltip="Add to Wishlist"
                                        >
                                          <i className="far fa-heart" />
                                        </a>
                                        <img
                                          src="#/wp-admin/images/wpspin_light.gif"
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
                                          href="#/wishlist/"
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
                                          href="#/wishlist/"
                                          data-tooltip="Check Wishlist"
                                          className="button"
                                        >
                                          <i className="fas fa-heart" />{" "}
                                        </a>
                                      </div>
                                      <div style={{ clear: "both" }} />
                                      <div className="yith-wcwl-wishlistaddresponse" />
                                    </div>
                                  </div>
                                  <div className="component quick-view">
                                    <a
                                      href="#"
                                      className="button yith-wcqv-button"
                                      data-tooltip="Quickview"
                                      data-product_id={13545}
                                    >
                                      <i className="fas fa-search" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-components-list">
                              <div className="component add-to-cart">
                                <a
                                  href="#/product/auto-bidding/"
                                  data-quantity={1}
                                  data-tooltip="Bid Now"
                                  className="button product_type_auction"
                                  data-product_id={13545}
                                  data-product_sku="BF004-1"
                                  aria-label="Read more about “Auto Bidding (Proxy)”"
                                  rel="nofollow"
                                >
                                  <i className="fa fa-gavel" />
                                </a>
                              </div>
                              <div className="component wishlist">
                                <div className="yith-wcwl-add-to-wishlist add-to-wishlist-13545">
                                  <div
                                    className="yith-wcwl-add-button show"
                                    style={{ display: "block" }}
                                  >
                                    <a
                                      href="/shop/?add_to_wishlist=13545"
                                      data-product-id={13545}
                                      data-product-type="auction"
                                      className="add_to_wishlist single_add_to_wishlist button "
                                      data-tooltip="Add to Wishlist"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                    <img
                                      src="#/wp-admin/images/wpspin_light.gif"
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
                                      href="#/wishlist/"
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
                                      href="#/wishlist/"
                                      data-tooltip="Check Wishlist"
                                      className="button"
                                    >
                                      <i className="fas fa-heart" />{" "}
                                    </a>
                                  </div>
                                  <div style={{ clear: "both" }} />
                                  <div className="yith-wcwl-wishlistaddresponse" />
                                </div>
                              </div>
                              <div className="component quick-view">
                                <a
                                  href="#"
                                  className="button yith-wcqv-button"
                                  data-tooltip="Quickview"
                                  data-product_id={13545}
                                >
                                  <i className="fas fa-search" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                }
            
           
              <li className="clearfix hide-on-mobile" />
            </ul>
          </div>
          <nav
            role="navigation"
            id="nav-below"
            className="site-navigation paging-navigation"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ul className="pager"></ul>
          
            <div className="dokan-pagination-container">
              <ul className="dokan-pagination">

                {/* <li className="disabled">
                  <a href="#">←</a>
                </li> */}
                  {
                    paginatePage()
                  }
               
                {/* <li className="">
                  <a href="#/store/admin/page/2/">→</a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </main>
</div>

  );
};
