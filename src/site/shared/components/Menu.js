import React, { useState, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const [parentCategoryList, setParentCategoryList] = useState([]);

  function showCategoryDropDownHandler() {
    setShowCategoryDropDown((showCategoryDropDownPrev) =>
      showCategoryDropDownPrev === true ? false : true
    );
  }

  function renderSubCategoriesHandler(parentCategory, firstSubCategories) {
    if (firstSubCategories.length > 0) {
      return (
        <div className="cf-mega-menu sub-menu">
          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
            <div className="wpb_column vc_column_container vc_col-sm-6">
              <div className="vc_column-inner vc_custom_1566989874515">
                <div className="wpb_wrapper">
                  {firstSubCategories.map((firstSubCategory, index) => {
                    if (index % 2 == 1) {
                      return <></>;
                    }

                    return (
                      <>
                        <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                          <div className="wpb_wrapper">
                            <p
                              style={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#484848",
                              }}
                            >
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
                                  <NavLink
                                    to={`/${parentCategory.slug}/${firstSubCategory.slug}`}
                                  >
                                    {firstSubCategory.name}
                                  </NavLink>
                                </font>
                              </font>
                            </p>
                          </div>
                        </div>

                        <div
                          className="vc_empty_space"
                          style={{ height: "5px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>

                        {firstSubCategory.secondSubCategories.map(
                          (secondSubCategory, index) => {
                            return (
                              <div className="wpb_text_column wpb_content_element menu-cat">
                                <div className="wpb_wrapper">
                                  <p>
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
                                          {secondSubCategory.name}
                                        </font>
                                      </font>
                                    </a>

                                    <a href="#">
                                      <font
                                        style={{
                                          verticalAlign: "inherit",
                                        }}
                                      />
                                    </a>
                                  </p>
                                </div>
                              </div>
                            );
                          }
                        )}

                        <div
                          className="vc_empty_space"
                          style={{ height: "5px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                      </>
                    );
                  })}
                  <div className="vc_empty_space" style={{ height: "20px" }}>
                    <span className="vc_empty_space_inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-6">
              <div className="vc_column-inner vc_custom_1566989880923">
                <div className="wpb_wrapper">
                  {firstSubCategories.map((firstSubCategory, index) => {
                    if (index % 2 == 0) {
                      return <></>;
                    }

                    return (
                      <>
                        <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                          <div className="wpb_wrapper">
                            <p
                              style={{
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#484848",
                              }}
                            >
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
                                  {firstSubCategory.name}
                                </font>
                              </font>
                            </p>
                          </div>
                        </div>

                        <div
                          className="vc_empty_space"
                          style={{ height: "5px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>

                        {firstSubCategory.secondSubCategories.map(
                          (secondSubCategory, index) => {
                            return (
                              <div className="wpb_text_column wpb_content_element menu-cat">
                                <div className="wpb_wrapper">
                                  <p>
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
                                          {secondSubCategory.name}
                                        </font>
                                      </font>
                                    </a>

                                    <a href="#">
                                      <font
                                        style={{
                                          verticalAlign: "inherit",
                                        }}
                                      />
                                    </a>
                                  </p>
                                </div>
                              </div>
                            );
                          }
                        )}

                        <div
                          className="vc_empty_space"
                          style={{ height: "5px" }}
                        >
                          <span className="vc_empty_space_inner" />
                        </div>
                      </>
                    );
                  })}
                  <div className="vc_empty_space" style={{ height: "20px" }}>
                    <span className="vc_empty_space_inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      return <></>;
    }
  }

  useEffect(() => {
    const fetchParentCategoryList = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}menu/get-all-parent-categories`
        );
        setParentCategoryList(responseData);
      } catch (err) {}
    };
    fetchParentCategoryList();
  }, [sendRequest]);

  return (
    <nav className="navbar bottom-navbar-default" id="modeltheme-main-head">
      <div className="container">
        <div className="row row-0">
          <div
            id="navbar"
            className="navbar-collapse collapse col-md-10"
            style={{ width: "83.3333%" }}
          >
            <div
              className="bot_nav_cat_inner"
              onClick={showCategoryDropDownHandler}
            >
              <div className="bot_nav_cat">
                <button className="bot_cat_button close">
                  <span className="cat_ico_block">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Danh mục</font>
                    </font>
                  </span>
                </button>
                <ul
                  className="bot_nav_cat_wrap"
                  style={{
                    display: showCategoryDropDown === true ? "block" : "none",
                  }}
                >
                  {parentCategoryList.map((parentCategory, index) => {
                    return (
                      <li
                        id="menu-item-5169"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5169"
                      >
                        <NavLink to={`/${parentCategory.slug}`}>
                          <span
                            className="not-found-controller"
                            dangerouslySetInnerHTML={{
                              __html: parentCategory.icon_image,
                            }}
                          ></span>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              {parentCategory.name}
                            </font>
                          </font>
                        </NavLink>

                        {renderSubCategoriesHandler(
                          parentCategory,
                          parentCategory.firstSubCategories
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="bot_nav_wrap">
              <ul className="menu nav navbar-nav pull-left nav-effect nav-menu">
                <li
                  id="menu-item-6467"
                  className="mega_menu menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-6467"
                >
                  <a href="#" aria-current="page">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Trang chủ
                      </font>
                    </font>
                  </a>
                </li>
                <li
                  id="menu-item-4628"
                  className="mega_menu col_1 menu-item menu-item-type-post_type menu-item-object-page menu-item-4628"
                >
                  <a href="#">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Tin tức
                          </font>
                        </font>
                      </font>
                    </font>
                  </a>
                  <div className="cf-mega-menu sub-menu">
                    <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner vc_custom_1568113992630">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element vc_custom_1568114205449">
                              <div className="wpb_wrapper">
                                <h3
                                  className="title16 text-uppercase font-semibold"
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    color: "#484848",
                                  }}
                                >
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
                                      CÁC LOẠI BLOG
                                    </font>
                                  </font>
                                </h3>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "5px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="wpb_text_column wpb_content_element menu-cat">
                              <div className="wpb_wrapper">
                                <p>
                                  <a href="#">
                                    <i className="fa fa-pencil" />
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
                                        Bố cục đóng hộp
                                      </font>
                                    </font>
                                  </a>
                                  <br />
                                  <a href="#">
                                    <i className="fa fa-long-arrow-right" />
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
                                        Băng chuyền bài đăng
                                      </font>
                                    </font>
                                  </a>
                                  <br />
                                  <a href="#">
                                    <i className="fa fa-filter" />
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
                                        Tin tức được lọc
                                      </font>
                                    </font>
                                  </a>
                                  <br />
                                  <a href="#">
                                    <i className="fa fa-table" />
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
                                        Blog tối thiểu
                                      </font>
                                    </font>
                                  </a>
                                  <br />
                                  <a href="#">
                                    <i className="fa fa-clone" />
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
                                        Bố cục đơn giản
                                      </font>
                                    </font>
                                  </a>
                                  <br />
                                  <a href="#">
                                    <i className="fa fa-file-text-o" />
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
                                        Chi tiết bài viết
                                      </font>
                                    </font>
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "20px" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  id="menu-item-4992"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4992"
                >
                  <a href="#">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        Giới thiệu
                      </font>
                    </font>
                  </a>
                </li>
                <li
                  id="menu-item-4630"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4630"
                >
                  <a href="#">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>Liên hệ</font>
                    </font>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 my-account-navbar">
            <ul>
              <li id="nav-menu-login" className="ibid-logoin">
                <a href="#">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Đăng nhập</font>
                  </font>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
