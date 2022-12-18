import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api"
import moment from 'moment'
import { CountDown } from "../CountDown"
import MultiRangeSlider from "../multiRangeSlider";
import {ShoppingCart} from "../Component/ShoppingCart"
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export const Content = () => {
  const url = window.location.pathname
  const param = url.split('product-category-second-sub-category/')[1]
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  const urlOrigin = window.location.origin.toString();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [allSize, setAllSize] = useState([]);
  const [allColor, setAllColor] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(10000000);
  const [current, setCurrent] = useState(1);
  const listSort = {alpha__asc:"A - Z", alpha__desc:"Z - A",created__desc:"Mới nhất", created__asc:"Cũ nhất",price__asc:"Giá từ thấp đến cao", price__desc:"Giá từ cao đến thấp",current_bid__asc:"Giá thầu hiện tại từ thấp đến cao", 
  current_bid__desc:"Giá thầu hiện tại từ cao đến thấp"};
  const renderCountDownComponent = useCallback((time) => {
    if (product) {
      return <CountDown propsTimeCount={{show: true, time: time}}/>
    }
    return <div>loading</div>
  
  }, [])
  const renderPrice = useCallback((time, price) => {
    const now = moment()
    const endAt = moment(time, 'YYYY-MM-DD HH:mm:ss')
    if (now < endAt) {
      return (<span className="price">
      Current Bid:{" "}
      <span className="woocommerce-Price-amount amount">
        <bdi>
          <span className="woocommerce-Price-currencySymbol">
            $
          </span>
          {new Intl.NumberFormat('vi-VN').format(price)}
        </bdi>
      </span>
    </span>)   
   
    }
    else{
      return <div>Auction Ended</div>
    }
   
  
  }, [])
  const onSubmitByColor = async (e) => {
    e.preventDefault();
    setProduct([])
    await axios.get(API['getProductsBySecondSub']+param, { params: { color_id: e.target.color_id.value } }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
       
        if(dataPro[key] !== undefined  && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
  }).catch(function (error) {
      console.log(error);
  });

  };
  
  async function sortByValue (e) {
    e.preventDefault();
    setProduct([])
    const paramSort = e.target.value.replace("__", "-");
    await axios.get(API['getProductsBySecondSub']+param, { params: { sort: paramSort } }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
       
        if(dataPro[key] !== undefined  && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
  }).catch(function (error) {
      console.log(error);
  });
  }
  async function sortByRangePrice () {
    setProduct([])
    await axios.get(API['getProductsBySecondSub']+param, { params: { price_from: minRange, price_to: maxRange} }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
        if(dataPro[key] !== undefined  && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
  }).catch(function (error) {
      console.log(error);
  });
  }
  
  async function changeRange (min, max) {
    setMinRange(min*100000)
    setMaxRange(max*100000)
  }
  
  async function getProductBySize (size_id) {
    setProduct([])
    await axios.get(API['getProductsBySecondSub']+param, { params: { size_id: size_id } }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
       
        if(dataPro[key] !== undefined  && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
  }).catch(function (error) {
      console.log(error);
  });
  }
  async function paginationPage (numer) {
    setCurrent(numer)
    await axios.get(API['getProductsBySecondSub']+param, { params: { page: numer } }).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
       
        if(dataPro[key] !== undefined  && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
  }).catch(function (error) {
      console.log(error);
  });
  }
  const paginatePage =()=>{
    return(
      <ul className="page-numbers">
      {
        totalPage.map((item, index)=>(item == current ?(
          <li onClick={ () => paginationPage(item) }>
          <span aria-current="page" className="page-numbers current">
            {item}
          </span>
        </li>
        ):(
          <li onClick={ () => paginationPage(item) }>
          <span aria-current="page" className="page-numbers">
            {item}
          </span>
        </li>
        )))
      }
    </ul>
    )

  }
  const spinner = ()=>{
    if(product.length == 0)
    {
      return (<div> <img style={{marginLeft: "30%"}} src="../image/giphy.gif"/></div>)
    }
  }
