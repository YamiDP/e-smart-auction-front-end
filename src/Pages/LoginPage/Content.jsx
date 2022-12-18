import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  const [seller, setSeller] = useState(0);
  let history = useNavigate ();
  const checkRadio = () => {
    return (
      <p className="form-row form-group user-role">
      <label className="radio">
        <input type="radio" name="role" defaultValue="customer" defaultChecked="checked" onClick={ () => setRadioSeller() }/>
        Tôi là khách hàng </label>
      <label className="radio">
        <input type="radio" name="role" defaultValue="seller" onClick={ () => setRadioSeller()}/>
        Tôi là người bán </label>
    </p>
    )
  }
  const setRadioSeller = ()=> {
    setSeller(!seller)
  }
  const submitLogin = async (e) => {
    e.preventDefault();
    let type = ''
    if(seller ==  true)
    {
      type = 'vendor'
    }
    else{
      type = 'customer'
    }

    await axios.post(API['login'] ,{ 
      type: type,
      password: e.target.password.value,
      email:  e.target.username.value,} ).then(function (response) {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("user_id", response.data.id);
      localStorage.setItem("type", type);
     
        history('/',
          {state: { message: response.data.message }
        });
      
  }).catch(function (error) {
      console.log(error);
  });

  };
  useEffect(() => {
    // async function fetchData() {
    //   // You can await here
    //   const response =   await axios.get(API['parentCategory'])
    //   const data = await response.data;
    //   setDataParentCategory(data);
    //   console.log(data)
    //   // ...
    // }
    // fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <WrapperContent>
      <div>
        <div className="ibid-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumbs breadcrumbs-navxt" typeof="BreadcrumbList" vocab="https://schema.org/">
                  <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" title="Trang chủ." href="#" className="home"><span property="name">
                        <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Trang chủ</font>
                        </font>
                      </span></a>
                    <meta property="position" content={1} />
                  </span>
                  <font style={{verticalAlign: 'inherit'}}>
                    <font style={{verticalAlign: 'inherit'}}> /</font>
                  </font><span property="itemListElement" typeof="ListItem"><span property="name" className="post post-page current-item">
                      <font style={{verticalAlign: 'inherit'}}>
                        <font style={{verticalAlign: 'inherit'}}> Tài khoản của tôi</font>
                      </font>
                    </span>
                    <meta property="url" content="#/my-account/" />
                    <meta property="position" content={2} />
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <h1>
                  <font style={{verticalAlign: 'inherit'}}>
                    <font style={{verticalAlign: 'inherit'}}>Tài khoản của tôi</font>
                  </font>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div id="primary" className="no-padding content-area no-sidebar">
          <div className="container">
            <main id="main" className="col-md_12 site-main main-content">
              <article id="post-11" className="post-11 page type-page status-publish hentry">
                <div className="entry-content">
                  <div className="vc_row wpb_row vc_row-fluid vc_custom_1567511231494">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div className="woocommerce">
                            <div className="woocommerce-notices-wrapper" />
                            <div className="u-columns col2-set ibid-set-login row" id="customer_login" style={{display: 'flex', justifyContent: 'center'}}>
                              <div className="u-column1 col-1  col-md-6">
                                <h2>
                                  <font style={{verticalAlign: 'inherit'}}>
                                    <font style={{verticalAlign: 'inherit'}}>Đăng nhập</font>
                                  </font>
                                </h2>
                                <form  onSubmit={submitLogin} id="login" className="woocommerce-form woocommerce-form-login login" method="post" data-hs-cf-bound="true">
                                  <p className="status" />
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="username">
                                      <font style={{verticalAlign: 'inherit'}}>
                                        <font style={{verticalAlign: 'inherit'}}>Tên người dùng hoặc địa chỉ email&nbsp;
                                        </font>
                                      </font><span className="required">
                                        <font style={{verticalAlign: 'inherit'}}>
                                          <font style={{verticalAlign: 'inherit'}}>*</font>
                                        </font>
                                      </span>
                                    </label>
                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autoComplete="username" />
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="password">
                                      <font style={{verticalAlign: 'inherit'}}>
                                        <font style={{verticalAlign: 'inherit'}}>Mật khẩu&nbsp; </font>
                                      </font><span className="required">
                                        <font style={{verticalAlign: 'inherit'}}>
                                          <font style={{verticalAlign: 'inherit'}}>*</font>
                                        </font>
                                      </span>
                                    </label>
                                    <span className="password-input"><span className="password-input"><input className="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autoComplete="current-password" /><span className="show-password-input" /></span><span className="show-password-input" /><span className="show-password-input" /></span>
                                  </p>
                                  {
                                  checkRadio()
                                }
                                  <p className="form-row">
                                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                      <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> <span>
                                        <font style={{verticalAlign: 'inherit'}}>
                                          <font style={{verticalAlign: 'inherit'}}>Nhớ mật khẩu</font>
                                        </font>
                                      </span>
                                    </label>
                                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" defaultValue="0048e702cc" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                    <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log in">
                                      <font style={{verticalAlign: 'inherit'}}>
                                        <font style={{verticalAlign: 'inherit'}}>Đăng nhập</font>
                                      </font>
                                    </button>
                                  </p>
                                  <input type="hidden" id="security" name="security" defaultValue="834c340c35" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
