import { CountDown } from "../../CountDown"
import {ShoppingCart} from "../../Component/ShoppingCart"
import moment from 'moment'
import { Link } from "react-router-dom";
export const RelatedProduct = ({propProductRelate}) => {
  const urlOrigin = window.location.origin.toString();
  const now = moment()
  return (
    <section className="related products">
      <h2>Related products</h2>
      <ul className="products columns-4">
        {propProductRelate.productRelat1.map((item, index) => (index < 4 &&(
        <li className=" first post-4467 product type-product status-publish has-post-thumbnail product_cat-home-appliances product_cat-mobile-phones product_tag-black-friday product_tag-sales instock sold-individually shipping-taxable purchasable product-type-auction">
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
                      data-product_id={4467}
                      data-product_sku="BF009"
                      aria-label="Read more about “Tablet Surface Go”"
                      rel="nofollow"
                    >
                      <i className="fa fa-gavel" />
                    </a>
                  </div>
                  <div className="component wishlist hide-on-mobile">
                    <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4467">
                      <div
                        className="yith-wcwl-add-button show"
                        style={{ display: "block" }}
                      >
                        <a
                        
                          data-product-id={4467}
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
                      data-product_id={4467}
                    >
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="woo_catalog_media_images"
                href={urlOrigin+"/product/"+item.slug}
              >
                <img
                  width={300}
                  height={300}
                  src={propProductRelate.baseURL+item.featured_image}
                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                  alt=""
                  loading="lazy"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
                <img
                  className="woo_secondary_media_image"
                  src={propProductRelate.baseURL+item.hover_featured_image}
                  alt="Tablet Surface Go"
                />
                <CountDown propsTimeCount={{show: true, time: item.auction_end, dis:'inline'}}/>
              </a>
            </div>
            <span className="auction-bage" />
            <div className="woocommerce-title-metas" style={{ height: 111 }}>
              <h3 className="archive-product-title">
              <a href={urlOrigin+"/product/"+item.slug}>
                  {item.name}
                </a>
              </h3>
              <div className="details-container">
                <div className="details-price-container details-item">
                 
                
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
               
               
                </div>
              </div>
             
            </div>
          </div>
        </li>
        )))
        }
      </ul>
    </section>
  );
};
