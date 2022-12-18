export const Footer = () => {
  return (
    <footer className="has-footer-widgets">
      <div className="top-footer row">
        <div className="container">
          <div className="row">
            <div className="col-md-8 left">
              Browse through our products library!
            </div>
            <div className="col-md-4">
              <form
                name="myform"
                method="GET"
                className="woocommerce-product-search menu-search"
                action="https://ibid.modeltheme.com/"
                data-hs-cf-bound="true"
              >
                <input type="hidden" defaultValue="product" name="post_type" />
                <input
                  type="text"
                  name="s"
                  className="search-field"
                  maxLength={128}
                  defaultValue=""
                  placeholder="Search products..."
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
                <input type="hidden" name="post_type" defaultValue="product" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-top">
        <div className="row footer-row-1">
          <div className="col-md-3 widget widget_text">
            <aside
              id="text-3"
              className="widget vc_column_vc_container widget_text"
            >
              {" "}
              <div className="textwidget">
                <h1 className="logo">
                  <a href="/">
                    <img
                      style={{ maxWidth: 105 }}
                      src="https://ibid.modeltheme.com/wp-content/uploads/2019/08/logo-ibid.png"
                      alt="Footer Logo"
                    />
                  </a>
                </h1>
                <p>
                  <span style={{ color: "#606060" }}>contact@example.com</span>
                  <br />
                  <span style={{ color: "#606060" }}>+1-541-754-3010</span>
                </p>
              </div>
            </aside>
            <aside
              id="ibid_social_icons-2"
              className="widget vc_column_vc_container widget_ibid_social_icons"
            >
              <div className="sidebar-social-networks">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://facebook.com"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/google"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="http://linkedin.com"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-md-3 widget widget_text">
            <aside
              id="nav_menu-5"
              className="widget vc_column_vc_container widget_nav_menu"
            >
              <h3 className="widget-title">Useful Links</h3>
              <div className="menu-links-container">
                <ul id="menu-links" className="menu">
                  <li
                    id="menu-item-4560"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4560"
                  >
                    <a href="/#">Mobile Phone</a>
                  </li>
                  <li
                    id="menu-item-4561"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4561"
                  >
                    <a href="/#">Laptop</a>
                  </li>
                  <li
                    id="menu-item-4562"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4562"
                  >
                    <a href="/#">Headphones</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-md-3 widget widget_text">
            <aside
              id="nav_menu-6"
              className="widget vc_column_vc_container widget_nav_menu"
            >
              <h3 className="widget-title">Our Policy</h3>
              <div className="menu-menu-container">
                <ul id="menu-menu" className="menu">
                  <li
                    id="menu-item-4567"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-4567"
                  >
                    <a href="https://ibid.modeltheme.com/" aria-current="page">
                      Homepage
                    </a>
                  </li>
                  <li
                    id="menu-item-4569"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4569"
                  >
                    <a href="https://ibid.modeltheme.com/blog/">Blog</a>
                  </li>
                  <li
                    id="menu-item-4570"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4570"
                  >
                    <a href="/#">Services</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-md-3 widget widget_text">
            <aside
              id="mc4wp_form_widget-2"
              className="widget vc_column_vc_container widget_mc4wp_form_widget"
            >
              <h3 className="widget-title">Subscribe to our Newsletter</h3>
              <form
                id="mc4wp-form-1"
                className="mc4wp-form mc4wp-form-4260"
                method="post"
                data-id={4260}
                data-name="Newsletter"
                data-hs-cf-bound="true"
              >
                <div className="mc4wp-form-fields">
                  <div className="newsletter-footer">
                    <input
                      className="email"
                      type="email"
                      name="EMAIL"
                      placeholder="Enter your email"
                      required=""
                    />
                    <input
                      className="submit"
                      type="submit"
                      defaultValue="Submit"
                    />
                  </div>
                </div>
                <input
                  type="hidden"
                  name="_mc4wp_timestamp"
                  defaultValue={1667970172}
                />
                <input
                  type="hidden"
                  name="_mc4wp_form_id"
                  defaultValue={4260}
                />
                <input
                  type="hidden"
                  name="_mc4wp_form_element_id"
                  defaultValue="mc4wp-form-1"
                />
                <div className="mc4wp-response" />
              </form>
            </aside>
          </div>{" "}
        </div>
      </div>
      <div className="mobile_footer_icon_wrapper">
        <div className="col-md-3 search">
          <a href="/#" className="mt-search-icon">
            <i className="fas fa-search" aria-hidden="true" />
            Search
          </a>
        </div>
        <div className="col-md-3 cart">
          <a href="https://ibid.modeltheme.com/cart/">
            <i className="fas fa-shopping-basket" aria-hidden="true" />
            Cart
          </a>
        </div>
        <div className="col-md-3 wishlist">
          <a
            className="top-payment"
            href="https://ibid.modeltheme.com/wishlist/"
          >
            <i className="far fa-heart" />
            Wishlist
          </a>
        </div>
        <div className="col-md-3 account">
          <a href="https://ibid.modeltheme.com/my-account/">
            <i className="far fa-user" />
            Account
          </a>
        </div>
      </div>
      <div className="footer footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright by ModelTheme. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 payment-methods">
              <p className="copyright">Elite Author on ThemeForest.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