useEffect(() => {
  async function fetchData() {
    await axios.get(API['getProductsBySecondSub']+param).then(function (response) {
      const dataPro = response.data;
      const dataProArr = [];
      Object.keys(dataPro).forEach(function(key) {
        if(dataPro[key] !== undefined && key !== 'page_number')
        {
          dataProArr.push(dataPro[key])
        }
      })
      setProduct(dataProArr)
      const totalPage = Math.ceil(dataPro.page_number/10)
      const dataTotalPageArr = [];
      for (let i = 1; i <= totalPage; i++) {
        dataTotalPageArr.push(i);
      }
      setTotalPage(dataTotalPageArr)

  }).catch(function (error) {
      console.log(error);
  });
 
    const responseCate = await axios.get(API['parentCategory'])
    const dataCate = await responseCate.data;
    setCategory(dataCate)
    await axios.get(API['name'+param]).then(function (responseProductByCate) {
      const dataProduct = responseProductByCate.data;
      setProduct(dataProduct);
  }).catch(function (error) {
      console.log(error);
  });
  await axios.get(API['allSize']).then(function (response) {
    const data = response.data;
    setAllSize(data);
}).catch(function (error) {
    console.log(error);
});

  await axios.get(API['allColor']).then(function (responseColor) {
    const dataColor = responseColor.data;
    setAllColor(dataColor);
}).catch(function (error) {
    console.log(error);
});
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state
  return (
    <WrapperContent propsBreadcum={{ show: true }} padding="1" layout="1">
     
      <div className="container blog-posts">
        <div className="row">
          <div className="col-md-3 sidebar-content ibid-shop-sidebar">
            <div className="ibid-shop-sidebar-content-inner">
              <div className="ibid-shop-sidebar-close-btn hide-on-desktops">
                <i className="far fa-times-circle icon-close" />
              </div>
              <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h3 className="widget-title">Filter by price</h3>
                <form
                  data-hs-cf-bound="true"
                >
                  <div className="price_slider_wrapper">
                    <div
                      className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      style={{marginTop:"10%"}}
                    >
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) => changeRange(min, max)}
                  />
                    {/* <button type="submit" className="button">
                        Filter
                      </button>
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "100%" }}
                      /> */}
                      </div>
                    <div className="price_slider_amount" data-step={10}>
                      <div className="price_label" style={{}}>
                        Price: <span className="from"> {
                        minRange
                      }</span> —{" "}
                        <span className="to"> {
                        maxRange
                      }</span>
                      </div>
                      <button type="button" className="button"  onClick={ () => sortByRangePrice() } >
                        Filter
                      </button>
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </aside>
              <aside
                id="woocommerce_layered_nav-2"
                className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
              >
                <h3 className="widget-title">Color</h3>
                <form
                  onSubmit={onSubmitByColor}
                  className="woocommerce-widget-layered-nav-dropdown"
                  data-hs-cf-bound="true"
                >
                  <select
                    className="woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_color select2-hidden-accessible"
                    multiple=""
                    tabIndex={-1}
                    aria-hidden="true"
                    name="color_id"
                    style={{width:"100%"}}
                  >
                    {
                        allColor.map((item, index) => (
                          <option value={item.id}>{item.name}</option>
                        ))
                    }
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--multiple"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                      ></span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                  <button
                    className="woocommerce-widget-layered-nav-dropdown__submit"
                    type="submit"
                    value="Apply"
                  >
                    Apply
                  </button>
                  <input
                    type="hidden"
                    name="query_type_color"
                    defaultValue="or"
                  />
                  <input type="hidden" name="filter_color" defaultValue="" />
                </form>
              </aside>
           
              <aside
                id="woocommerce_layered_nav-4"
                className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
              >
                <h3 className="widget-title">Size</h3>
                <ul className="woocommerce-widget-layered-nav-list">
                {
                        allSize.map((item, index) => (
                          <li onClick={ () => getProductBySize(item.id) } className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                    <a
                      rel="nofollow"
                    >
                      {item.name}
                    </a>{" "}
                  </li>
                        ))
                }
                  
                  {/* <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                    <a
                      rel="nofollow"
                      href="https://ibid.modeltheme.com/product-category/phones/?filter_size=medium&query_type_size=or"
                    >
                      Medium
                    </a>{" "}
                    <span className="count">(2)</span>
                  </li> */}
                </ul>
              </aside>
           
           
            </div>
          </div>
          <div className="col-md-9 main-content">
            <div className="ibid-shop-sort-group">
              <div className="woocommerce-notices-wrapper" />
              <p className="woocommerce-result-count">
                Showing 1–9 of {
                  product.length
                } results
              </p>
              <form
                className="woocommerce-ordering"
                method="get"
                data-hs-cf-bound="true"
              >
                <select
                  name="orderby"
                  className="nice-select orderby"
                  aria-label="Shop order"
                  onChange={ sortByValue }
                  style={{ border: "#999 solid",height:"50px",  backgroundImage:
                  "linear-gradient(45deg, transparent 50%, gray 50%),linear-gradient(135deg, gray 50%, transparent 50%),radial-gradient(#ddd 70%, transparent 72%)",
                backgroundPosition:
                  " calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - .5em) .5em",
                backgroundSize:
                  "5px 5px,5px 5px,1.5em 1.5em",
                backgroundRepeat: "no-repeat" }}
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
                {/* <div className="nice-select orderby" tabIndex={0}>
                  <ul className="list">
                  {
                     Object.keys(listSort).map((item,index) => {
                      return(
                        <li data-value={item} key={index} className="option" onClick={ () => sortByValue(item) }>
                            {listSort[item]}
                        </li>
                      )
                    })
                  }
                   
                  </ul>
                </div> */}
                <input type="hidden" name="paged" defaultValue={1} />
              </form>
              <a
                href="/#"
                className="ibid-shop-filters-button btn btn-success hide-on-desktops"
              >
                <i className="fas fa-filter" /> Filters
              </a>
              <nav className="gridlist-toggle">
                <a href="/#" id="grid" title="Grid view">
                  <span className="dashicons dashicons-grid-view" />{" "}
                  <em>Grid view</em>
                </a>
                <a href="/#" id="list" title="List view" className="active">
                  <span className="dashicons dashicons-exerpt-view" />{" "}
                  <em>List view</em>
                </a>
              </nav>{" "}
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            {
              spinner()
            }
            <ul className="products columns-3 list">
            {
                product.map((item, index) => (
              <li className=" post-5467 product type-product status-publish has-post-thumbnail product_cat-protection-phones product_cat-console-gaming product_cat-data-cables-phones product_cat-mobile-phone-chargers product_cat-mobile-phones product_cat-phones product_cat-power-bank product_cat-sales product_cat-selfie-stickers product_cat-tablets product_cat-protection-tablets product_tag-black-friday product_tag-sales last instock sold-individually shipping-taxable purchasable product-type-auction">
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
                            className="button product_type_auction add_to_cart_button"
                            data-product_id={5467}
                            data-product_sku="BF002-1"
                            aria-label="Read more about “Product Out of Stock”"
                            rel="nofollow"
                          >
                            <i className="fa fa-gavel" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="#"
                                data-product-id={5467}
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
                                href=""
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
                                href=""
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
                        <div className="component quick-view hide-on-mobile">
                          <a
                            href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={5467}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                   
                    <a
                      className="woo_catalog_media_images"
                      title="Product Out of Stock"
                      href={urlOrigin+"/product/"+item.slug}
                    >
                      <img
                        width={300}
                        height={300}
                        src={BaseUrl+item.featured_image}
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src={BaseUrl+item.hover_featured_image}
                        alt="Product Out of Stock"
                      />
                       {
                          renderCountDownComponent(item.auction_end)
                       }
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a>
                       {item.name}{" "}
                      </a>
                    </h3>
                    <ShoppingCart product={item}/>
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
                        renderPrice(item.auction_end, item.price)
                       }
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                              data-quantity={1}
                              data-tooltip="Bid Now"
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={5467}
                              data-product_sku="BF002-1"
                              aria-label="Read more about “Product Out of Stock”"
                              rel="nofollow"
                            >
                              <i className="fa fa-gavel" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=5467"
                                  data-product-id={5467}
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
                          </div>
                          <div className="component quick-view">
                            <a
                              href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={5467}
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
                          href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                          data-quantity={1}
                          data-tooltip="Bid Now"
                          className="button product_type_auction add_to_cart_button"
                          data-product_id={5467}
                          data-product_sku="BF002-1"
                          aria-label="Read more about “Product Out of Stock”"
                          rel="nofollow"
                        >
                          <i className="fa fa-gavel" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=5467"
                              data-product-id={5467}
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
                      </div>
                      <div className="component quick-view">
                        <a
                          href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={5467}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
                ))
            }
              <li className="clearfix hide-on-mobile" />
            </ul>
            <nav className="woocommerce-pagination">
            {
            paginatePage()
           }
            </nav>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
