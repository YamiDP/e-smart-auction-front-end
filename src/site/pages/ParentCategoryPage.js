import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { NavLink } from "react-router-dom";
import formatToCurrency from "../utils/formatToCurrency";
// import ErrorModal from "../shared/components/UIElements/ErrorModal";

export default function ParentCategoryPage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [parentCategory, setParentCategory] = useState({});
  const [firstSubCategories, setFirstSubCategories] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchParentCategory = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}parent-category/${params.parentCategoryslug}`
        );
        // console.log(responseData);
        setParentCategory(responseData);
        setFirstSubCategories(responseData.firstSubCategories);
      } catch (err) {}
    };
    fetchParentCategory();
  }, [params.parentCategoryslug, sendRequest]);

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <>
      <div>
        {/* <ErrorModal error={error} onClear={clearError} /> */}
        <div id="page" className="hfeed site">
          <Header />

          <div className="ibid-breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="breadcrumbs breadcrumbs-navxt"
                    typeof="BreadcrumbList"
                    vocab="https://schema.org/"
                  >
                    <span property="itemListElement" typeof="ListItem">
                      <NavLink
                        property="item"
                        typeof="WebPage"
                        title="Trang Chủ"
                        to="/"
                        className="home"
                      >
                        <span property="name">Trang Chủ</span>
                      </NavLink>
                      <meta property="position" content={1} />
                    </span>
                    /
                    <span property="itemListElement" typeof="ListItem">
                      <NavLink
                        property="item"
                        typeof="WebPage"
                        title={`${parentCategory.name}`}
                        to={`/${parentCategory.slug}`}
                        className="post post-page"
                      >
                        <span property="name">{parentCategory.name}</span>
                      </NavLink>
                      <meta property="position" content={2} />
                    </span>
                  </div>
                </div>
                <div className="col-md-12">
                  <h1>{parentCategory.name}</h1>
                </div>
              </div>
            </div>
          </div>
          <div id="primary" className="high-padding content-area no-sidebar">
            <div className="container">
              <main id="main" className="col-md_12 site-main main-content">
                <article
                  id="post-5374"
                  className="post-5374 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid vc_custom_1567498077044"
                      style={{
                        position: "relative",
                        left: "-237.5px",
                        boxSizing: "border-box",
                        width: "1875px",
                        maxWidth: "1875px",
                        paddingLeft: "237.5px",
                        paddingRight: "237.5px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            {firstSubCategories.map(
                              (firstSubCategory, index) => {
                                return (
                                  <>
                                    <div
                                      key={index}
                                      className="woocommerce_categories2"
                                    >
                                      <div className="products_category">
                                        <div className="category item col-md-3 ">
                                          <div
                                            style={{
                                              background:
                                                "radial-gradient(rgb(91, 117, 247), rgb(59, 84, 213))",
                                            }}
                                            className="category-wrapper"
                                          >
                                            <a className="#">
                                              <span className="cat-name">
                                                {firstSubCategory.name}
                                              </span>
                                            </a>
                                            <br />
                                            <span className="cat-count">
                                              <strong>8</strong> Products
                                            </span>
                                            <br />
                                            <div className="category-button ">
                                              <a
                                                href="#"
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
                                              {firstSubCategory.secondSubCategories.map(
                                                (secondSubCategory, index) => {
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
                                                                    {
                                                                      product.name
                                                                    }
                                                                  </font>
                                                                </font>
                                                              </a>
                                                            </h3>
                                                            <div className="details-container">
                                                              <div className="details-price-container details-item">
                                                                <div className="woocommerce-product-details__short-description">
                                                                  <p>
                                                                    Bring to the
                                                                    table
                                                                    win-win
                                                                    survival
                                                                    strategies
                                                                    to ensure
                                                                    proactive
                                                                    domination.
                                                                    At the end
                                                                    of the day.
                                                                    Override the
                                                                    digital
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
                              }
                            )}
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
            href="#0"
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
              left: "437.5px",
              top: "60px",
              width: "1000px",
              height: "112px",
            }}
          >
            <div className="yith-wcqv-main">
              <div className="yith-wcqv-head">
                <a
                  href="#"
                  id="yith-quick-view-close"
                  className="yith-wcqv-close"
                >
                  X
                </a>
              </div>
              <div
                id="yith-quick-view-content"
                className="woocommerce single-product"
              />
            </div>
          </div>
        </div>
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
                  aria-label="Close (Esc)"
                />
                <button
                  className="pswp__button pswp__button--share"
                  aria-label="Share"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  aria-label="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  aria-label="Zoom in/out"
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
                aria-label="Previous (arrow left)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                aria-label="Next (arrow right)"
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
          href="css/animate.min.css"
          type="text/css"
          media="all"
        />
        <style
          id="global-styles-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n    body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n    ",
          }}
        />
        <link
          rel="stylesheet"
          id="photoswipe-css"
          href="css/photoswipe.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="photoswipe-default-skin-css"
          href="css/default-skin.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="rs-plugin-settings-css"
          href="css/rs6.css"
          type="text/css"
          media="all"
        />
        <style
          id="rs-plugin-settings-inline-css"
          type="text/css"
          dangerouslySetInnerHTML={{ __html: "\n    #rs-demo-id {}\n    " }}
        />
        <iframe
          owner="archetype"
          title="archetype"
          style={{ display: "none", visibility: "hidden", userSelect: "auto" }}
        />
        <div
          id="hubspot-messages-iframe-container"
          className="widget-align-right"
          style={{ width: "276px", height: "246px", userSelect: "auto" }}
        >
          <div className="shadow-container" />
          <iframe
            src="https://app.hubspot.com/conversations-visitor/7760666/threads/utk/baab63d052de41e9ae493a0c6dc5da2f?uuid=0fd0657a956a4faa81366ff272e87d05&mobile=false&mobileSafari=false&hideWelcomeMessage=false&hstc=84978630.9457d9fc97f2b70378da67cfa32a9f26.1664466965323.1665597886930.1665605026954.42&domain=ibid.modeltheme.com&inApp53=false&messagesUtk=baab63d052de41e9ae493a0c6dc5da2f&url=https%3A%2F%2Fibid.modeltheme.com%2Fshop%2Fproducts-by-categories%2F&inline=false&isFullscreen=false&globalCookieOptOut=null&isFirstVisitorSession=false&isAttachmentDisabled=false&enableWidgetCookieBanner=false&isInCMS=false&hubspotUtk=9457d9fc97f2b70378da67cfa32a9f26"
            title="chat widget"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
