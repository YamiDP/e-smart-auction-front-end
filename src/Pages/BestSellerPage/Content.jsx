import { useMemo } from "react";
import { WrapperContent } from "../../Elements/WrapperContent";
const fakeData = [
  {
    bid: "current",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "current",
    countdown: false,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "seal",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "current",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "current",
    countdown: false,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "seal",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
  {
    bid: "",
    countdown: true,
    tilte: "Dual Sim",
    link: "/#",
    img: "",
    imgLoading: "https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif",
    wishlisturl: "https://ibid.modeltheme.com/wishlist/",
  },
];
export const Content = () => {
  const View = useMemo(
    () =>
      fakeData.map((item, index) => (
        <li
          key={index}
          className="product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-accessories product_tag-gaming instock featured sold-individually shipping-taxable product-type-auction"
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
                title="Dual SIM Smartphone"
                href="https://ibid.modeltheme.com/product/dual-sim-smartphone/"
              >
                <img
                  width={300}
                  height={300}
                  src="https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-300x300.jpg"
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  alt=""
                  loading="lazy"
                  srcSet="https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2017/06/mobile_prod1-1-150x150.jpg 150w"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
                <img
                  className="woo_secondary_media_image"
                  src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-400x400.jpg"
                  alt="Dual SIM Smartphone"
                />
                {item.countdown && (
                  <div
                    className="countdownv2_holder "
                    data-insert-date-start=""
                    data-insert-date="2022-12-01 00:00:00"
                    data-unique-id="countdown_636b347c17378"
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
                        id="countdown_636b347c17378"
                      >
                        <span className="countdown-row countdown-show4">
                          <span className="countdown-section">
                            <span className="countdown-amount">19</span>
                            <span className="countdown-period">Days</span>
                          </span>
                          <span className="countdown-section">
                            <span className="countdown-amount">9</span>
                            <span className="countdown-period">Hours</span>
                          </span>
                          <span className="countdown-section">
                            <span className="countdown-amount">40</span>
                            <span className="countdown-period">Minutes</span>
                          </span>
                          <span className="countdown-section">
                            <span className="countdown-amount">23</span>
                            <span className="countdown-period">Seconds</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </a>
            </div>
            <span className="auction-bage" />
            <div className="woocommerce-title-metas" >
              <h3 className="archive-product-title">
                <a href="https://ibid.modeltheme.com/product/dual-sim-smartphone/">
                  Dual SIM Smartphone{" "}
                </a>
              </h3>
              <div className="details-container">
                <div className="details-price-container details-item">
                  {item.bid === "current" ? (
                    <span className="price">
                      Current Bid:{" "}
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          99,999.00
                        </bdi>
                      </span>
                    </span>
                  ) : item.bid === "seal" ? (
                    <span className="sealed-text">Sealed Bid Auction</span>
                  ) : (
                    <div>Auction Ended</div>
                  )}
                  <div className="details-review-container details-item" />
                  <div className="bottom-components">
                    <div className="component add-to-cart">
                      <a
                        href="https://ibid.modeltheme.com/product/dual-sim-smartphone/"
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
                    href="https://ibid.modeltheme.com/product/dual-sim-smartphone/"
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
      )),
    []
  );
  return (
    <WrapperContent padding="1" propsBreadcum={{ show: true }}>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="woocommerce columns-4 ">
                <ul className="products columns-4">{View}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix" />
    </WrapperContent>
  );
};
