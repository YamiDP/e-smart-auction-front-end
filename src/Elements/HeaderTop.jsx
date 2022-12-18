export const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12 contact-header">
            <ul className="currency-language list-inline-block menu-list">
              <li>
                <div className="language-box dropdown-box">
                  <a className="language-current" href="/#">
                    EN
                  </a>
                  <ul className="language-list list-none dropdown-list">
                    <li>
                      <a href="/#">EN</a>
                    </li>
                    <li>
                      <a href="/#">FR</a>
                    </li>
                    <li>
                      <a href="/#">GE</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="currency-box dropdown-box">
                  <a className="currency-current" href="/#">
                    USD
                  </a>
                  <ul className="currency-list list-none dropdown-list">
                    <li>
                      <a href="/#">USD</a>
                    </li>
                    <li>
                      <a href="/#">EUR</a>
                    </li>
                    <li>
                      <a href="/#">JPY</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="header-top-contact-method">
              <span>Call us toll free: </span>
              <a target="_blank" rel="noreferrer" href="tel:+1-541-754-3010">
                <i className="fas fa-phone hide-on-desktops" />
                <span>+1-541-754-3010</span>
              </a>
            </div>
            <div className="header-top-contact-method">
              <span>Send us an email: </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:contact@example.com"
              >
                <i className="fas fa-envelope hide-on-desktops" />
                <span>contact@example.com</span>
              </a>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-5 col-sm-12 account-urls">
            <a
              className="top-order"
              href="https://ibid.modeltheme.com/order-tracking/"
            >
              <i className="fas fa-truck" />
              Order Tracking{" "}
            </a>
            <a
              className="top-payment"
              href="https://ibid.modeltheme.com/wishlist/"
            >
              <i className="far fa-heart" />
              Wishlist{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
