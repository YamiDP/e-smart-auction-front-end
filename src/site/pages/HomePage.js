import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Slider from "../shared/components/Slider";
import { useHttpClient } from "../shared/hooks/http-hook";
import formatToCurrency from "../utils/formatToCurrency";
import {
  calculateDaysDifferenceBetweenTwoDays,
  calculateHoursDifferenceBetweenTwoDays,
  calculateMinutesDifferenceBetweenTwoDays,
  calculateSecondsDifferenceBetweenTwoDays,
} from "../utils/dateHandling";

export default function HomePage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [parentCategoryList, setParentCategoryList] = useState([]);
  const [lastestAuctionList, setLastestAuctionList] = useState([]);

  // function fetchOneProductByFirstSubCategoryId(firstSubCategory_id) {
  //   const fetchProduct = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${process.env.REACT_APP_BACKEND_URL}home/get-one-product-by-firstsubcategory-id?firstSubCategory_id=2`
  //       );

  //       console.log(responseData);

  //     } catch (err) {}
  //   };
  //   fetchProduct();
  // }

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}menu/get-all-parent-categories`
        );
        setParentCategoryList(responseData);
      } catch (err) {}
    };

    const fetchLastestAuctions = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}home/get-lastest-auction`
        );
        setLastestAuctionList(responseData);
      } catch (err) {}
    };

    fetchPlaces();
    fetchLastestAuctions();
  }, [sendRequest]);

  return (
    <>
      <div>
        <div id="page" className="hfeed site">
          <div className="top-header">
            <div className="container">
              <div className="row" />
            </div>
          </div>

          <Header />

          {/* Place either at the bottom in the <head> of your page or inside your CSS */}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n        .flex-caption {\n          width: 96%;\n          padding: 2%;\n          left: 0;\n          bottom: 0;\n          background: rgba(0, 0, 0, 0.5);\n          color: #fff;\n          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);\n          font-size: 14px;\n          line-height: 18px;\n        }\n      ",
            }}
          />
          {/* Place somewhere in the <body> of your page */}
          <Slider />

          <div id="primary" className="no-padding content-area no-sidebar">
            <div className="container">
              <main id="main" className="col-md_12 site-main main-content">
                <article
                  id="post-22"
                  className="post-22 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <div className="vc_row wpb_row vc_row-fluid vc_custom_1567497783395">
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1566992943471">
                          <div className="wpb_wrapper">
                            <div className="mt-icon-listgroup-item wow">
                              <a href="#">
                                <div className="mt-icon-listgroup-holder">
                                  <div className="mt-icon-listgroup-icon-holder-inner">
                                    <img
                                      alt="danh sách-hình ảnh"
                                      style={{ marginRight: "20px" }}
                                      className="mt-image-list"
                                      src="/images/support_icons.png"
                                    />
                                  </div>
                                  <div className="mt-icon-listgroup-content-holder-inner">
                                    <p
                                      className="mt-icon-listgroup-title"
                                      style={{
                                        fontSize: "20px",
                                        color: "#343e47",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Trung tâm cuộc gọi
                                        </font>
                                      </font>
                                    </p>
                                    <p
                                      className="mt-icon-listgroup-text"
                                      style={{
                                        fontSize: "14px",
                                        color: "#606060",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Hiệp lực hoàn toàn
                                        </font>
                                      </font>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1566992948720">
                          <div className="wpb_wrapper">
                            <div className="mt-icon-listgroup-item wow">
                              <a href="#">
                                <div className="mt-icon-listgroup-holder">
                                  <div className="mt-icon-listgroup-icon-holder-inner">
                                    <img
                                      alt="danh sách-hình ảnh"
                                      style={{ marginRight: "20px" }}
                                      className="mt-image-list"
                                      src="/images/tracking_icons.png"
                                    />
                                  </div>
                                  <div className="mt-icon-listgroup-content-holder-inner">
                                    <p
                                      className="mt-icon-listgroup-title"
                                      style={{
                                        fontSize: "20px",
                                        color: "#343e47",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Theo dõi đơn hàng
                                        </font>
                                      </font>
                                    </p>
                                    <p
                                      className="mt-icon-listgroup-text"
                                      style={{
                                        fontSize: "14px",
                                        color: "#606060",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Trao quyền một cách khách quan
                                        </font>
                                      </font>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1566992955232">
                          <div className="wpb_wrapper">
                            <div className="mt-icon-listgroup-item wow">
                              <a href="#">
                                <div className="mt-icon-listgroup-holder">
                                  <div className="mt-icon-listgroup-icon-holder-inner">
                                    <img
                                      alt="danh sách-hình ảnh"
                                      style={{ marginRight: "20px" }}
                                      className="mt-image-list"
                                      src="/images/deliveries_icons.png"
                                    />
                                  </div>
                                  <div className="mt-icon-listgroup-content-holder-inner">
                                    <p
                                      className="mt-icon-listgroup-title"
                                      style={{
                                        fontSize: "20px",
                                        color: "#343e47",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Giao hàng nhanh nhất
                                        </font>
                                      </font>
                                    </p>
                                    <p
                                      className="mt-icon-listgroup-text"
                                      style={{
                                        fontSize: "14px",
                                        color: "#606060",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Giải phóng phương tiện một cách hiệu
                                          quả
                                        </font>
                                      </font>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner vc_custom_1566992960725">
                          <div className="wpb_wrapper">
                            <div className="mt-icon-listgroup-item wow">
                              <a href="#">
                                <div className="mt-icon-listgroup-holder">
                                  <div className="mt-icon-listgroup-icon-holder-inner">
                                    <img
                                      alt="danh sách-hình ảnh"
                                      style={{ marginRight: "20px" }}
                                      className="mt-image-list"
                                      src="/images/money_icons.png"
                                    />
                                  </div>
                                  <div className="mt-icon-listgroup-content-holder-inner">
                                    <p
                                      className="mt-icon-listgroup-title"
                                      style={{
                                        fontSize: "20px",
                                        color: "#343e47",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Mua ngay lập tức
                                        </font>
                                      </font>
                                    </p>
                                    <p
                                      className="mt-icon-listgroup-text"
                                      style={{
                                        fontSize: "14px",
                                        color: "#606060",
                                      }}
                                    >
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Podcasting hoạt động
                                        </font>
                                      </font>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1567497897894"
                      style={{
                        position: "relative",
                        left: "-59.6px",
                        boxSizing: "border-box",
                        width: "1519px",
                        maxWidth: "1519px",
                        paddingLeft: "59.6px",
                        paddingRight: "59.4px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="title-subtile-holder">
                              <h2 className="section-title">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Các cuộc đấu giá mới nhất
                                  </font>
                                </font>
                              </h2>
                              <div className="svg-border">
                                <svg
                                  width={515}
                                  height={25}
                                  viewBox="0 0 275 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <rect
                                    x={155}
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <path
                                    d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
                                    fill="#2695FF"
                                  />
                                </svg>
                              </div>
                              <div className="section-subtitle" />
                            </div>
                            <div className="woocommerce columns-4">
                              <ul className="products columns-4">
                                {lastestAuctionList.map((product, index) => {
                                  return (
                                    <li className="first post-4331 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-accessories product_tag-gaming instock featured sold-individually shipping-taxable product-type-auction">
                                      <div className="products-wrapper">
                                        <div className="thumbnail-and-details">
                                          <div className="overlay-container">
                                            <div className="thumbnail-overlay" />
                                            <div className="overlay-components">
                                              <div className="component add-to-cart">
                                                {product.auction_end <
                                                Date.now() ? (
                                                  <a
                                                    href="#"
                                                    className="button yith-wcqv-button"
                                                    data-tooltip="Quickview"
                                                    data-product_id={4473}
                                                  >
                                                    <i className="fas fa-search" />
                                                  </a>
                                                ) : (
                                                  <a
                                                    href="#"
                                                    data-quantity="1"
                                                    data-tooltip="Bid Now"
                                                    class="button product_type_auction"
                                                    data-product_id="13545"
                                                    data-product_sku="BF004-1"
                                                    aria-label="Read more about “Auto Bidding (Proxy)”"
                                                    rel="nofollow"
                                                  >
                                                    <i class="fa fa-gavel"></i>
                                                  </a>
                                                )}
                                              </div>
                                              <div className="component quick-view hide-on-mobile">
                                                <a
                                                  href="#"
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
                                            title="{product.name}"
                                            href="#"
                                          >
                                            <img
                                              width={300}
                                              height={300}
                                              src="/images/mobile_prod1-1-300x300.jpg"
                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                              alt=""
                                              loading="lazy"
                                              srcSet="
                                  /images/mobile_prod1-1-300x300.jpg 300w,
                                  /images/mobile_prod1-1-350x350.jpg 350w,
                                  /images/mobile_prod1-1-110x110.jpg 110w,
                                  /images/mobile_prod1-1-400x400.jpg 400w,
                                  /images/mobile_prod1-1.jpg         600w,
                                  /images/mobile_prod1-1-70x70.jpg    70w,
                                  /images/mobile_prod1-1-200x200.jpg 200w,
                                  /images/mobile_prod1-1-150x150.jpg 150w
                                "
                                              sizes="(max-width: 300px) 100vw, 300px"
                                            />
                                            <img
                                              className="woo_secondary_media_image"
                                              src="/images/desktop-product-1-400x400.jpg"
                                              alt="{product.name}"
                                            />
                                            <div
                                              className="countdownv2_holder"
                                              data-insert-date-start
                                              data-insert-date="2022-12-01 00:00:00"
                                              data-unique-id="countdown_6341ae12a7f43"
                                              data-countdown-direction="false"
                                              data-date-format-redux="DHMS"
                                              data-gmt-offset={0}
                                            >
                                              <div className="countdownv2_inner_holder">
                                                <p className="no-margin ibid-countdown-pre-text">
                                                  <font
                                                    style={{
                                                      verticalAlign: "inherit",
                                                    }}
                                                  >
                                                    <font
                                                      style={{
                                                        verticalAlign:
                                                          "inherit",
                                                      }}
                                                    >
                                                      Thời gian còn lại:
                                                    </font>
                                                  </font>
                                                </p>
                                                <div
                                                  className="countdownv2 clock is-countdown"
                                                  id="countdown_6341ae12a7f43"
                                                >
                                                  <span className="countdown-row countdown-show4">
                                                    <span className="countdown-section">
                                                      <span className="countdown-amount">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            {calculateDaysDifferenceBetweenTwoDays(
                                                              new Date(
                                                                product.auction_end
                                                              ),
                                                              new Date()
                                                            )}
                                                          </font>
                                                        </font>
                                                      </span>
                                                      <span className="countdown-period">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            Ngày
                                                          </font>
                                                        </font>
                                                      </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                      <span className="countdown-amount">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            {calculateHoursDifferenceBetweenTwoDays(
                                                              new Date(
                                                                product.auction_end
                                                              ),
                                                              new Date()
                                                            )}
                                                          </font>
                                                        </font>
                                                      </span>
                                                      <span className="countdown-period">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            Giờ
                                                          </font>
                                                        </font>
                                                      </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                      <span className="countdown-amount">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            {calculateMinutesDifferenceBetweenTwoDays(
                                                              new Date(
                                                                product.auction_end
                                                              ),
                                                              new Date()
                                                            )}
                                                          </font>
                                                        </font>
                                                      </span>
                                                      <span className="countdown-period">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            Phút
                                                          </font>
                                                        </font>
                                                      </span>
                                                    </span>
                                                    <span className="countdown-section">
                                                      <span className="countdown-amount">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            {calculateSecondsDifferenceBetweenTwoDays(
                                                              new Date(
                                                                product.auction_end
                                                              ),
                                                              new Date()
                                                            )}
                                                          </font>
                                                        </font>
                                                      </span>
                                                      <span className="countdown-period">
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        >
                                                          <font
                                                            style={{
                                                              verticalAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            Giây
                                                          </font>
                                                        </font>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <span className="auction-bage" />
                                        <div
                                          className="woocommerce-title-metas"
                                          style={{ height: "111px" }}
                                        >
                                          <h3 className="archive-product-title">
                                            <a href="#">
                                              <font
                                                style={{
                                                  verticalAlign: "inherit",
                                                }}
                                              >
                                                <font
                                                  style={{
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  {product.name}
                                                </font>
                                              </font>
                                            </a>
                                          </h3>
                                          <div className="details-container">
                                            <div className="details-price-container details-item">
                                              <div className="woocommerce-product-details__short-description">
                                                <p>
                                                  Samsung Galaxy S9 smartphone
                                                  was launched in March 2018.
                                                  The phone comes with a
                                                  5.80-inch touchscreen display
                                                  with a resolution of 1440
                                                  pixels by 2960 pixels at a PPI
                                                  of 568 pixels per inch.
                                                  Samsung Galaxy S9 price in
                                                  India starts from Rs. 51,990.
                                                </p>
                                                <p>
                                                  The Samsung Galaxy S9 runs
                                                  Android 8.0 and is powered by
                                                  a 3000mAh non removable
                                                  battery. It measures 147.70 x
                                                  68.70 x 8.50 (height x width x
                                                  thickness) and weighs 163.00
                                                  grams.
                                                </p>
                                              </div>
                                              <span className="price">
                                                <font
                                                  style={{
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  <font
                                                    style={{
                                                      verticalAlign: "inherit",
                                                    }}
                                                  >
                                                    Giá thầu hiện tại:
                                                  </font>
                                                </font>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">
                                                      <font
                                                        style={{
                                                          verticalAlign:
                                                            "inherit",
                                                        }}
                                                      >
                                                        <font
                                                          style={{
                                                            verticalAlign:
                                                              "inherit",
                                                          }}
                                                        ></font>
                                                      </font>
                                                    </span>
                                                    <font
                                                      style={{
                                                        verticalAlign:
                                                          "inherit",
                                                      }}
                                                    >
                                                      <font
                                                        style={{
                                                          verticalAlign:
                                                            "inherit",
                                                        }}
                                                      >
                                                        {product.auction_end <
                                                        Date.now()
                                                          ? "Phiên đấu giá đã kết thúc"
                                                          : `${formatToCurrency(
                                                              product.current_bid_amount
                                                            )}đ`}
                                                      </font>
                                                    </font>
                                                  </bdi>
                                                </span>
                                              </span>
                                              <div className="details-review-container details-item" />
                                              <div className="bottom-components">
                                                <div className="component add-to-cart">
                                                  {product.auction_end <
                                                  Date.now() ? (
                                                    <a
                                                      href="#"
                                                      className="button yith-wcqv-button"
                                                      data-tooltip="Quickview"
                                                      data-product_id={4473}
                                                    >
                                                      <i className="fas fa-search" />
                                                    </a>
                                                  ) : (
                                                    <a
                                                      href="#"
                                                      data-quantity="1"
                                                      data-tooltip="Bid Now"
                                                      class="button product_type_auction"
                                                      data-product_id="13545"
                                                      data-product_sku="BF004-1"
                                                      aria-label="Read more about “Auto Bidding (Proxy)”"
                                                      rel="nofollow"
                                                    >
                                                      <i class="fa fa-gavel"></i>
                                                    </a>
                                                  )}
                                                </div>
                                                <div className="component quick-view">
                                                  <a
                                                    href="#"
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
                                            <div className="component quick-view">
                                              <a
                                                href="#"
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
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1565679559621"
                      style={{
                        position: "relative",
                        left: "-59.6px",
                        boxSizing: "border-box",
                        width: "1519px",
                        maxWidth: "1519px",
                        paddingLeft: "59.6px",
                        paddingRight: "59.4px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner vc_custom_1496911267002">
                          <div className="wpb_wrapper">
                            <div className="masonry_banners banners_column">
                              <div className="vc_col-md-6">
                                <div
                                  className="masonry_banner default-skin"
                                  style={{
                                    backgroundColor: "#9e6e3b !important",
                                  }}
                                >
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/masonry-banner111-1024x466.jpg"
                                      alt="Bullets Wireless"
                                    />
                                    <div className="masonry_holder">
                                      <h3 className="category_name">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Bullets Wireless
                                          </font>
                                        </font>
                                      </h3>
                                      <p className="category_count">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            20 sản phẩm
                                          </font>
                                        </font>
                                      </p>
                                      <span className="read-more">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            XEM THÊM
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  className="masonry_banner dark-skin"
                                  style={{
                                    backgroundColor: "#252525 !important",
                                  }}
                                >
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/masonry-banner33332-1-1024x653.jpg"
                                      alt="Máy bay không người lái"
                                    />
                                    <div className="masonry_holder">
                                      <h3 className="category_name">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Drone
                                          </font>
                                        </font>
                                      </h3>
                                      <p className="category_count">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            13 sản phẩm
                                          </font>
                                        </font>
                                      </p>
                                      <span className="read-more">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            XEM THÊM
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="vc_col-md-6">
                                <div className="masonry_banner dark-skin">
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/masonry-banner222-1-1024x653.jpg"
                                      alt="Tai nghe"
                                    />
                                    <div className="masonry_holder">
                                      <h3 className="category_name">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Tai nghe
                                          </font>
                                        </font>
                                      </h3>
                                      <p className="category_count">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            30 sản phẩm
                                          </font>
                                        </font>
                                      </p>
                                      <span className="read-more">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            XEM THÊM
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div className="masonry_banner default-skin">
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/masonry-banner444-1-1024x466.jpg"
                                      alt="Sạc không dây"
                                    />
                                    <div className="masonry_holder">
                                      <h3 className="category_name">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Sạc không dây
                                          </font>
                                        </font>
                                      </h3>
                                      <p className="category_count">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            11 sản phẩm
                                          </font>
                                        </font>
                                      </p>
                                      <span className="read-more">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            XEM THÊM
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1567498077044"
                      style={{
                        position: "relative",
                        left: "-59.6px",
                        boxSizing: "border-box",
                        width: "1519px",
                        maxWidth: "1519px",
                        paddingLeft: "59.6px",
                        paddingRight: "59.4px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            {parentCategoryList.map((parentCategory, index) => {
                              if (
                                parentCategory?.firstSubCategories.length <= 0
                              ) {
                                return <></>;
                              }

                              return (
                                <>
                                  <div
                                    key={index}
                                    className="woocommerce_categories2"
                                  >
                                    <div className="products_category">
                                      <div className="category item col-md-3">
                                        <div
                                          style={{
                                            background:
                                              "radial-gradient(#5b75f7, #3b54d5)",
                                          }}
                                          className="category-wrapper"
                                        >
                                          <a className="#categoryid_51">
                                            <span className="cat-name">
                                              <font
                                                style={{
                                                  verticalAlign: "inherit",
                                                }}
                                              >
                                                <font
                                                  style={{
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  {parentCategory.name}
                                                </font>
                                              </font>
                                            </span>
                                          </a>
                                          <br />
                                          <span className="cat-count">
                                            <strong>
                                              <font
                                                style={{
                                                  verticalAlign: "inherit",
                                                }}
                                              >
                                                <font
                                                  style={{
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  8
                                                </font>
                                              </font>
                                            </strong>
                                            <font
                                              style={{
                                                verticalAlign: "inherit",
                                              }}
                                            >
                                              <font
                                                style={{
                                                  verticalAlign: "inherit",
                                                }}
                                              >
                                                Sản phẩm
                                              </font>
                                            </font>
                                          </span>
                                          <br />
                                          <div className="category-button">
                                            <a
                                              href="#"
                                              className="button"
                                              title="Xem thêm"
                                            >
                                              <span>
                                                <font
                                                  style={{
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  <font
                                                    style={{
                                                      verticalAlign: "inherit",
                                                    }}
                                                  >
                                                    XEM TẤT CẢ CÁC MỤC
                                                  </font>
                                                </font>
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        id="categoryid_51"
                                        className="col-md-9 products_by_categories Phones"
                                      >
                                        <div className="woocommerce columns-2">
                                          <ul className="products columns-2">
                                            {parentCategory.firstSubCategories.map(
                                              (firstSubCategory, index) => {
                                                const secondSubCategory =
                                                  firstSubCategory
                                                    ?.secondSubCategories[0];

                                                const product =
                                                  secondSubCategory
                                                    ?.products[0];

                                                if (!product) {
                                                  return <></>;
                                                }

                                                if (index > 4) {
                                                  return;
                                                }

                                                return (
                                                  <>
                                                    <li className="first post-4473 product type-product status-publish has-post-thumbnail product_cat-phones product_tag-black-friday product_tag-sales last outofstock sold-individually shipping-taxable product-type-auction">
                                                      <div className="products-wrapper">
                                                        <div className="thumbnail-and-details">
                                                          <div className="overlay-container">
                                                            <div className="thumbnail-overlay" />
                                                            <div className="overlay-components">
                                                              <div className="component add-to-cart">
                                                                <a
                                                                  href="#"
                                                                  data-quantity={
                                                                    1
                                                                  }
                                                                  data-tooltip="View Auction"
                                                                  className="button product_type_auction"
                                                                  data-product_id={
                                                                    4473
                                                                  }
                                                                  data-product_sku="BF002"
                                                                  aria-label="Read more about “Galaxy S10+ Dual SIM”"
                                                                  rel="nofollow"
                                                                >
                                                                  <i className="fa fa-eye" />
                                                                </a>
                                                              </div>
                                                              <div className="component quick-view hide-on-mobile">
                                                                <a
                                                                  href="#"
                                                                  className="button yith-wcqv-button"
                                                                  data-tooltip="Quickview"
                                                                  data-product_id={
                                                                    4473
                                                                  }
                                                                >
                                                                  <i className="fas fa-search" />
                                                                </a>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <a
                                                            className="woo_catalog_media_images"
                                                            title="Galaxy S10 + Hai SIM"
                                                            href="#"
                                                          >
                                                            <img
                                                              width={300}
                                                              height={300}
                                                              src="/images/phone-cat1-300x300.jpg"
                                                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                              alt=""
                                                              loading="lazy"
                                                              srcSet="
                                        /images/phone-cat1-300x300.jpg    300w,
                                        /images/phone-cat1-200x200.jpg    200w,
                                        /images/phone-cat1-600x600.jpg    600w,
                                        /images/phone-cat1-150x150.jpg    150w,
                                        /images/phone-cat1-768x768.jpg    768w,
                                        /images/phone-cat1-1024x1024.jpg 1024w,
                                        /images/phone-cat1-350x350.jpg    350w,
                                        /images/phone-cat1-110x110.jpg    110w,
                                        /images/phone-cat1-400x400.jpg    400w,
                                        /images/phone-cat1-70x70.jpg       70w,
                                        /images/phone-cat1.jpg           1080w
                                      "
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                            <img
                                                              className="woo_secondary_media_image"
                                                              src="/images/electronic-cat1-400x400.jpg"
                                                              alt="Galaxy S10 + Hai SIM"
                                                            />
                                                          </a>
                                                        </div>
                                                        <span className="auction-bage" />
                                                        <div
                                                          className="woocommerce-title-metas"
                                                          style={{
                                                            height: "59px",
                                                          }}
                                                        >
                                                          <h3 className="archive-product-title">
                                                            <a href="#">
                                                              <font
                                                                style={{
                                                                  verticalAlign:
                                                                    "inherit",
                                                                }}
                                                              >
                                                                <font
                                                                  style={{
                                                                    verticalAlign:
                                                                      "inherit",
                                                                  }}
                                                                >
                                                                  {product.name}
                                                                </font>
                                                              </font>
                                                            </a>
                                                          </h3>
                                                          <div className="details-container">
                                                            <div className="details-price-container details-item">
                                                              <div className="woocommerce-product-details__short-description">
                                                                <p>
                                                                  Bring to the
                                                                  table win-win
                                                                  survival
                                                                  strategies to
                                                                  ensure
                                                                  proactive
                                                                  domination. At
                                                                  the end of the
                                                                  day. Override
                                                                  the digital
                                                                  divide with
                                                                </p>
                                                              </div>
                                                              <font
                                                                style={{
                                                                  verticalAlign:
                                                                    "inherit",
                                                                }}
                                                              >
                                                                <font
                                                                  style={{
                                                                    verticalAlign:
                                                                      "inherit",
                                                                  }}
                                                                >
                                                                  {product.auction_end <
                                                                  Date.now()
                                                                    ? "Phiên đấu giá đã kết thúc"
                                                                    : `Giá thầu hiện tại: ${formatToCurrency(
                                                                        product.current_bid_amount
                                                                      )}`}
                                                                </font>
                                                              </font>
                                                              <div className="details-review-container details-item" />
                                                              <div className="bottom-components">
                                                                <div className="component add-to-cart">
                                                                  <a
                                                                    href="#"
                                                                    data-quantity={
                                                                      1
                                                                    }
                                                                    data-tooltip="View Auction"
                                                                    className="button product_type_auction"
                                                                    data-product_id={
                                                                      4473
                                                                    }
                                                                    data-product_sku="BF002"
                                                                    aria-label="Đọc thêm về “Galaxy S10 + Hai SIM”"
                                                                    rel="nofollow"
                                                                  >
                                                                    <i className="fa fa-eye" />
                                                                  </a>
                                                                </div>
                                                                <div className="component quick-view">
                                                                  {product.auction_end <
                                                                  Date.now() ? (
                                                                    <a
                                                                      href="#"
                                                                      className="button yith-wcqv-button"
                                                                      data-tooltip="Quickview"
                                                                      data-product_id={
                                                                        4473
                                                                      }
                                                                    >
                                                                      <i className="fas fa-search" />
                                                                    </a>
                                                                  ) : (
                                                                    <a
                                                                      href="#"
                                                                      data-quantity="1"
                                                                      data-tooltip="Bid Now"
                                                                      class="button product_type_auction"
                                                                      data-product_id="13545"
                                                                      data-product_sku="BF004-1"
                                                                      aria-label="Read more about “Auto Bidding (Proxy)”"
                                                                      rel="nofollow"
                                                                    >
                                                                      <i class="fa fa-gavel"></i>
                                                                    </a>
                                                                  )}
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="bottom-components-list">
                                                            <div className="component add-to-cart">
                                                              <a
                                                                href="#"
                                                                data-quantity={
                                                                  1
                                                                }
                                                                data-tooltip="View Auction"
                                                                className="button product_type_auction"
                                                                data-product_id={
                                                                  4473
                                                                }
                                                                data-product_sku="BF002"
                                                                aria-label="Read more about “Galaxy S10+ Dual SIM”"
                                                                rel="nofollow"
                                                              >
                                                                <i className="fa fa-eye" />
                                                              </a>
                                                            </div>
                                                            <div className="component quick-view">
                                                              <a
                                                                href="#"
                                                                className="button yith-wcqv-button"
                                                                data-tooltip="Quickview"
                                                                data-product_id={
                                                                  4473
                                                                }
                                                              >
                                                                <i className="fas fa-search" />
                                                              </a>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </>
                                                );
                                              }
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div className="vc_row wpb_row vc_row-fluid vc_custom_1567498104413">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="title-subtile-holder">
                              <h2 className="section-title">
                                Need Help? Contact us
                              </h2>
                              <div className="svg-border">
                                <svg
                                  width={515}
                                  height={25}
                                  viewBox="0 0 275 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <rect
                                    x={155}
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <path
                                    d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
                                    fill="#2695FF"
                                  />
                                </svg>
                              </div>
                              <div className="section-subtitle" />
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1568015599766 vc_column-gap-20">
                              <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: "50px" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <div className="wpb_text_column wpb_content_element">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <img
                                            className="alignnone wp-image-4932 size-full"
                                            src="/images/contact-us-map.png"
                                            alt=""
                                            width={1002}
                                            height={584}
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-6">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element">
                                      <div className="wpb_wrapper">
                                        <div
                                          role="form"
                                          className="wpcf7"
                                          id="wpcf7-f21-p22-o2"
                                          lang="en-US"
                                          dir="ltr"
                                        >
                                          <div className="screen-reader-response">
                                            <p
                                              role="status"
                                              aria-live="polite"
                                              aria-atomic="true"
                                            />
                                            <ul />
                                          </div>
                                          <form
                                            action="/#wpcf7-f21-p22-o2"
                                            method="post"
                                            className="wpcf7-form resetting"
                                            noValidate="novalidate"
                                            data-status="resetting"
                                            data-hs-cf-bound="true"
                                          >
                                            <div style={{ display: "none" }}>
                                              <input
                                                type="hidden"
                                                name="_wpcf7"
                                                defaultValue={21}
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_version"
                                                defaultValue="5.6.1"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_locale"
                                                defaultValue="en_US"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_unit_tag"
                                                defaultValue="wpcf7-f21-p22-o2"
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_container_post"
                                                defaultValue={22}
                                              />
                                              <input
                                                type="hidden"
                                                name="_wpcf7_posted_data_hash"
                                                defaultValue
                                              />
                                            </div>
                                            <div className="ibid-contact row">
                                              <div className="col-md-6">
                                                <label>
                                                  <span
                                                    className="wpcf7-form-control-wrap"
                                                    data-name="first-name"
                                                  >
                                                    <input
                                                      type="text"
                                                      name="first-name"
                                                      size={40}
                                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                      aria-required="true"
                                                      aria-invalid="false"
                                                      placeholder="Họ"
                                                    />
                                                  </span>
                                                </label>
                                              </div>
                                              <div className="col-md-6">
                                                <label>
                                                  <span
                                                    className="wpcf7-form-control-wrap"
                                                    data-name="last-name"
                                                  >
                                                    <input
                                                      type="text"
                                                      name="last-name"
                                                      size={40}
                                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                      aria-required="true"
                                                      aria-invalid="false"
                                                      placeholder="Họ"
                                                    />
                                                  </span>
                                                </label>
                                              </div>
                                              <div className="col-md-6">
                                                <label>
                                                  <span
                                                    className="wpcf7-form-control-wrap"
                                                    data-name="email"
                                                  >
                                                    <input
                                                      type="email"
                                                      name="email"
                                                      size={40}
                                                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                      aria-required="true"
                                                      aria-invalid="false"
                                                      placeholder="Địa chỉ email"
                                                    />
                                                  </span>
                                                </label>
                                              </div>
                                              <div className="col-md-6">
                                                <label>
                                                  <span
                                                    className="wpcf7-form-control-wrap"
                                                    data-name="last-name"
                                                  >
                                                    <input
                                                      type="text"
                                                      name="last-name"
                                                      size={40}
                                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                      aria-required="true"
                                                      aria-invalid="false"
                                                      placeholder="Môn học"
                                                    />
                                                  </span>
                                                </label>
                                              </div>
                                              <div className="col-md-12">
                                                <label>
                                                  <span
                                                    className="wpcf7-form-control-wrap"
                                                    data-name="your-message"
                                                  >
                                                    <textarea
                                                      name="your-message"
                                                      cols={40}
                                                      rows={10}
                                                      className="wpcf7-form-control wpcf7-textarea"
                                                      aria-invalid="false"
                                                      placeholder="Tin nhắn của bạn"
                                                    />
                                                  </span>
                                                </label>
                                              </div>
                                              <div className="col-md-12">
                                                <button
                                                  type="submit"
                                                  className="wpcf7-form-control wpcf7-submit"
                                                >
                                                  SEND MESSAGE
                                                  <i
                                                    className="fa fa-long-arrow-right"
                                                    aria-hidden="true"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                            <div
                                              className="wpcf7-response-output"
                                              aria-hidden="true"
                                            />
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1567498128026"
                      style={{
                        position: "relative",
                        left: "-59.6px",
                        boxSizing: "border-box",
                        width: "1519px",
                        maxWidth: "1519px",
                        paddingLeft: "59.6px",
                        paddingRight: "59.4px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner vc_custom_1537949981399">
                          <div className="wpb_wrapper">
                            <div className="title-subtile-holder">
                              <h2 className="section-title">Latest News</h2>
                              <div className="svg-border">
                                <svg
                                  width={515}
                                  height={25}
                                  viewBox="0 0 275 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <rect
                                    x={155}
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <path
                                    d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
                                    fill="#2695FF"
                                  />
                                </svg>
                              </div>
                              <div className="section-subtitle" />
                            </div>
                            <div className="ibid_shortcode_blog vc_row sticky-posts">
                              <div className="vc_col-md-4 post">
                                <div className="col-md-4 blog-thumbnail">
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/blogpost6-400x400.jpg"
                                      alt="Một chiếc điện thoại giữ bạn bè của bạn đi vắng"
                                    />
                                    <div
                                      className="thumbnail-overlay absolute"
                                      style={{ background: "" }}
                                    >
                                      <i className="fas fa-plus absolute" />
                                    </div>
                                  </a>
                                </div>
                                <div className="col-md-8 blog-content">
                                  <div className="head-content">
                                    <h3 className="post-name">
                                      <a href="#" style={{ color: "#151515" }}>
                                        A Phone Keeps Your Friends Away
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="post-excerpt">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Đưa ra các chiến lược sinh tồn đôi bên
                                        cùng có lợi để đảm bảo…
                                      </font>
                                    </font>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-md-4 post">
                                <div className="col-md-4 blog-thumbnail">
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/blog-post3-1-400x400.jpg"
                                      alt="Đánh giá Chromebook Tab 10"
                                    />
                                    <div
                                      className="thumbnail-overlay absolute"
                                      style={{ background: "" }}
                                    >
                                      <i className="fas fa-plus absolute" />
                                    </div>
                                  </a>
                                </div>
                                <div className="col-md-8 blog-content">
                                  <div className="head-content">
                                    <h3 className="post-name">
                                      <a href="#" style={{ color: "#151515" }}>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Đánh giá Chromebook Tab 10
                                          </font>
                                        </font>
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="post-excerpt">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Đưa ra các chiến lược sinh tồn đôi bên
                                        cùng có lợi để đảm bảo…
                                      </font>
                                    </font>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-md-4 post">
                                <div className="col-md-4 blog-thumbnail">
                                  <a href="#" className="relative">
                                    <img
                                      src="/images/blogpost1-400x400.jpg"
                                      alt="Bán hộp VR cho Thứ Sáu Đen"
                                    />
                                    <div
                                      className="thumbnail-overlay absolute"
                                      style={{ background: "" }}
                                    >
                                      <i className="fas fa-plus absolute" />
                                    </div>
                                  </a>
                                </div>
                                <div className="col-md-8 blog-content">
                                  <div className="head-content">
                                    <h3 className="post-name">
                                      <a href="#" style={{ color: "#151515" }}>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            Bán hộp VR cho Thứ Sáu Đen
                                          </font>
                                        </font>
                                      </a>
                                    </h3>
                                  </div>
                                  <div className="post-excerpt">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Đưa ra các chiến lược sinh tồn đôi bên
                                        cùng có lợi để đảm bảo…
                                      </font>
                                    </font>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1570010856447 vc_row-has-fill"
                      style={{
                        position: "relative",
                        left: "-59.6px",
                        boxSizing: "border-box",
                        width: "1519px",
                        maxWidth: "1519px",
                        paddingLeft: "59.6px",
                        paddingRight: "59.4px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="title-subtile-holder">
                              <h2 className="section-title">
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Cửa hàng theo nhãn hiệu
                                  </font>
                                </font>
                              </h2>
                              <div className="svg-border">
                                <svg
                                  width={515}
                                  height={25}
                                  viewBox="0 0 275 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <rect
                                    x={155}
                                    y={7}
                                    width={120}
                                    height={1}
                                    fill="#CCCCCC"
                                  />
                                  <path
                                    d="M144.443 14.6458C144.207 14.8818 143.897 15 143.588 15C143.278 15 142.968 14.8818 142.732 14.6454L137.874 9.78689C137.517 9.43023 137.43 8.90654 137.612 8.46798L136.617 7.47264L135.242 8.84723C135.517 9.2862 135.458 9.8809 135.066 10.2714C134.614 10.7245 133.888 10.7342 133.448 10.2936L130.324 7.17126C129.883 6.73028 129.893 6.00566 130.347 5.55298C130.738 5.16122 131.332 5.10231 131.771 5.37788L135.378 1.77014C135.102 1.33158 135.161 0.737682 135.553 0.346326C136.006 -0.10676 136.73 -0.116443 137.171 0.324136L140.295 3.44732C140.736 3.8879 140.726 4.61251 140.272 5.0656C139.88 5.45736 139.287 5.51586 138.849 5.2407L137.472 6.6169L138.59 7.73449C138.945 7.69334 139.314 7.80348 139.586 8.07622L144.444 12.9347C144.916 13.4071 144.916 14.1729 144.443 14.6458Z"
                                    fill="#2695FF"
                                  />
                                </svg>
                              </div>
                              <div className="section-subtitle" />
                            </div>
                            <div
                              id="lvca-carousel-6341ae12c985b"
                              className="lvca-carousel lvca-container slick-initialized slick-slider"
                              data-settings='{"arrows":"","dots":"","autoplay":"","autoplay_speed":"3000","animation_speed":"300","pause_on_hover":"","display_columns":"6","scroll_columns":"1","gutter":"40","tablet_display_columns":"2","tablet_scroll_columns":"2","tablet_gutter":"10","tablet_width":"800","mobile_display_columns":"1","mobile_scroll_columns":"1","mobile_gutter":"10","mobile_width":"480"}'
                            >
                              <div
                                aria-live="polite"
                                className="slick-list draggable"
                              >
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: 1,
                                    width: "4351px",
                                    left: "-1374px",
                                  }}
                                  role="listbox"
                                >
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-6}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-5}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-4}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-3}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-2}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={-1}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-current slick-active"
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide00"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-active"
                                    data-slick-index={1}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide01"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-active"
                                    data-slick-index={2}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide02"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-active"
                                    data-slick-index={3}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide03"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-active"
                                    data-slick-index={4}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide04"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-active"
                                    data-slick-index={5}
                                    aria-hidden="false"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide05"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide"
                                    data-slick-index={6}
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                    role="option"
                                    aria-describedby="slick-slide06"
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={7}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={8}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={9}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={10}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={11}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4541"
                                      src="/images/client2-s2-1-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                  <div
                                    className="lvca-carousel-item slick-slide slick-cloned"
                                    data-slick-index={12}
                                    id
                                    aria-hidden="true"
                                    style={{ width: "229px" }}
                                    tabIndex={-1}
                                  >
                                    <img
                                      loading="lazy"
                                      className="alignnone size-medium wp-image-4540"
                                      src="/images/client2-s2-2-300x90.png"
                                      alt=""
                                      width={300}
                                      height={90}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <style
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n                          #lvca-carousel-6341ae12c985b.lvca-carousel\n                            .lvca-carousel-item {\n                            padding: 40px;\n                          }\n\n                          @media screen and (max-width: 800) {\n                            #lvca-carousel-6341ae12c985b.lvca-carousel\n                              .lvca-carousel-item {\n                              padding: 10px;\n                            }\n                          }\n\n                          @media screen and (max-width: 480) {\n                            #lvca-carousel-6341ae12c985b.lvca-carousel\n                              .lvca-carousel-item {\n                              padding: 10px;\n                            }\n                          }\n                        ",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                    <div className="clearfix" />
                  </div>
                </article>
              </main>
            </div>
          </div>
          <a
            className="back-to-top modeltheme-is-visible modeltheme-fade-out"
            href="#"
          >
            <span />
          </a>

          <Footer />
        </div>
        <div id="yith-quick-view-modal">
          <div className="yith-quick-view-overlay" />
          <div
            className="yith-wcqv-wrapper"
            style={{
              left: "259.5px",
              top: "60px",
              width: "1000px",
              height: "246px",
            }}
          >
            <div className="yith-wcqv-main">
              <div className="yith-wcqv-head">
                <a
                  href="#"
                  id="yith-quick-view-close"
                  className="yith-wcqv-close"
                >
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>X</font>
                      </font>
                    </font>
                  </font>
                </a>
              </div>
              <div
                id="yith-quick-view-content"
                className="woocommerce single-product"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <link
          href="#"
          rel="stylesheet"
          property="stylesheet"
          media="all"
          type="text/css"
        />
        <link
          rel="preload"
          as="font"
          id="rs-icon-set-revicon-woff"
          href="fonts/revicons.woff"
          type="font/woff"
          crossOrigin="anonymous"
          media="all"
        />
        <link
          rel="preload"
          as="font"
          id="rs-icon-set-fa-icon-woff"
          type="font/woff2"
          crossOrigin="anonymous"
          href="fonts/fontawesome-webfont.woff2"
          media="all"
        />
        <link
          rel="stylesheet"
          property="stylesheet"
          id="rs-icon-set-fa-icon-css"
          href="/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  aria-label="Đóng (Esc)"
                />
                <button
                  className="pswp__button pswp__button--share"
                  aria-label="Đăng lại"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  aria-label="Bật chế độ toàn màn hình"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  aria-label="Phóng to / thu nhỏ"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                aria-label="Trước (mũi tên trái)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                aria-label="Tiếp theo (mũi tên phải)"
              />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          id="vc_animate-css-css"
          href="/css/animate.min.css"
          type="text/css"
          media="all"
        />
        <style
          id="global-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      body {\n        --wp--preset--color--black: #000000;\n        --wp--preset--color--cyan-bluish-gray: #abb8c3;\n        --wp--preset--color--white: #ffffff;\n        --wp--preset--color--pale-pink: #f78da7;\n        --wp--preset--color--vivid-red: #cf2e2e;\n        --wp--preset--color--luminous-vivid-orange: #ff6900;\n        --wp--preset--color--luminous-vivid-amber: #fcb900;\n        --wp--preset--color--light-green-cyan: #7bdcb5;\n        --wp--preset--color--vivid-green-cyan: #00d084;\n        --wp--preset--color--pale-cyan-blue: #8ed1fc;\n        --wp--preset--color--vivid-cyan-blue: #0693e3;\n        --wp--preset--color--vivid-purple: #9b51e0;\n        --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(\n          135deg,\n          rgba(6, 147, 227, 1) 0%,\n          rgb(155, 81, 224) 100%\n        );\n        --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(\n          135deg,\n          rgb(122, 220, 180) 0%,\n          rgb(0, 208, 130) 100%\n        );\n        --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(\n          135deg,\n          rgba(252, 185, 0, 1) 0%,\n          rgba(255, 105, 0, 1) 100%\n        );\n        --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(\n          135deg,\n          rgba(255, 105, 0, 1) 0%,\n          rgb(207, 46, 46) 100%\n        );\n        --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(\n          135deg,\n          rgb(238, 238, 238) 0%,\n          rgb(169, 184, 195) 100%\n        );\n        --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(\n          135deg,\n          rgb(74, 234, 220) 0%,\n          rgb(151, 120, 209) 20%,\n          rgb(207, 42, 186) 40%,\n          rgb(238, 44, 130) 60%,\n          rgb(251, 105, 98) 80%,\n          rgb(254, 248, 76) 100%\n        );\n        --wp--preset--gradient--blush-light-purple: linear-gradient(\n          135deg,\n          rgb(255, 206, 236) 0%,\n          rgb(152, 150, 240) 100%\n        );\n        --wp--preset--gradient--blush-bordeaux: linear-gradient(\n          135deg,\n          rgb(254, 205, 165) 0%,\n          rgb(254, 45, 45) 50%,\n          rgb(107, 0, 62) 100%\n        );\n        --wp--preset--gradient--luminous-dusk: linear-gradient(\n          135deg,\n          rgb(255, 203, 112) 0%,\n          rgb(199, 81, 192) 50%,\n          rgb(65, 88, 208) 100%\n        );\n        --wp--preset--gradient--pale-ocean: linear-gradient(\n          135deg,\n          rgb(255, 245, 203) 0%,\n          rgb(182, 227, 212) 50%,\n          rgb(51, 167, 181) 100%\n        );\n        --wp--preset--gradient--electric-grass: linear-gradient(\n          135deg,\n          rgb(202, 248, 128) 0%,\n          rgb(113, 206, 126) 100%\n        );\n        --wp--preset--gradient--midnight: linear-gradient(\n          135deg,\n          rgb(2, 3, 129) 0%,\n          rgb(40, 116, 252) 100%\n        );\n        --wp--preset--duotone--dark-grayscale: url("#wp-duotone-dark-grayscale");\n        --wp--preset--duotone--grayscale: url("#wp-duotone-grayscale");\n        --wp--preset--duotone--purple-yellow: url("#wp-duotone-purple-yellow");\n        --wp--preset--duotone--blue-red: url("#wp-duotone-blue-red");\n        --wp--preset--duotone--midnight: url("#wp-duotone-midnight");\n        --wp--preset--duotone--magenta-yellow: url("#wp-duotone-magenta-yellow");\n        --wp--preset--duotone--purple-green: url("#wp-duotone-purple-green");\n        --wp--preset--duotone--blue-orange: url("#wp-duotone-blue-orange");\n        --wp--preset--font-size--small: 13px;\n        --wp--preset--font-size--medium: 20px;\n        --wp--preset--font-size--large: 36px;\n        --wp--preset--font-size--x-large: 42px;\n      }\n      .has-black-color {\n        color: var(--wp--preset--color--black) !important;\n      }\n      .has-cyan-bluish-gray-color {\n        color: var(--wp--preset--color--cyan-bluish-gray) !important;\n      }\n      .has-white-color {\n        color: var(--wp--preset--color--white) !important;\n      }\n      .has-pale-pink-color {\n        color: var(--wp--preset--color--pale-pink) !important;\n      }\n      .has-vivid-red-color {\n        color: var(--wp--preset--color--vivid-red) !important;\n      }\n      .has-luminous-vivid-orange-color {\n        color: var(--wp--preset--color--luminous-vivid-orange) !important;\n      }\n      .has-luminous-vivid-amber-color {\n        color: var(--wp--preset--color--luminous-vivid-amber) !important;\n      }\n      .has-light-green-cyan-color {\n        color: var(--wp--preset--color--light-green-cyan) !important;\n      }\n      .has-vivid-green-cyan-color {\n        color: var(--wp--preset--color--vivid-green-cyan) !important;\n      }\n      .has-pale-cyan-blue-color {\n        color: var(--wp--preset--color--pale-cyan-blue) !important;\n      }\n      .has-vivid-cyan-blue-color {\n        color: var(--wp--preset--color--vivid-cyan-blue) !important;\n      }\n      .has-vivid-purple-color {\n        color: var(--wp--preset--color--vivid-purple) !important;\n      }\n      .has-black-background-color {\n        background-color: var(--wp--preset--color--black) !important;\n      }\n      .has-cyan-bluish-gray-background-color {\n        background-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n      }\n      .has-white-background-color {\n        background-color: var(--wp--preset--color--white) !important;\n      }\n      .has-pale-pink-background-color {\n        background-color: var(--wp--preset--color--pale-pink) !important;\n      }\n      .has-vivid-red-background-color {\n        background-color: var(--wp--preset--color--vivid-red) !important;\n      }\n      .has-luminous-vivid-orange-background-color {\n        background-color: var(\n          --wp--preset--color--luminous-vivid-orange\n        ) !important;\n      }\n      .has-luminous-vivid-amber-background-color {\n        background-color: var(\n          --wp--preset--color--luminous-vivid-amber\n        ) !important;\n      }\n      .has-light-green-cyan-background-color {\n        background-color: var(--wp--preset--color--light-green-cyan) !important;\n      }\n      .has-vivid-green-cyan-background-color {\n        background-color: var(--wp--preset--color--vivid-green-cyan) !important;\n      }\n      .has-pale-cyan-blue-background-color {\n        background-color: var(--wp--preset--color--pale-cyan-blue) !important;\n      }\n      .has-vivid-cyan-blue-background-color {\n        background-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n      }\n      .has-vivid-purple-background-color {\n        background-color: var(--wp--preset--color--vivid-purple) !important;\n      }\n      .has-black-border-color {\n        border-color: var(--wp--preset--color--black) !important;\n      }\n      .has-cyan-bluish-gray-border-color {\n        border-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n      }\n      .has-white-border-color {\n        border-color: var(--wp--preset--color--white) !important;\n      }\n      .has-pale-pink-border-color {\n        border-color: var(--wp--preset--color--pale-pink) !important;\n      }\n      .has-vivid-red-border-color {\n        border-color: var(--wp--preset--color--vivid-red) !important;\n      }\n      .has-luminous-vivid-orange-border-color {\n        border-color: var(\n          --wp--preset--color--luminous-vivid-orange\n        ) !important;\n      }\n      .has-luminous-vivid-amber-border-color {\n        border-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n      }\n      .has-light-green-cyan-border-color {\n        border-color: var(--wp--preset--color--light-green-cyan) !important;\n      }\n      .has-vivid-green-cyan-border-color {\n        border-color: var(--wp--preset--color--vivid-green-cyan) !important;\n      }\n      .has-pale-cyan-blue-border-color {\n        border-color: var(--wp--preset--color--pale-cyan-blue) !important;\n      }\n      .has-vivid-cyan-blue-border-color {\n        border-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n      }\n      .has-vivid-purple-border-color {\n        border-color: var(--wp--preset--color--vivid-purple) !important;\n      }\n      .has-vivid-cyan-blue-to-vivid-purple-gradient-background {\n        background: var(\n          --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple\n        ) !important;\n      }\n      .has-light-green-cyan-to-vivid-green-cyan-gradient-background {\n        background: var(\n          --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan\n        ) !important;\n      }\n      .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {\n        background: var(\n          --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange\n        ) !important;\n      }\n      .has-luminous-vivid-orange-to-vivid-red-gradient-background {\n        background: var(\n          --wp--preset--gradient--luminous-vivid-orange-to-vivid-red\n        ) !important;\n      }\n      .has-very-light-gray-to-cyan-bluish-gray-gradient-background {\n        background: var(\n          --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray\n        ) !important;\n      }\n      .has-cool-to-warm-spectrum-gradient-background {\n        background: var(\n          --wp--preset--gradient--cool-to-warm-spectrum\n        ) !important;\n      }\n      .has-blush-light-purple-gradient-background {\n        background: var(--wp--preset--gradient--blush-light-purple) !important;\n      }\n      .has-blush-bordeaux-gradient-background {\n        background: var(--wp--preset--gradient--blush-bordeaux) !important;\n      }\n      .has-luminous-dusk-gradient-background {\n        background: var(--wp--preset--gradient--luminous-dusk) !important;\n      }\n      .has-pale-ocean-gradient-background {\n        background: var(--wp--preset--gradient--pale-ocean) !important;\n      }\n      .has-electric-grass-gradient-background {\n        background: var(--wp--preset--gradient--electric-grass) !important;\n      }\n      .has-midnight-gradient-background {\n        background: var(--wp--preset--gradient--midnight) !important;\n      }\n      .has-small-font-size {\n        font-size: var(--wp--preset--font-size--small) !important;\n      }\n      .has-medium-font-size {\n        font-size: var(--wp--preset--font-size--medium) !important;\n      }\n      .has-large-font-size {\n        font-size: var(--wp--preset--font-size--large) !important;\n      }\n      .has-x-large-font-size {\n        font-size: var(--wp--preset--font-size--x-large) !important;\n      }\n    ',
          }}
        />
        <link
          rel="stylesheet"
          id="photoswipe-css"
          href="/css/photoswipe.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="photoswipe-default-skin-css"
          href="/css/default-skin.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rs-plugin-settings-css"
          href="/css/rs6.css"
          type="text/css"
          media="all"
        />
        <style
          id="rs-plugin-settings-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      .tp-list-sc {\n        color: #8500bd;\n        margin-right: 5px;\n      }\n      #rev_slider_2_1_wrapper .custom.tparrows {\n        cursor: pointer;\n        background: #000;\n        background: rgba(0, 0, 0, 0.5);\n        width: 40px;\n        height: 40px;\n        position: absolute;\n        display: block;\n        z-index: 1000;\n      }\n      #rev_slider_2_1_wrapper .custom.tparrows.rs-touchhover {\n        background: #000;\n      }\n      #rev_slider_2_1_wrapper .custom.tparrows:before {\n        font-family: "revicons";\n        font-size: 15px;\n        color: #fff;\n        display: block;\n        line-height: 40px;\n        text-align: center;\n      }\n      #rev_slider_2_1_wrapper .custom.tparrows.tp-leftarrow:before {\n        content: "\\e824";\n      }\n      #rev_slider_2_1_wrapper .custom.tparrows.tp-rightarrow:before {\n        content: "\\e825";\n      }\n      #slider-2-slide-8-layer-60:hover {\n        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\n      }\n      #slider-2-slide-9-layer-9:hover {\n        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\n      }\n      #slider-2-slide-10-layer-9:hover {\n        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\n      }\n    ',
          }}
        />
        <iframe
          owner="archetype"
          title="nguyên mẫu"
          style={{ display: "none", visibility: "hidden" }}
        />
        <div
          id="hubspot-messages-iframe-container"
          className="widget-align-right"
          style={{ width: "276px", height: "246px" }}
        >
          <div className="shadow-container" />
          <iframe
            src="https://app.hubspot.com/conversations-visitor/7760666/threads/utk/baab63d052de41e9ae493a0c6dc5da2f?uuid=afdbcbb838a843f4800d7ccf1ef17397&mobile=false&mobileSafari=false&hideWelcomeMessage=false&hstc=84978630.9457d9fc97f2b70378da67cfa32a9f26.1664466965323.1665583901476.1665588148175.38&domain=ibid.modeltheme.com&inApp53=false&messagesUtk=baab63d052de41e9ae493a0c6dc5da2f&url=https%3A%2F%2Fibid.modeltheme.com%2F&inline=false&isFullscreen=false&globalCookieOptOut=null&isFirstVisitorSession=false&isAttachmentDisabled=false&enableWidgetCookieBanner=false&isInCMS=false&hubspotUtk=9457d9fc97f2b70378da67cfa32a9f26"
            title="tiện ích trò chuyện"
            allowFullScreen
          />
        </div>
        {/* Code injected by live-server */}
        <grammarly-desktop-integration data-grammarly-shadow-root="true" />
        <div id="goog-gt-tt" className="skiptranslate" dir="ltr">
          <div style={{ padding: "8px" }}>
            <div>
              <div className="logo">
                <img
                  src="https://www.gstatic.com//images/branding/product/1x/translate_24dp.png"
                  width={20}
                  height={20}
                  alt="Google Translate"
                />
              </div>
            </div>
          </div>
          <div
            className="top"
            style={{ padding: "8px", float: "left", width: "100%" }}
          >
            <h1 className="title gray">Original text</h1>
          </div>
          <div className="middle" style={{ padding: "8px" }}>
            <div className="original-text" />
          </div>
          <div className="bottom" style={{ padding: "8px" }}>
            <div className="activity-links">
              <span className="activity-link">
                Contribute a better translation
              </span>
              <span className="activity-link" />
            </div>
            <div className="started-activity-container">
              <hr
                style={{
                  color: "#ccc",
                  backgroundColor: "#ccc",
                  height: "1px",
                  border: "none",
                }}
              />
              <div className="activity-root" />
            </div>
          </div>
          <div className="status-message" style={{ display: "none" }} />
        </div>
        <iframe
          owner="archetype"
          title="nguyên mẫu"
          style={{ display: "none", visibility: "hidden" }}
        />
        <div className="goog-te-spinner-pos">
          <div className="goog-te-spinner-animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="goog-te-spinner"
              width="96px"
              height="96px"
              viewBox="0 0 66 66"
            >
              <circle
                className="goog-te-spinner-path"
                fill="none"
                strokeWidth={6}
                strokeLinecap="round"
                cx={33}
                cy={33}
                r={30}
              />
            </svg>
          </div>
        </div>
        {/* Code injected by live-server */}
        <div id="goog-gt-tt" className="skiptranslate" dir="ltr">
          <div style={{ padding: "8px" }}>
            <div>
              <div className="logo">
                <img
                  src="https://www.gstatic.com//images/branding/product/1x/translate_24dp.png"
                  width={20}
                  height={20}
                  alt="Google Translate"
                />
              </div>
            </div>
          </div>
          <div
            className="top"
            style={{ padding: "8px", float: "left", width: "100%" }}
          >
            <h1 className="title gray">Original text</h1>
          </div>
          <div className="middle" style={{ padding: "8px" }}>
            <div className="original-text" />
          </div>
          <div className="bottom" style={{ padding: "8px" }}>
            <div className="activity-links">
              <span className="activity-link">
                Contribute a better translation
              </span>
              <span className="activity-link" />
            </div>
            <div className="started-activity-container">
              <hr
                style={{
                  color: "#ccc",
                  backgroundColor: "#ccc",
                  height: "1px",
                  border: "none",
                }}
              />
              <div className="activity-root" />
            </div>
          </div>
          <div className="status-message" style={{ display: "none" }} />
        </div>
        <iframe
          owner="archetype"
          title="nguyên mẫu"
          style={{ display: "none", visibility: "hidden" }}
        />
        <div className="goog-te-spinner-pos">
          <div className="goog-te-spinner-animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="goog-te-spinner"
              width="96px"
              height="96px"
              viewBox="0 0 66 66"
            >
              <circle
                className="goog-te-spinner-path"
                fill="none"
                strokeWidth={6}
                strokeLinecap="round"
                cx={33}
                cy={33}
                r={30}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
