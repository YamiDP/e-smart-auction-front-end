import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate, Link  } from 'react-router-dom';

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-server.herokuapp.com/'
  const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
    const renderCart = ()=> {
      if(productsInCart.length > 0){
        return ( 
          productsInCart.map((product, index) => (
          <>
        	<div
							className="cart-product"
							key={product.id}>
							<img
              style={{maxWidth:"8%"}}
								src={
									BaseUrl+product.featured_image
								}
								alt={product.name}
							/>
							<div className="product-info">
								<h3>
									{product.name} x {product.count}
								</h3>
								<span className="product-price">
                {new Intl.NumberFormat('vi-VN').format(product.price *
										product.count)}
									
									VND
								</span>
							</div>
              {/* <button
								className="btn remove-btn"
								onClick={() =>
									onQuantityChange(
										product
									)
								}>
                  -
							</button> */}
							<button style={{marginBottom: "3%"}}
								className="btn remove-btn"
								onClick={() =>
									onProductRemove(
										product
									)
								}>
                  Remove
							</button>
              {/* <button
								className="btn remove-btn"
								onClick={() =>
                  onQuantityChangePlus(
										product.id
									)
								}>
                  +
							</button> */}
						</div>
          </>
        )))
      }
      else{
        return (<>Giỏ hàng của bạn hiện đang trống.</>)
      }
    }
    const onQuantityChangePlus = (
      productId,
    ) => {
      setProducts((oldState) => {
        const productsIndex =
          oldState.findIndex(
            (item) =>
              item.id === productId
          );
        if (productsIndex !== -1) {
          oldState[productsIndex].count =
          oldState[productsIndex].count+1;
        }
        return [...oldState];
      });
    };
    const onQuantityChange = (
      product,
    ) => {
      setProducts((oldState) => {
        const productsIndex =
          oldState.findIndex(
            (item) =>
              item.id === product.id
          );
          if( oldState[productsIndex].count <= 1)
          {
            onProductRemove(product)
          }
          else
          {
            if (productsIndex !== -1) {
              oldState[productsIndex].count =
              oldState[productsIndex].count-1;
            }
          }
      
       
        return [...oldState];
      });
    };
  
    const onProductRemove = (product) => {
      setProducts((oldState) => {
        const productsIndex =
          oldState.findIndex(
            (item) =>
              item.id === product.id
          );
        if (productsIndex !== -1) {
          oldState.splice(productsIndex, 1);
        }
        return [...oldState];
      });
    };

    useEffect(() => {

      localStorage.setItem( 
        "shopping-cart",
        JSON.stringify(productsInCart)
      );
    },  [productsInCart]);
  return (
    <WrapperContent>
         <div className="ibid-breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="breadcrumbs breadcrumbs-navxt"
            typeof="BreadcrumbList"
            vocab="https://schema.org/"
          >
            {/* Breadcrumb NavXT 7.1.0 */}
            <span property="itemListElement" typeof="ListItem">
              <a
                property="item"
                typeof="WebPage"
                title="Truy cập iBid."
                href="#"
                className="home"
              >
                <span property="name">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>iBid</font>
                  </font>
                </span>
              </a>
              <meta property="position" content={1} />
            </span>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}> /</font>
            </font>
            <span property="itemListElement" typeof="ListItem">
              <span property="name" className="post post-page current-item">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}> Giỏ hàng</font>
                </font>
              </span>
              <meta property="url" content="#/cart/" />
              <meta property="position" content={2} />
            </span>
          </div>
        </div>
        <div className="col-md-12">
          <h1>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Xe đẩy</font>
            </font>
          </h1>
        </div>
      </div>
    </div>
  </div>
        <div id="primary" className="no-padding content-area no-sidebar">
  <div className="container">
    <main id="main" className="col-md_12 site-main main-content">
      <article
        id="post-9"
        className="post-9 page type-page status-publish hentry"
      >
        <div className="entry-content">
          <div className="vc_row wpb_row vc_row-fluid vc_custom_1598945800179">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper" />
                    <p className="cart-empty woocommerce-info">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          {/* Giỏ hàng của bạn hiện đang trống. */}
                          {
                            renderCart()
                          }
                       
                        </font>
                      </font>
                    </p>
                    <p className="return-to-shop">
                      <Link to="/" className="button wc-backward">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Quay lại cửa hàng{" "}
                          </font>
                        </font>
                      </Link> 
                      <Link to="/checkout" className="button wc-backward" style={{ marginLeft: "2%" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Thanh toán {" "}
                          </font>
                        </font>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* .entry-content */}
      </article>
      {/* #post-## */}
    </main>
  </div>
</div>

    </WrapperContent>
  );
};
