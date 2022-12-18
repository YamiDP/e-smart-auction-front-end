import React from "react";

export default function HeaderTop() {
  return (
    <div className="container">
      <div className="row">
        <div className="navbar-header col-md-3 col-sm-12">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="mobile_only_icon_group search">
            <a href="#" className="mt-search-icon">
              <i className="fas fa-search" aria-hidden="true" />
            </a>
          </div>
          <div className="mobile_only_icon_group cart">
            <a href="#">
              <i className="fas fa-shopping-basket" />
            </a>
          </div>
          <div className="mobile_only_icon_group wishlist">
            <a className="top-payment" href="#">
              <i className="fas fa-heart" />
            </a>
          </div>
          <div className="mobile_only_icon_group account">
            <a href="#">
              <i className="far fa-user" />
            </a>
          </div>
          <div className="logo logo-image">
            <a href="#">
              <img src="/images/logo-ibid.png" alt="iBid" />
            </a>
          </div>
        </div>
        <div className="first-part col-md-9 col-sm-12">
          <div className="col-md-8 search-form-product">
            <div className="ibid-header-searchform">
              <form
                name="header-search-form"
                method="GET"
                autoComplete="off"
                className="woocommerce-product-search menu-search"
                action
                data-hs-cf-bound="true"
              >
                <select
                  name="product_cat"
                  id="product_cat"
                  className="form-control1"
                  style={{ display: "none" }}
                >
                  <option value>Loại</option>
                  <option className="level-0" value="electronics">
                    Điện tử (9)
                  </option>
                  <option className="level-1" value="televisions">
                    &nbsp;&nbsp;&nbsp;Ti vi (7)
                  </option>
                  <option className="level-0" value="home-appliances">
                    Thiết bị gia dụng (4)
                  </option>
                  <option className="level-1" value="refrigerators">
                    &nbsp;&nbsp;&nbsp;Tủ lạnh (1)
                  </option>
                  <option className="level-0" value="kids-toys">
                    Đồ chơi trẻ em (1)
                  </option>
                  <option className="level-0" value="laptops">
                    Máy tính xách tay Sản phẩm CNTT (5)
                  </option>
                  <option className="level-1" value="accessories">
                    &nbsp;&nbsp;&nbsp;Phụ kiện (1)
                  </option>
                  <option className="level-0" value="phones">
                    Điện thoại (12)
                  </option>
                  <option className="level-1" value="protection-phones">
                    &nbsp;&nbsp;&nbsp;Vỏ &amp; Bảo vệ (4)
                  </option>
                  <option className="level-1" value="console-gaming">
                    &nbsp;&nbsp;&nbsp;Trò chơi Console (3)
                  </option>
                  <option className="level-1" value="data-cables-phones">
                    &nbsp;&nbsp;&nbsp;Cáp dữ liệu (4)
                  </option>
                  <option className="level-1" value="mobile-phone-chargers">
                    &nbsp;&nbsp;&nbsp;Bộ sạc di động (3)
                  </option>
                  <option className="level-1" value="mobile-phones">
                    &nbsp;&nbsp;&nbsp;Điện thoại di động (4)
                  </option>
                  <option className="level-1" value="power-bank">
                    &nbsp;&nbsp;&nbsp;Ngân hàng điện (4)
                  </option>
                  <option className="level-1" value="selfie-stickers">
                    &nbsp;&nbsp;&nbsp;Gậy chụp ảnh tự sướng (4)
                  </option>
                  <option className="level-1" value="tablets">
                    &nbsp;&nbsp;&nbsp;Máy tính bảng (3)
                  </option>
                  <option className="level-1" value="protection-tablets">
                    &nbsp;&nbsp;&nbsp;Bảo vệ máy tính bảng (3)
                  </option>
                  <option className="level-0" value="sales">
                    Bán hàng (1)
                  </option>
                </select>
                <div className="nice-select form-control1" tabIndex={0}>
                  <span className="current">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Tất cả</font>
                    </font>
                  </span>
                  <ul className="list">
                    <li data-value className="option selected focus">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Tất cả
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="electronics" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Điện tử (9)
                        </font>
                      </font>
                    </li>
                    <li data-value="televisions" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Bạn bạn (7)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="home-appliances" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Thiết bị gia dụng (4)
                        </font>
                      </font>
                    </li>
                    <li data-value="refrigerators" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Tủ lạnh (1)
                        </font>
                      </font>
                    </li>
                    <li data-value="kids-toys" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Đồ chơi trẻ em (1)
                        </font>
                      </font>
                    </li>
                    <li data-value="laptops" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Máy tính xách tay Sản phẩm CNTT (5)
                        </font>
                      </font>
                    </li>
                    <li data-value="accessories" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Phụ kiện (1)
                        </font>
                      </font>
                    </li>
                    <li data-value="phones" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Điện thoại (12)
                        </font>
                      </font>
                    </li>
                    <li data-value="protection-phones" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Vỏ &amp; Bảo vệ (4)
                        </font>
                      </font>
                    </li>
                    <li data-value="console-gaming" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Trò chơi Console (3)
                        </font>
                      </font>
                    </li>
                    <li data-value="data-cables-phones" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Cáp dữ liệu (4)
                        </font>
                      </font>
                    </li>
                    <li data-value="mobile-phone-chargers" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          &nbsp;&nbsp;&nbsp;Bộ sạc di động (3)
                        </font>
                      </font>
                    </li>
                    <li data-value="mobile-phones" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Điện thoại di động (4)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="power-bank" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Ngân hàng điện (4)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="selfie-stickers" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Gậy chụp ảnh tự sướng (4)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="tablets" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Máy tính bảng (3)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="protection-tablets" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              &nbsp;&nbsp;&nbsp;Bảo vệ máy tính bảng (3)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                    <li data-value="sales" className="option">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Bán hàng (1)
                            </font>
                          </font>
                        </font>
                      </font>
                    </li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="s"
                  className="search-field search-keyword"
                  onkeyup="ibid_fetch_products()"
                  maxLength={128}
                  placeholder="Tìm kiếm sản phẩm..."
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-search" aria-hidden="true" />
                </button>
                <input type="hidden" name="post_type" defaultValue="product" />
              </form>
              <div className="data_fetch" />
            </div>
          </div>
          <div className="col-md-4 menu-products">
            <a className="shop_cart" href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Giỏ hàng</font>
              </font>
            </a>
            <a
              className="cart-contents"
              href="#"
              title="xem xe đẩy hàng của bạn"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>0 sản phẩm</font>
              </font>
            </a>
            <div className="header_mini_cart">
              <div className="widget woocommerce widget_shopping_cart">
                <h2 className="widgettitle">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Giỏ hàng</font>
                  </font>
                </h2>
                <div className="widget_shopping_cart_content">
                  <p className="woocommerce-mini-cart__empty-message">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Không có sản phẩm nào trong giỏ.
                      </font>
                    </font>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
