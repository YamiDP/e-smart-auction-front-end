import { useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../../Configs/api"
import moment from 'moment'
export const TabMore = ({productDetail, baseURL, seller, productBySeller, allSize, allColor, bids}) => {

  return (
    <div className="woocommerce-tabs wc-tabs-wrapper">
      <ul className="tabs wc-tabs wc-tabs-5" role="tablist">
        <li
          className="description_tab active"
          id="tab-title-description"
          role="tab"
          aria-controls="tab-description"
        >
          <a href="#tab-description" style={{ height: 82 }}>
            Description
          </a>
        </li>
        <li
          className="additional_information_tab"
          id="tab-title-additional_information"
          role="tab"
          aria-controls="tab-additional_information"
        >
          <a href="#tab-additional_information" style={{ height: 82 }}>
            Additional information
          </a>
        </li>
        <li
          className="simle_auction_history_tab"
          id="tab-title-simle_auction_history"
          role="tab"
          aria-controls="tab-simle_auction_history"
        >
          <a href="#tab-simle_auction_history" style={{ height: 82 }}>
            Auction history
          </a>
        </li>
        <li
          className="seller_tab"
          id="tab-title-seller"
          role="tab"
          aria-controls="tab-seller"
        >
          <a href="#tab-seller" style={{ height: 82 }}>
            Vendor Info
          </a>
        </li>
        <li
          className="more_seller_product_tab"
          id="tab-title-more_seller_product"
          role="tab"
          aria-controls="tab-more_seller_product"
        >
          <a href="#tab-more_seller_product" style={{ height: 82 }}>
            More from Vendor
          </a>
        </li>
      </ul>
      <div
        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
        id="tab-description"
        role="tabpanel"
        aria-labelledby="tab-title-description"
        style={{}}
      >
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: productDetail.description_detail }} />
      </div>
      <div
        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
        id="tab-additional_information"
        role="tabpanel"
        aria-labelledby="tab-title-additional_information"
        style={{ display: "none" }}
      >
        <h2>Additional information</h2>
        <table className="woocommerce-product-attributes shop_attributes">
          <tbody>
            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
              <th className="woocommerce-product-attributes-item__label">
                Color
              </th>
              <td className="woocommerce-product-attributes-item__value">
              {allColor.map((item, index) => (item.id == productDetail.color_id &&(
                  item.name
                )))
                }
              </td>
            </tr>
            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_condition">
              <th className="woocommerce-product-attributes-item__label">
                Condition
              </th>
              <td className="woocommerce-product-attributes-item__value">
                <p>{productDetail.condition}</p>
              </td>
            </tr>
            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
              <th className="woocommerce-product-attributes-item__label">
                Size
              </th>
              <td className="woocommerce-product-attributes-item__value">
                <p>{allSize.map((item, index) => (item.id == productDetail.size_id &&(
                  item.name
                )))
                }</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--simle_auction_history panel entry-content wc-tab"
        id="tab-simle_auction_history"
        role="tabpanel"
        aria-labelledby="tab-title-simle_auction_history"
        style={{ display: "none" }}
      >
        <h2>Auction History</h2>
        <p>Auction has finished</p>
        <p>
          Product sold for buy now price: <span>1,450.00</span>
        </p>
        <table
          id="auction-history-table-4458"
          className="auction-history-table"
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Bid</th>
              <th>User</th>
              <th>Auto</th>
            </tr>
          </thead>
          <tbody>
            {
              bids.map((item, index)=>(
                <tr>
                <td className="date">{moment(item.created_date).format('MM/DD/YYYY hh:mm') }</td>
                <td className="bid">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol"></span>
                      {new Intl.NumberFormat('vi-VN').format(item.current_bid)}
                    </bdi>
                  </span>
                </td>
                <td className="username">{item.buyer.username}</td>{" "}
                <td className="proxy" />
              </tr>
              ))
            }
           
                
          </tbody>
        
        </table>{" "}
      </div>
      <div
        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--seller panel entry-content wc-tab"
        id="tab-seller"
        role="tabpanel"
        aria-labelledby="tab-title-seller"
        style={{ display: "none" }}
      >
        <h2>The Vendor</h2>
        <ul className="list-unstyled">
          <li className="store-name">
            <span>Store Name:</span>
            <span className="details">{seller.company_name} </span>
          </li>
          <li className="seller-name">
            <span>Vendor: </span>
            <span className="details">
              <a href="https://ibid.modeltheme.com/store/admin/">
                {seller.fullname}
              </a>{" "}
            </span>
          </li>
          <li className="store-address">
            <span>
              <b>Address:</b>
            </span>
            <span className="details">{seller.housenumber_street} </span>
          </li>
          <li className="clearfix">No ratings found yet! </li>
        </ul>
      </div>
      <div
        className="woocommerce-Tabs-panel woocommerce-Tabs-panel--more_seller_product panel entry-content wc-tab"
        id="tab-more_seller_product"
        role="tabpanel"
        aria-labelledby="tab-title-more_seller_product"
        style={{ display: "none" }}
      >
        <ul className="products columns-3">
        {
              productBySeller.map((product, index1) => (
              <li className=" first post-4452 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-black-friday product_tag-sales instock sold-individually shipping-taxable product-type-auction">
              <div className="products-wrapper">
                <div className="thumbnail-and-details">
                  <div className="overlay-container">
                    <div className="thumbnail-overlay" />
                    <div className="overlay-components">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/bluetooth-headphones/"
                          data-quantity={1}
                          data-tooltip="Bid Now"
                          className="button product_type_auction"
                          data-product_id={4452}
                          data-product_sku=""
                          aria-label="Read more about “Bluetooth Headphones”"
                          rel="nofollow"
                        >
                          <i className="fa fa-gavel" />
                        </a>
                      </div>
                      <div className="component wishlist hide-on-mobile">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4452">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product/laptop-latitude-d3300/?add_to_wishlist=4452"
                              data-product-id={4452}
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
                      <div className="component quick-view hide-on-mobile">
                        <a
                          href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4452}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    className="woo_catalog_media_images"
                    title="Bluetooth Headphones"
                    href=""
                  >
                    <img
                      width={300}
                      height={300}
                      src={baseURL+product.featured_image}
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      loading="lazy"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <img
                      className="woo_secondary_media_image"
                      src={baseURL+product.hover_featured_image}
                      alt="Bluetooth Headphones"
                    />
                    <div
                      className="countdownv2_holder "
                      data-insert-date-start=""
                      data-insert-date="2022-12-04 00:00:00"
                      data-unique-id="countdown_636bf00b2f51f"
                      data-countdown-direction="false"
                      data-date-format-redux="DHMS"
                      data-gmt-offset={0}
                    >
                      <div className="countdownv2_inner_holder">
                        <p className="no-margin ibid-countdown-pre-text">
                          Time left:
                        </p>
                        <div
                          className="countdownv2 clock is-countdown"
                          id="countdown_636bf00b2f51f"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">19</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">14</span>
                              <span className="countdown-period">Hours</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">51</span>
                              <span className="countdown-period">Minutes</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">34</span>
                              <span className="countdown-period">Seconds</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <span className="auction-bage" />
                <div className="woocommerce-title-metas" style={{ height: 111 }}>
                  <h3 className="archive-product-title">
                    <a href="https://ibid.modeltheme.com/product/bluetooth-headphones/">
                    {product.name}{" "}
                    </a>
                  </h3>
                  <div className="details-container">
                    <div className="details-price-container details-item">
                      <div className="woocommerce-product-details__short-description">
                        <p>
                          Product a reality sandwich before you walk back in that
                          boardroom fire up your browser, so come up with
                          something buzzworthy, for it’s about managing
                          expectations yet baseline into the weeds.
                        </p>
                      </div>
                      <span className="price">
                        Current Bid:{" "}
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              
                            </span>
                            {new Intl.NumberFormat('vi-VN').format(product.price)}
                          </bdi>
                        </span>
                      </span>
                      <div className="details-review-container details-item" />
                      <div className="bottom-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/bluetooth-headphones/"
                            data-quantity={1}
                            data-tooltip="Bid Now"
                            className="button product_type_auction"
                            data-product_id={4452}
                            data-product_sku=""
                            aria-label="Read more about “Bluetooth Headphones”"
                            rel="nofollow"
                          >
                            <i className="fa fa-gavel" />
                          </a>
                        </div>
                        <div className="component wishlist">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4452">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product/laptop-latitude-d3300/?add_to_wishlist=4452"
                                data-product-id={4452}
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
                            data-product_id={4452}
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
                        href="https://ibid.modeltheme.com/product/bluetooth-headphones/"
                        data-quantity={1}
                        data-tooltip="Bid Now"
                        className="button product_type_auction"
                        data-product_id={4452}
                        data-product_sku=""
                        aria-label="Read more about “Bluetooth Headphones”"
                        rel="nofollow"
                      >
                        <i className="fa fa-gavel" />
                      </a>
                    </div>
                    <div className="component wishlist">
                      <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4452">
                        <div
                          className="yith-wcwl-add-button show"
                          style={{ display: "block" }}
                        >
                          <a
                            href="/product/laptop-latitude-d3300/?add_to_wishlist=4452"
                            data-product-id={4452}
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
                        data-product_id={4452}
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
  );
};
