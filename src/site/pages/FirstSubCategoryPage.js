import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { NavLink } from "react-router-dom";
import formatToCurrency from "../utils/formatToCurrency";
import Header from "../layout/Header";

export default function FirstSubCategoryPage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [parentCategory, setParentCategory] = useState({});
  const [firstSubCategory, setFirstSubCategory] = useState({});
  const [secondSubCategories, setSecondSubCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchFirstSubCategory = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}first-sub-category/${params.firstSubCategorySlug}`
        );
        // console.log(responseData);
        setFirstSubCategory(responseData);
        setSecondSubCategories(responseData.secondSubCategories);
      } catch (err) {}
    };
    fetchFirstSubCategory();

    const fetchParentCategory = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}parent-category/${params.parentCategoryslug}`
        );
        // console.log(responseData);
        setParentCategory(responseData);
      } catch (err) {}
    };
    fetchParentCategory();

    const fetchProductList = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}product/get-products-by-first-sub-category-slug/${params.firstSubCategorySlug}`
        );
        // console.log(responseData);
        setProductList(responseData);
      } catch (err) {}
    };
    fetchProductList();
  }, [params.firstSubCategorySlug, params.parentCategoryslug, sendRequest]);

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <>
      <div>
        <div>
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
                      </span>{" "}
                      /{" "}
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
                      </span>{" "}
                      /{" "}
                      <span property="itemListElement" typeof="ListItem">
                        <NavLink
                          property="item"
                          typeof="WebPage"
                          title={`${firstSubCategory.name}`}
                          to={`/${parentCategory.slug}/${firstSubCategory.slug}`}
                          className="post post-page"
                        >
                          <span property="name">{firstSubCategory.name}</span>
                        </NavLink>
                        <meta property="position" content={3} />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12" />
                </div>
              </div>
            </div>
            <div id="primary" className="content-area">
              <main id="main" className="site-main" role="main">
                <div className="high-padding ">
                  <div className="container blog-posts">
                    <div className="row">
                      <div className="col-md-3 sidebar-content ibid-shop-sidebar">
                        <div className="ibid-shop-sidebar-content-inner">
                          <div className="ibid-shop-sidebar-close-btn hide-on-desktops">
                            <i className="far fa-times-circle icon-close" />
                          </div>
                          <aside
                            id="woocommerce_product_categories-2"
                            className="widget woocommerce widget_product_categories"
                          >
                            <h3 className="widget-title">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Danh mục sản phẩm
                                </font>
                              </font>
                            </h3>
                            <ul className="product-categories">
                              <li className="cat-item cat-item-47 cat-parent">
                                <a href="#/product-category/electronics/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Thiết bị điện tử
                                    </font>
                                  </font>
                                </a>
                                <ul className="children">
                                  <li className="cat-item cat-item-97">
                                    <a href="#/product-category/electronics/televisions/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Ti vi
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cat-item cat-item-50 cat-parent">
                                <a href="#/product-category/home-appliances/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Đồ gia dụng
                                    </font>
                                  </font>
                                </a>
                                <ul className="children">
                                  <li className="cat-item cat-item-98">
                                    <a href="#/product-category/home-appliances/refrigerators/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Tủ lạnh
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cat-item cat-item-15">
                                <a href="#/product-category/kids-toys/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Đồ chơi trẻ em
                                    </font>
                                  </font>
                                </a>
                              </li>
                              <li className="cat-item cat-item-49 cat-parent">
                                <a href="#/product-category/laptops/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Máy tính xách tay Sản phẩm CNTT
                                    </font>
                                  </font>
                                </a>
                                <ul className="children">
                                  <li className="cat-item cat-item-114">
                                    <a href="#/product-category/laptops/accessories/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Phụ kiện
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cat-item cat-item-51 cat-parent">
                                <a href="#/product-category/phones/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Những cái điện thoại
                                    </font>
                                  </font>
                                </a>
                                <ul className="children">
                                  <li className="cat-item cat-item-62">
                                    <a href="#/product-category/phones/protection-phones/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Trường hợp &amp; Bảo vệ
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-69">
                                    <a href="#/product-category/phones/console-gaming/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Trò chơi điều khiển
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-65">
                                    <a href="#/product-category/phones/data-cables-phones/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Cáp dữ liệu
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-64">
                                    <a href="#/product-category/phones/mobile-phone-chargers/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Bộ sạc di động
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-59">
                                    <a href="#/product-category/phones/mobile-phones/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Điện thoại di động
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-63">
                                    <a href="#/product-category/phones/power-bank/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Ngân hàng điện
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-66">
                                    <a href="#/product-category/phones/selfie-stickers/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Gậy chụp ảnh tự sướng
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-67">
                                    <a href="#/product-category/phones/tablets/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Máy tính bảng
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                  <li className="cat-item cat-item-68">
                                    <a href="#/product-category/phones/protection-tablets/">
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          Bảo vệ máy tính bảng
                                        </font>
                                      </font>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cat-item cat-item-418">
                                <a href="#/product-category/sales/">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Việc bán hàng
                                    </font>
                                  </font>
                                </a>
                              </li>
                            </ul>
                          </aside>
                          <aside
                            id="woocommerce_price_filter-2"
                            className="widget woocommerce widget_price_filter"
                          >
                            <h3 className="widget-title">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Lọc theo giá
                                </font>
                              </font>
                            </h3>
                            <form
                              method="get"
                              action="#/shop/"
                              data-hs-cf-bound="true"
                            >
                              <div className="price_slider_wrapper">
                                <div className="filter-group__body price-range-filter__edit">
                                  <div className="price-range-filter__inputs">
                                    <input
                                      type="text"
                                      min={0}
                                      pattern="[0-9]*"
                                      maxLength={13}
                                      className="price-range-filter__input filter__input_from"
                                      placeholder="₫ TỪ"
                                      defaultValue
                                      data-val={0}
                                      style={{ width: "110px", height: "40px" }}
                                    />
                                    <span className="price-range-filter__range-line">
                                      -
                                    </span>
                                    <input
                                      type="text"
                                      min={0}
                                      pattern="[0-9]*"
                                      maxLength={13}
                                      className="price-range-filter__input filter__input_to"
                                      placeholder="₫ ĐẾN"
                                      defaultValue
                                      style={{ width: "110px", height: "40px" }}
                                    />
                                  </div>
                                </div>
                                <br />
                                <div
                                  className="price_slider_amount"
                                  data-step={10}
                                >
                                  <input
                                    type="text"
                                    id="min_price"
                                    name="min_price"
                                    defaultValue={0}
                                    data-min={0}
                                    placeholder="Min price"
                                    style={{ display: "none" }}
                                  />
                                  <input
                                    type="text"
                                    id="max_price"
                                    name="max_price"
                                    defaultValue={10000}
                                    data-max={10000}
                                    placeholder="Max price"
                                    style={{ display: "none" }}
                                  />
                                  <button type="submit" className="button">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        Lọc
                                      </font>
                                    </font>
                                  </button>

                                  <div className="clear" />
                                </div>
                              </div>
                            </form>
                          </aside>
                          <aside
                            id="woocommerce_layered_nav-2"
                            className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                          >
                            <h3 className="widget-title">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Màu sắc
                                </font>
                              </font>
                            </h3>
                            <ul className="woocommerce-widget-layered-nav-list">
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=large&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Lớn{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=medium&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Trung bình{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=small&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Nhỏ{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (3)
                                    </font>
                                  </font>
                                </span>
                              </li>
                            </ul>
                          </aside>
                          <aside
                            id="woocommerce_layered_nav-3"
                            className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                          >
                            <h3 className="widget-title">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Tình trạng
                                </font>
                              </font>
                            </h3>
                            <ul className="woocommerce-widget-layered-nav-list">
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=large&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Lớn{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=medium&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Trung bình{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=small&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Nhỏ{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (3)
                                    </font>
                                  </font>
                                </span>
                              </li>
                            </ul>
                          </aside>
                          <aside
                            id="woocommerce_layered_nav-4"
                            className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                          >
                            <h3 className="widget-title">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Kích thước
                                </font>
                              </font>
                            </h3>
                            <ul className="woocommerce-widget-layered-nav-list">
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=large&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Lớn{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=medium&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Trung bình{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (5)
                                    </font>
                                  </font>
                                </span>
                              </li>
                              <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                                <a
                                  rel="nofollow"
                                  href="#/shop/?filter_size=small&query_type_size=or"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      Nhỏ{" "}
                                    </font>
                                  </font>
                                </a>{" "}
                                <span className="count">
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      (3)
                                    </font>
                                  </font>
                                </span>
                              </li>
                            </ul>
                          </aside>
                        </div>
                      </div>

                      <div className="col-md-9 main-content">
                        <div className="ibid-shop-sort-group">
                          <div className="woocommerce-notices-wrapper" />
                          <p className="woocommerce-result-count">
                            Showing 1–9 of 23 results
                          </p>
                          <form
                            className="woocommerce-ordering"
                            method="get"
                            data-hs-cf-bound="true"
                          >
                            <select
                              name="orderby"
                              className="orderby"
                              aria-label="Shop order"
                              style={{ display: "none", userSelect: "auto" }}
                            >
                              <option value="menu_order" selected="selected">
                                Default sorting
                              </option>
                              <option value="popularity">
                                Sort by popularity
                              </option>
                              <option value="date">Sort by latest</option>
                              <option value="price">
                                Sort by price: low to high
                              </option>
                              <option value="price-desc">
                                Sort by price: high to low
                              </option>
                              <option value="bid_asc">
                                Sort by current bid: Low to high
                              </option>
                              <option value="bid_desc">
                                Sort by current bid: High to low
                              </option>
                              <option value="auction_end">
                                Sort auction by ending soonest
                              </option>
                              <option value="auction_started">
                                Sort auction by recently started
                              </option>
                              <option value="auction_activity">
                                Sort auction by most active
                              </option>
                            </select>
                            <div className="nice-select orderby" tabIndex={0}>
                              <span className="current">Default sorting</span>
                              <ul className="list">
                                <li
                                  data-value="menu_order"
                                  className="option selected"
                                >
                                  Default sorting
                                </li>
                                <li data-value="popularity" className="option">
                                  Sort by popularity
                                </li>
                                <li data-value="date" className="option">
                                  Sort by latest
                                </li>
                                <li data-value="price" className="option">
                                  Sort by price: low to high
                                </li>
                                <li data-value="price-desc" className="option">
                                  Sort by price: high to low
                                </li>
                                <li data-value="bid_asc" className="option">
                                  Sort by current bid: Low to high
                                </li>
                                <li data-value="bid_desc" className="option">
                                  Sort by current bid: High to low
                                </li>
                                <li data-value="auction_end" className="option">
                                  Sort auction by ending soonest
                                </li>
                                <li
                                  data-value="auction_started"
                                  className="option"
                                >
                                  Sort auction by recently started
                                </li>
                                <li
                                  data-value="auction_activity"
                                  className="option"
                                >
                                  Sort auction by most active
                                </li>
                              </ul>
                            </div>
                            <input
                              type="hidden"
                              name="paged"
                              defaultValue={1}
                            />
                          </form>
                          <a
                            href="#"
                            className="ibid-shop-filters-button btn btn-success hide-on-desktops"
                          >
                            <i className="fas fa-filter" /> Filters
                          </a>
                          <nav className="gridlist-toggle">
                            <a
                              href="#"
                              id="grid"
                              title="Grid view"
                              className="active"
                            >
                              <span className="dashicons dashicons-grid-view" />{" "}
                              <em>Grid view</em>
                            </a>
                          </nav>{" "}
                          <div className="clearfix" />
                        </div>
                        <div className="clearfix" />
                        <ul className="products columns-3 grid">
                          {productList.map((product, index) => {
                            if (index >= 9) {
                              return <></>;
                            }

                            return (
                              <>
                                <li className=" first post-13545 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-televisions product_tag-black-friday product_tag-sales instock sold-individually shipping-taxable product-type-auction">
                                  <div className="products-wrapper">
                                    <div className="thumbnail-and-details">
                                      <div className="overlay-container">
                                        <div className="thumbnail-overlay" />
                                        <div className="overlay-components">
                                          <div className="component add-to-cart">
                                            <a
                                              href="#/product/auto-bidding/"
                                              data-quantity={1}
                                              data-tooltip="Bid Now"
                                              className="button product_type_auction"
                                              data-product_id={13545}
                                              data-product_sku="BF004-1"
                                              aria-label={product.name}
                                              rel="nofollow"
                                            >
                                              <i className="fa fa-gavel" />
                                            </a>
                                          </div>
                                          <div className="component quick-view hide-on-mobile">
                                            <a
                                              href="#"
                                              className="button yith-wcqv-button"
                                              data-tooltip="Quickview"
                                              data-product_id={13545}
                                            >
                                              <i className="fas fa-search" />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <a
                                        className="woo_catalog_media_images"
                                        title={product.name}
                                        href="#/product/auto-bidding/"
                                      >
                                        <img
                                          width={300}
                                          height={300}
                                          src="/images/electronic-cat1-300x300.jpg"
                                          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                          alt=""
                                          loading="lazy"
                                          srcSet="/images/electronic-cat1-300x300.jpg 300w, /images/electronic-cat1-200x200.jpg 200w, /images/electronic-cat1-600x600.jpg 600w, /images/electronic-cat1-150x150.jpg 150w, /images/electronic-cat1-768x768.jpg 768w, /images/electronic-cat1-1024x1024.jpg 1024w, /images/electronic-cat1-350x350.jpg 350w, /images//electronic-cat1-110x110.jpg 110w, /images/electronic-cat1-400x400.jpg 400w, /images/electronic-cat1-70x70.jpg 70w, /images/electronic-cat1.jpg 1080w"
                                          sizes="(max-width: 300px) 100vw, 300px"
                                        />
                                        <img
                                          className="woo_secondary_media_image"
                                          src="/images/electronic-cat3-400x400.jpg"
                                          alt={product.name}
                                        />
                                        <div
                                          className="countdownv2_holder "
                                          data-insert-date-start
                                          data-insert-date="2022-12-22 00:00:00"
                                          data-unique-id="countdown_6341e1551de7e"
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
                                                    verticalAlign: "inherit",
                                                  }}
                                                >
                                                  Thời gian còn lại:
                                                </font>
                                              </font>
                                            </p>
                                            <div
                                              className="countdownv2 clock is-countdown"
                                              id="countdown_6341e1551de7e"
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
                                                        69
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
                                                        10
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
                                                        16
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
                                                        10
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
                                      style={{
                                        height: "111px",
                                      }}
                                    >
                                      <h3 className="archive-product-title">
                                        <a href="#/product/auto-bidding/">
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
                                              The Ragdoll is a cat breed with
                                              blue eyes and a distinct
                                              colorpoint coat. It is a large and
                                              muscular semi-longhair cat with a
                                              soft and silky coat. Like all long
                                              haired cats, Ragdolls need
                                              grooming to ensure their fur does
                                              not mat.
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
                                                      verticalAlign: "inherit",
                                                    }}
                                                  >
                                                    <font
                                                      style={{
                                                        verticalAlign:
                                                          "inherit",
                                                      }}
                                                    >
                                                      $
                                                    </font>
                                                  </font>
                                                </span>
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
                                                    {" "}
                                                    415,00
                                                  </font>
                                                </font>
                                              </bdi>
                                            </span>
                                          </span>
                                          <div className="details-review-container details-item" />
                                          <div className="bottom-components">
                                            <div className="component add-to-cart">
                                              <a
                                                href="#/product/auto-bidding/"
                                                data-quantity={1}
                                                data-tooltip="Bid Now"
                                                className="button product_type_auction"
                                                data-product_id={13545}
                                                data-product_sku="BF004-1"
                                                aria-label={product.name}
                                                rel="nofollow"
                                              >
                                                <i className="fa fa-gavel" />
                                              </a>
                                            </div>
                                            <div className="component wishlist">
                                              <div className="yith-wcwl-add-to-wishlist add-to-wishlist-13545">
                                                <div
                                                  className="yith-wcwl-add-button show"
                                                  style={{
                                                    display: "block",
                                                  }}
                                                >
                                                  <a
                                                    href="/shop/?add_to_wishlist=13545"
                                                    data-product-id={13545}
                                                    data-product-type="auction"
                                                    className="add_to_wishlist single_add_to_wishlist button "
                                                    data-tooltip="Add to Wishlist"
                                                  >
                                                    <i className="far fa-heart" />
                                                  </a>
                                                  <img
                                                    src="#/wp-admin/images/wpspin_light.gif"
                                                    className="ajax-loading"
                                                    alt="loading"
                                                    width={16}
                                                    height={16}
                                                    style={{
                                                      visibility: "hidden",
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className="yith-wcwl-wishlistaddedbrowse hide"
                                                  style={{
                                                    display: "none",
                                                  }}
                                                >
                                                  <a
                                                    href="#/wishlist/"
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
                                                  style={{
                                                    display: "none",
                                                  }}
                                                >
                                                  <a
                                                    href="#/wishlist/"
                                                    data-tooltip="Check Wishlist"
                                                    className="button"
                                                  >
                                                    <i className="fas fa-heart" />{" "}
                                                  </a>
                                                </div>
                                                <div
                                                  style={{
                                                    clear: "both",
                                                  }}
                                                />
                                                <div className="yith-wcwl-wishlistaddresponse" />
                                              </div>
                                            </div>
                                            <div className="component quick-view">
                                              <a
                                                href="#"
                                                className="button yith-wcqv-button"
                                                data-tooltip="Quickview"
                                                data-product_id={13545}
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
                                            href="#/product/auto-bidding/"
                                            data-quantity={1}
                                            data-tooltip="Bid Now"
                                            className="button product_type_auction"
                                            data-product_id={13545}
                                            data-product_sku="BF004-1"
                                            aria-label="Read more about “Auto Bidding (Proxy)”"
                                            rel="nofollow"
                                          >
                                            <i className="fa fa-gavel" />
                                          </a>
                                        </div>
                                        <div className="component wishlist">
                                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-13545">
                                            <div
                                              className="yith-wcwl-add-button show"
                                              style={{
                                                display: "block",
                                              }}
                                            >
                                              <a
                                                href="/shop/?add_to_wishlist=13545"
                                                data-product-id={13545}
                                                data-product-type="auction"
                                                className="add_to_wishlist single_add_to_wishlist button "
                                                data-tooltip="Add to Wishlist"
                                              >
                                                <i className="far fa-heart" />
                                              </a>
                                              <img
                                                src="#/wp-admin/images/wpspin_light.gif"
                                                className="ajax-loading"
                                                alt="loading"
                                                width={16}
                                                height={16}
                                                style={{
                                                  visibility: "hidden",
                                                }}
                                              />
                                            </div>
                                            <div
                                              className="yith-wcwl-wishlistaddedbrowse hide"
                                              style={{
                                                display: "none",
                                              }}
                                            >
                                              <a
                                                href="#/wishlist/"
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
                                              style={{
                                                display: "none",
                                              }}
                                            >
                                              <a
                                                href="#/wishlist/"
                                                data-tooltip="Check Wishlist"
                                                className="button"
                                              >
                                                <i className="fas fa-heart" />{" "}
                                              </a>
                                            </div>
                                            <div
                                              style={{
                                                clear: "both",
                                              }}
                                            />
                                            <div className="yith-wcwl-wishlistaddresponse" />
                                          </div>
                                        </div>
                                        <div className="component quick-view">
                                          <a
                                            href="#"
                                            className="button yith-wcqv-button"
                                            data-tooltip="Quickview"
                                            data-product_id={13545}
                                          >
                                            <i className="fas fa-search" />
                                          </a>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </li>
                                {/* <li className="clearfix hide-on-mobile" /> */}
                              </>
                            );
                          })}
                        </ul>

                        <nav className="woocommerce-pagination">
                          <ul className="page-numbers">
                            <li>
                              <span
                                aria-current="page"
                                className="page-numbers current"
                              >
                                1
                              </span>
                            </li>
                            <li>
                              <a className="page-numbers" href="#/shop/page/2/">
                                2
                              </a>
                            </li>
                            <li>
                              <a className="page-numbers" href="#/shop/page/3/">
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                className="next page-numbers"
                                href="#/shop/page/2/"
                              >
                                →
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <a
              className="back-to-top modeltheme-is-visible modeltheme-fade-out"
              href="#0"
            >
              <span />
            </a>
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
                        action="#/"
                        data-hs-cf-bound="true"
                      >
                        <input
                          type="hidden"
                          defaultValue="product"
                          name="post_type"
                        />
                        <input
                          type="text"
                          name="s"
                          className="search-field"
                          maxLength={128}
                          defaultValue
                          placeholder="Search products..."
                        />
                        <button type="submit" className="btn btn-primary">
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                        <input
                          type="hidden"
                          name="post_type"
                          defaultValue="product"
                        />
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
                              style={{ maxWidth: 105, userSelect: "auto" }}
                              src="/images/logo-ibid.png"
                              alt="Footer Logo"
                            />
                          </a>
                        </h1>
                        <p>
                          <span
                            style={{
                              color: "rgb(96, 96, 96)",
                            }}
                          >
                            contact@example.com
                          </span>
                          <br />
                          <span
                            style={{
                              color: "rgb(96, 96, 96)",
                            }}
                          >
                            +1-541-754-3010
                          </span>
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
                            <a target="_blank" href="https://facebook.com">
                              <i className="fab fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://twitter.com/google"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="http://linkedin.com">
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://instagram.com">
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
                            <a href="#">Mobile Phone</a>
                          </li>
                          <li
                            id="menu-item-4561"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4561"
                          >
                            <a href="#">Laptop</a>
                          </li>
                          <li
                            id="menu-item-4562"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4562"
                          >
                            <a href="#">Headphones</a>
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
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-4567"
                          >
                            <a href="#/">Homepage</a>
                          </li>
                          <li
                            id="menu-item-4569"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4569"
                          >
                            <a href="#/blog/">Blog</a>
                          </li>
                          <li
                            id="menu-item-4570"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4570"
                          >
                            <a href="#">Services</a>
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
                      <h3 className="widget-title">
                        Subscribe to our Newsletter
                      </h3>
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
                              required
                            />
                            <input
                              className="submit"
                              type="submit"
                              defaultValue="Submit"
                            />
                          </div>
                        </div>
                        <label
                          style={{
                            display: "none !important",
                          }}
                        >
                          Leave this field empty if you're human:{" "}
                          <input
                            type="text"
                            name="_mc4wp_honeypot"
                            defaultValue
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                        <input
                          type="hidden"
                          name="_mc4wp_timestamp"
                          defaultValue={1665261909}
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
                  <a href="#" className="mt-search-icon">
                    <i className="fas fa-search" aria-hidden="true" />
                    Search
                  </a>
                </div>
                <div className="col-md-3 cart">
                  <a href="#/cart/">
                    <i className="fas fa-shopping-basket" aria-hidden="true" />
                    Cart
                  </a>
                </div>
                <div className="col-md-3 wishlist">
                  <a className="top-payment" href="#/wishlist/">
                    <i className="far fa-heart" />
                    Wishlist
                  </a>
                </div>
                <div className="col-md-3 account">
                  <a href="#/my-account/">
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
          </div>
          <div id="yith-quick-view-modal">
            <div className="yith-quick-view-overlay" />
            <div
              className="yith-wcqv-wrapper"
              style={{
                left: "437.5px",
                top: 60,
                width: 1000,
                height: 205,
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

          <div
            className="pswp"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            style={{ userSelect: "auto" }}
          >
            <div className="pswp__bg" style={{ userSelect: "auto" }} />
            <div className="pswp__scroll-wrap" style={{ userSelect: "auto" }}>
              <div className="pswp__container" style={{ userSelect: "auto" }}>
                <div className="pswp__item" style={{ userSelect: "auto" }} />
                <div className="pswp__item" style={{ userSelect: "auto" }} />
                <div className="pswp__item" style={{ userSelect: "auto" }} />
              </div>
              <div
                className="pswp__ui pswp__ui--hidden"
                style={{ userSelect: "auto" }}
              >
                <div className="pswp__top-bar" style={{ userSelect: "auto" }}>
                  <div
                    className="pswp__counter"
                    style={{ userSelect: "auto" }}
                  />
                  <button
                    className="pswp__button pswp__button--close"
                    aria-label="Close (Esc)"
                    style={{ userSelect: "auto" }}
                  />
                  <button
                    className="pswp__button pswp__button--share"
                    aria-label="Share"
                    style={{ userSelect: "auto" }}
                  />
                  <button
                    className="pswp__button pswp__button--fs"
                    aria-label="Toggle fullscreen"
                    style={{ userSelect: "auto" }}
                  />
                  <button
                    className="pswp__button pswp__button--zoom"
                    aria-label="Zoom in/out"
                    style={{ userSelect: "auto" }}
                  />
                  <div
                    className="pswp__preloader"
                    style={{ userSelect: "auto" }}
                  >
                    <div
                      className="pswp__preloader__icn"
                      style={{ userSelect: "auto" }}
                    >
                      <div
                        className="pswp__preloader__cut"
                        style={{ userSelect: "auto" }}
                      >
                        <div
                          className="pswp__preloader__donut"
                          style={{ userSelect: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
                  style={{ userSelect: "auto" }}
                >
                  <div
                    className="pswp__share-tooltip"
                    style={{ userSelect: "auto" }}
                  />
                </div>
                <button
                  className="pswp__button pswp__button--arrow--left"
                  aria-label="Previous (arrow left)"
                  style={{ userSelect: "auto" }}
                />
                <button
                  className="pswp__button pswp__button--arrow--right"
                  aria-label="Next (arrow right)"
                  style={{ userSelect: "auto" }}
                />
                <div className="pswp__caption" style={{ userSelect: "auto" }}>
                  <div
                    className="pswp__caption__center"
                    style={{ userSelect: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
