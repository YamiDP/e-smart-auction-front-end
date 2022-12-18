import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import {ShoppingCart} from "../Component/ShoppingCart"

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  const now = moment()
  const [parentCategory, setDataParentCategory] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response =   await axios.get(API['parentCategory'])
      const data = await response.data;
      setDataParentCategory(data);
      console.log(data)
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <WrapperContent propsBreadcum={{ show: true }} padding="1">
      <div data-vc-full-width="true" data-vc-full-width-init="true">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              {
            parentCategory.map((item, index) => (
              <><div className="woocommerce_categories2">
                <div className="products_category">
                  <div className="category item col-md-3 ">
                    <div
                      style={{ background: "radial-gradient(#5b75f7,#3b54d5)" }}
                      className="category-wrapper"
                    >
                      <a href="/#" className="#categoryid_51">
                        <span className="cat-name">{item.name}</span>
                      </a>
                      <br />
                      <span className="cat-count">
                        <strong>8</strong> Products
                      </span>
                      <br />
                      <div className="category-button ">
                        <a
                          href="https://ibid.modeltheme.com/product-category/phones/"
                          className="button"
                          title="View more"
                        >
                          <span>View all products</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id="categoryid_51"
                    className=" col-md-9 products_by_categories Phones"
                  >
                    <div className="woocommerce columns-2 ">
                      <ul className="products columns-2">
                      {
                       
                       item.firstSubCategories.map((item1, index3) => (
                         item1.secondSubCategories.map((item2, index4) => (
                           item2.products.map((product, index5) => (Number(index5) <= 3 &&  Number(index4) < 1 &&  Number(index3) < 1 && (
                        <li className=" first post-4472 product type-product status-publish has-post-thumbnail product_cat-protection-phones product_cat-console-gaming product_cat-data-cables-phones product_cat-mobile-phone-chargers product_cat-mobile-phones product_cat-phones product_cat-power-bank product_cat-selfie-stickers product_cat-tablets product_cat-protection-tablets product_tag-black-friday product_tag-sales last outofstock sold-individually shipping-taxable product-type-auction">
                          <div className="products-wrapper">
                            <div className="thumbnail-and-details">
                              <div className="overlay-container">
                                <div className="thumbnail-overlay" />
                                <div className="overlay-components">
                                  <div className="component add-to-cart">
                                    <a
                                    
                                      data-quantity={1}
                                      data-tooltip="View Auction"
                                      className="button product_type_auction"
                                      data-product_id={4472}
                                      data-product_sku="BF001"
                                      aria-label="Read more about “Desktop Gamer Las Vegas”"
                                      rel="nofollow"
                                    >
                                      <i className="fa fa-eye" />
                                    </a>
                                  </div>
                                  <div className="component wishlist hide-on-mobile">
                                    <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                                      <div
                                        className="yith-wcwl-add-button show"
                                        style={{ display: "block" }}
                                      >
                                        <a
                                          href="/shop/products-by-categories/?add_to_wishlist=4472"
                                          data-product-id={4472}
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
                                          style={{ visibility: "hidden" }} />
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
                                  <div className="component quick-view hide-on-mobile">
                                    <a
                                      href="/#"
                                      className="button yith-wcqv-button"
                                      data-tooltip="Quickview"
                                      data-product_id={4472}
                                    >
                                      <i className="fas fa-search" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="woo_catalog_media_images"
                                title="Desktop Gamer Las Vegas"
                                href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                              >
                                <img
                                  width={300}
                                  height={300}
                                  src={BaseUrl+product.featured_image}
                                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                  loading="lazy"
                                  sizes="(max-width: 300px) 100vw, 300px" />
                                <img
                                  className="woo_secondary_media_image"
                                  src={BaseUrl+product.hover_featured_image}
                                  alt="Desktop Gamer Las Vegas" />
                              </a>
                            </div>
                            <ShoppingCart product={product}/>
                            <span className="auction-bage" />
                            <div
                              className="woocommerce-title-metas"
                              style={{ height: 59 }}
                            >
                              <h3 className="archive-product-title">
                                <a href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/">
                                  {product.name}{" "}
                                </a>
                              </h3>
                              <div className="details-container">
                                <div className="details-price-container details-item">
                                  <div className="woocommerce-product-details__short-description">
                                    <p>
                                      The Ragdoll is a cat breed with blue eyes
                                      and a distinct colorpoint coat. It is a
                                      large and muscular semi-longhair cat with
                                      a soft and silky coat. Like all long
                                      haired cats, Ragdolls need grooming to
                                      ensure their fur does not mat.
                                    </p>
                                  </div>
                                  {
                                    ( moment(item.auction_end, 'YYYY-MM-DD HH:mm:ss') > now ?(
                                      <span className="price">
                                      Current Bid:{" "}
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                          
                                          </span>
                                          {new Intl.NumberFormat('vi-VN').format(item.current_bid_amount)}
                                        </bdi>
                                      </span>
                                    </span>
                                    ):
                                    <div>Auction Ended</div>
                                    )
                                  }
                                  <div className="details-review-container details-item" />
                                  <div className="bottom-components">
                                    <div className="component add-to-cart">
                                      <a
                                        href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                                        data-quantity={1}
                                        data-tooltip="View Auction"
                                        className="button product_type_auction"
                                        data-product_id={4472}
                                        data-product_sku="BF001"
                                        aria-label="Read more about “Desktop Gamer Las Vegas”"
                                        rel="nofollow"
                                      >
                                        <i className="fa fa-eye" />
                                      </a>
                                    </div>
                                    <div className="component wishlist">
                                      <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                                        <div
                                          className="yith-wcwl-add-button show"
                                          style={{ display: "block" }}
                                        >
                                          <a
                                            href="/shop/products-by-categories/?add_to_wishlist=4472"
                                            data-product-id={4472}
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
                                            style={{ visibility: "hidden" }} />
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
                                        data-product_id={4472}
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
                                    href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                                    data-quantity={1}
                                    data-tooltip="View Auction"
                                    className="button product_type_auction"
                                    data-product_id={4472}
                                    data-product_sku="BF001"
                                    aria-label="Read more about “Desktop Gamer Las Vegas”"
                                    rel="nofollow"
                                  >
                                    <i className="fa fa-eye" />
                                  </a>
                                </div>
                                <div className="component wishlist">
                                  <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                                    <div
                                      className="yith-wcwl-add-button show"
                                      style={{ display: "block" }}
                                    >
                                      <a
                                        href="/shop/products-by-categories/?add_to_wishlist=4472"
                                        data-product-id={4472}
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
                                        style={{ visibility: "hidden" }} />
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
                                    data-product_id={4472}
                                  >
                                    <i className="fas fa-search" />
                                  </a>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </li>
                            )))
                          ))    
                        ))
                      }
                      </ul>
                    </div>
                  </div>
                </div>
              </div><div className="clearfix" /></>
            ))
          }
          
            </div>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
