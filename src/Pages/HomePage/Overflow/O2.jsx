export const O2 = () => {
  return (
    <div className="fixed-search-overlay">
      <i className="far fa-times-circle icon-close" />
      <div className="fixed-search-inside">
        <div className="modeltheme-search">
          <div className="ibid-header-searchform">
            <h3>Search for Auctions or Products...</h3>
            <form
              name="header-search-form"
              method="GET"
              className="woocommerce-product-search menu-search"
              action="https://ibid.modeltheme.com/"
              data-hs-cf-bound="true"
            >
              <select
                name="product_cat"
                id="product_cat"
                className="form-control1"
                style={{ display: "none" }}
              >
                <option value="">Category</option>
                <option className="level-0" value="electronics">
                  Electronics&nbsp;&nbsp;(9)
                </option>
                <option className="level-1" value="televisions">
                  &nbsp;&nbsp;&nbsp;Televisions&nbsp;&nbsp;(7)
                </option>
                <option className="level-0" value="home-appliances">
                  Home Appliances&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="refrigerators">
                  &nbsp;&nbsp;&nbsp;Refrigerators&nbsp;&nbsp;(1)
                </option>
                <option className="level-0" value="kids-toys">
                  Kids Toys&nbsp;&nbsp;(1)
                </option>
                <option className="level-0" value="laptops">
                  Laptops IT Products&nbsp;&nbsp;(5)
                </option>
                <option className="level-1" value="accessories">
                  &nbsp;&nbsp;&nbsp;Accessories&nbsp;&nbsp;(1)
                </option>
                <option className="level-0" value="phones">
                  Phones&nbsp;&nbsp;(12)
                </option>
                <option className="level-1" value="protection-phones">
                  &nbsp;&nbsp;&nbsp;Cases &amp; Protection&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="console-gaming">
                  &nbsp;&nbsp;&nbsp;Console Gaming&nbsp;&nbsp;(3)
                </option>
                <option className="level-1" value="data-cables-phones">
                  &nbsp;&nbsp;&nbsp;Data Cables&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="mobile-phone-chargers">
                  &nbsp;&nbsp;&nbsp;Mobile Chargers&nbsp;&nbsp;(3)
                </option>
                <option className="level-1" value="mobile-phones">
                  &nbsp;&nbsp;&nbsp;Mobile Phones&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="power-bank">
                  &nbsp;&nbsp;&nbsp;Power Banks&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="selfie-stickers">
                  &nbsp;&nbsp;&nbsp;Selfie Sticks&nbsp;&nbsp;(4)
                </option>
                <option className="level-1" value="tablets">
                  &nbsp;&nbsp;&nbsp;Tablets&nbsp;&nbsp;(3)
                </option>
                <option className="level-1" value="protection-tablets">
                  &nbsp;&nbsp;&nbsp;Tablets Protection&nbsp;&nbsp;(3)
                </option>
                <option className="level-0" value="sales">
                  Sales&nbsp;&nbsp;(1)
                </option>
              </select>
              <div className="nice-select form-control1" tabIndex={0}>
                <span className="current">Category</span>
                <ul className="list">
                  <li data-value="" className="option selected">
                    Category
                  </li>
                  <li data-value="electronics" className="option">
                    Electronics&nbsp;&nbsp;(9)
                  </li>
                  <li data-value="televisions" className="option">
                    &nbsp;&nbsp;&nbsp;Televisions&nbsp;&nbsp;(7)
                  </li>
                  <li data-value="home-appliances" className="option">
                    Home Appliances&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="refrigerators" className="option">
                    &nbsp;&nbsp;&nbsp;Refrigerators&nbsp;&nbsp;(1)
                  </li>
                  <li data-value="kids-toys" className="option">
                    Kids Toys&nbsp;&nbsp;(1)
                  </li>
                  <li data-value="laptops" className="option">
                    Laptops IT Products&nbsp;&nbsp;(5)
                  </li>
                  <li data-value="accessories" className="option">
                    &nbsp;&nbsp;&nbsp;Accessories&nbsp;&nbsp;(1)
                  </li>
                  <li data-value="phones" className="option">
                    Phones&nbsp;&nbsp;(12)
                  </li>
                  <li data-value="protection-phones" className="option">
                    &nbsp;&nbsp;&nbsp;Cases &amp; Protection&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="console-gaming" className="option">
                    &nbsp;&nbsp;&nbsp;Console Gaming&nbsp;&nbsp;(3)
                  </li>
                  <li data-value="data-cables-phones" className="option">
                    &nbsp;&nbsp;&nbsp;Data Cables&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="mobile-phone-chargers" className="option">
                    &nbsp;&nbsp;&nbsp;Mobile Chargers&nbsp;&nbsp;(3)
                  </li>
                  <li data-value="mobile-phones" className="option">
                    &nbsp;&nbsp;&nbsp;Mobile Phones&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="power-bank" className="option">
                    &nbsp;&nbsp;&nbsp;Power Banks&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="selfie-stickers" className="option">
                    &nbsp;&nbsp;&nbsp;Selfie Sticks&nbsp;&nbsp;(4)
                  </li>
                  <li data-value="tablets" className="option">
                    &nbsp;&nbsp;&nbsp;Tablets&nbsp;&nbsp;(3)
                  </li>
                  <li data-value="protection-tablets" className="option">
                    &nbsp;&nbsp;&nbsp;Tablets Protection&nbsp;&nbsp;(3)
                  </li>
                  <li data-value="sales" className="option">
                    Sales&nbsp;&nbsp;(1)
                  </li>
                </ul>
              </div>
              <input
                type="text"
                name="s"
                className="search-field"
                maxLength={128}
                defaultValue=""
                placeholder="Search..."
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search" aria-hidden="true" />
              </button>
              <input type="hidden" name="post_type" defaultValue="product" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
