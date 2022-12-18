import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../../Configs/api.js"
import moment from 'moment'
import { CountDown } from "../../CountDown"
import {ShoppingCart} from "../../Component/ShoppingCart"

const BaseUrl ='https://e-smart-auction-server.herokuapp.com/'
const urlOrigin = window.location.origin.toString();
const now = moment()
export const LastAuction = () => {
  const [dataLastAuction, setDataLastAuction] = useState([]);
  const renderCountDownComponent = useCallback((time) => {
    if (dataLastAuction) {
      return <CountDown propsTimeCount={{show: true, time: time}}/>
    }
    // if the api status responses are succes you should not see the placeholder
    return <div>loading</div>
  
  }, [])
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response =   await axios.get(API['lastestAuction'])
    const data = await response.data;
    setDataLastAuction(data);
    console.log(data)
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid"
    >
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="title-subtile-holder">
              <h2 className="section-title ">Latest Auctions</h2>
              <div className="svg-border ">
                <svg
                  width={515}
                  height={25}
                  viewBox="0 0 275 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y={7} width={120} height={1} fill="#CCCCCC" />
                  <rect x={155} y={7} width={120} height={1} fill="#CCCCCC" />
                  <path
                    d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
                    fill="#2695FF"
                  />
                </svg>
              </div>
              <div className="section-subtitle" />
            </div>
            <div className="woocommerce columns-4 ">
              <ul className="products columns-4">
                {
                    dataLastAuction.map((item, index) => (
                      <li
                        key={index}
                        className="product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-accessories product_tag-gaming 
                        instock featured sold-individually shipping-taxable product-type-auction"
                      >
                        <div className="products-wrapper">
                          <div className="thumbnail-and-details">
                            <div className="overlay-container">
                              <div className="thumbnail-overlay" />
                              <div className="overlay-components">
                                <div className="component add-to-cart">
                                  <a
                                    href={item.link}
                                    data-quantity={1}
                                    data-tooltip="Bid Now"
                                    className="button product_type_auction"
                                    data-product_id={4331}
                                    data-product_sku="BF006"
                                    aria-label="Read more about “Dual SIM Smartphone”"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-gavel" />
                                  </a>
                                </div>
                                <div className="component wishlist hide-on-mobile">
                                  <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4331">
                                    <div
                                      className="yith-wcwl-add-button show"
                                      style={{ display: "block" }}
                                    >
                                      <a
                                        href="/?add_to_wishlist=4331"
                                        data-product-id={4331}
                                        data-product-type="auction"
                                        className="add_to_wishlist single_add_to_wishlist button "
                                        data-tooltip="Add to Wishlist"
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                      <img
                                        src={item.imgLoading}
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
                                        href={item.wishlisturl}
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
                                        href={item.wishlisturl}
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
                                    data-product_id={4331}
                                  >
                                    <i className="fas fa-search" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <a
                              className="woo_catalog_media_images"
                              title="Dual SIM Smartphone ffsfsdfds"
                              href="#"
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
                                alt="Dual SIM Smartphone"
                              />
                              {
                                 renderCountDownComponent(item.auction_end)
                              }
                            </a>
                          </div>
                          <ShoppingCart product={item}/>
                          <span className="auction-bage" />
                          <div className="woocommerce-title-metas" >
                            <h3 className="archive-product-title">
                              <a href={urlOrigin+"/product/"+item.slug}>
                                {item.name}{" "}
                              </a>
                            </h3>
                            <div className="details-container">
                              <div className="details-price-container details-item">
                                {moment(item.auction_end, 'YYYY-MM-DD HH:mm:ss') > now  ? (
                                  <span className="price">
                                      Current Bid:{" "}
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                       
                                      {new Intl.NumberFormat('vi-VN').format(item.current_bid_amount)}
                                        <span className="woocommerce-Price-currencySymbol">
                                          VND
                                        </span>
                                      </bdi>
                                    </span>
                                  </span>
                                ): (
                                  <div>Auction Ended</div>
                                )}
                                <div className="details-review-container details-item" />
                                <div className="bottom-components">
                                  <div className="component add-to-cart">
                                    <a
                                      href="#"
                                      data-quantity={1}
                                      data-tooltip="Bid Now"
                                      className="button product_type_auction"
                                      data-product_id={4331}
                                      data-product_sku="BF006"
                                      aria-label="Read more about “Dual SIM Smartphone”"
                                      rel="nofollow"
                                    >
                                      <i className="fa fa-gavel" />
                                    </a>
                                  </div>
                                  <div className="component wishlist">
                                    <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4331">
                                      <div
                                        className="yith-wcwl-add-button show"
                                        style={{ display: "block" }}
                                      >
                                        <a
                                          href="/?add_to_wishlist=4331"
                                          data-product-id={4331}
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
                                      data-product_id={4331}
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
                                  href="#"
                                  data-quantity={1}
                                  data-tooltip="Bid Now"
                                  className="button product_type_auction"
                                  data-product_id={4331}
                                  data-product_sku="BF006"
                                  aria-label="Read more about “Dual SIM Smartphone”"
                                  rel="nofollow"
                                >
                                  <i className="fa fa-gavel" />
                                </a>
                              </div>
                              <div className="component wishlist">
                                <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4331">
                                  <div
                                    className="yith-wcwl-add-button show"
                                    style={{ display: "block" }}
                                  >
                                    <a
                                      href="/?add_to_wishlist=4331"
                                      data-product-id={4331}
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
                                  data-product_id={4331}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
