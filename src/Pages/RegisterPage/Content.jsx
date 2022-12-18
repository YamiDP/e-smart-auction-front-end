import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback} from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate  } from 'react-router-dom';

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  const [seller, setSeller] = useState(0);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [award, setAward] = useState([]);
  let history = useNavigate();
  const renderSeller = () => {
    if(seller == true)
    {
      return ( <div className="show_if_seller">
      <p className="form-row form-group form-row-wide">
        <label htmlFor="company-name">Shop Name <span className="required">*</span></label>
        <input type="text" className="input-text form-control" name="shopname" id="company-name" defaultValue required="required" />
      </p>
      <p className="form-row form-group form-row-wide">
        <label htmlFor="seller-url" className="pull-left">Shop URL <span className="required">*</span></label>
        <strong id="url-alart-mgs" className="pull-right" />
        <input type="text" className="input-text form-control" name="shopurl" id="seller-url" defaultValue required="required"/>
      </p>
    </div>)
    }
    
  }
  const setRadioSeller = ()=> {
    setSeller(!seller)
  }

  const selectProvice = async (e) => {
    await axios.get(API['getDistrictByProvince']+e).then(function (response) {
      const dataDis = response.data;
      console.log(response.data)

      setDistrict(dataDis)
  }).catch(function (error) {
      console.log(error);
  });

  };
  const selectDistrict = async (e) => {
    await axios.get(API['getWarByDistrict']+e).then(function (response) {
      const dataWard = response.data;
      setAward(dataWard)
  }).catch(function (error) {
      console.log(error);
  });

  };
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
  const submitRegister = async (e) => {
    e.preventDefault();
    let type = ''
    if(seller ==  true)
    {
      type = 'vendor'
    }
    else{
      type = 'customer'
    }

    await axios.post(API['register'] ,{ 
      type: type,
      fullname: e.target.fullname.value,
      username : e.target.username.value,
      email: e.target.email.value ,
      password: e.target.password.value,
      mobile:  e.target.mobile.value ,
      ward: e.target.ward.value,
      housenumber_street:  e.target.address.value,
      zip_code:  e.target.address.value,}).then(function (response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("name", response.name);
      localStorage.setItem("type", type);
      console.log(response)
     
        history('/',
        {state: { message: response.data.message }
      });
      
  }).catch(function (error) {
      console.log(error);
  });

  };
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(API['getPrivince'])
      const data = await response.data;
      setProvince(data);
    //   await axios.get(API['getDistrict']).then(function (response) {
    //     const dataDis = response.data;
    //     setDistrict(dataDis)
    // }).catch(function (error) {
    //     console.log(error);
    // });
    // await axios.get(API['getWard']).then(function (response) {
    //   const dataw = response.data;
    //   setAward(dataw)
  // }).catch(function (error) {
  //     console.log(error);
  // });
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  return (
    <WrapperContent>
      <div>
        <div className="ibid-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcrumbs breadcrumbs-navxt" typeof="BreadcrumbList" vocab="https://schema.org/">
                  <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" title="Go to iBid." href="#" className="home"><span property="name">iBid</span></a>
                    <meta property="position" content={1} />
                  </span> / <span property="itemListElement" typeof="ListItem"><span property="name" className="post post-page current-item">Tài khoản của tôi</span>
                    <meta property="url" content="#/my-account/" />
                    <meta property="position" content={2} />
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <h1>Tài khoản của tôi</h1>
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
                            <div className="u-columns col2-set ibid-set-login row" id="customer_register" style={{display: 'flex', justifyContent: 'center'}}>
                              <div className="u-column2 col-2 col-md-6">
                                <h2>Đăng ký</h2>
                                <form onSubmit={submitRegister} id="register" method="post" className="woocommerce-form woocommerce-form-register register" data-hs-cf-bound="true">
                                  <p className="status" />
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_fullname">Họ và tên&nbsp;<span className="required">*</span></label>
                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="fullname" id="reg_fullname" autoComplete="fullname" defaultValue required/>
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_username">Tên đăng nhập&nbsp;<span className="required">*</span></label>
                                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autoComplete="username" defaultValue required/>
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_email">Địa chỉ Email&nbsp;<span className="required">*</span></label>
                                    <input type="email" className="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autoComplete="email" defaultValue required/>
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_password">Mật khẩu&nbsp;<span className="required">*</span></label>
                                    <span className="password-input"><input type="password" className="woocommerce-Input woocommerce-Input--text input-text" name="password" required id="reg_password" autoComplete="new-password" /><span className="show-password-input" /></span>
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_phone">Số điện thoại&nbsp;<span className="required">*</span></label>
                                    <input type="phone" className="woocommerce-Input woocommerce-Input--text input-text" name="mobile" id="reg_phone" autoComplete="phone" defaultValue required/>
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_phone">Mã Zipcode&nbsp;<span className="required">*</span></label>
                                    <input type="zipcode" className="woocommerce-Input woocommerce-Input--text input-text" name="zipcode" id="reg_zipcode" autoComplete="zipcode" defaultValue required />
                                  </p>
                                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                    <label htmlFor="reg_phone">Số nhà, tên đường&nbsp;<span className="required">*</span></label>
                                    <input type="address" className="woocommerce-Input woocommerce-Input--text input-text" name="address" id="reg_address" autoComplete="address" defaultValue required/>
                                  </p>
                                  <div className="dokan-form-group">
                                    <label className="control-label" htmlFor="dokan_address[city]">Tỉnh/thành phố <span className="required">
                                        *</span>
                                    </label>
                                    <select required name="provice" className="city_to_district dokan-form-control" id="dokan_address_city" onChange={(e)=> selectProvice(e.target.value)} >
                                      <option value>- Chọn tỉnh/thành phố -</option>
                                      <optgroup label="------------------------------">
                                       {
                                        province.map((item, index)=>(
                                          <option value={item.id}> {item.name}</option>
                                        ))
                                       }
                                      </optgroup>
                                    </select>
                                  </div>
                                  <div className="dokan-form-group">
                                    <label className="control-label" htmlFor="district">Quận/huyện <span className="required" >
                                        *</span>
                                    </label>
                                    <select required name="district" className="district_to_wards dokan-form-control" id="dokan_address_district" onChange={(e)=> selectDistrict(e.target.value)}>
                                      <option value>- Chọn Quận/huyện -</option>
                                      <optgroup label="------------------------------">
                                      {
                                        district.map((item, index)=>(
                                          <option value={item.id}> {item.name}</option>
                                        ))
                                       }
                                       
                                      </optgroup>
                                    </select>
                                  </div>
                                  <div className="dokan-form-group">
                                    <label className="control-label" htmlFor="dokan_address[wards]">Xã/phường <span className="required">
                                        *</span>
                                    </label>
                                    <select required name="ward" className="wards_to_detail dokan-form-control" id="dokan_address_wards">
                                      <option value>- Chọn Xã phường -</option>
                                      <optgroup label="------------------------------">
                                      {
                                        award.map((item, index)=>(
                                          <option value={item.id}> {item.name}</option>
                                        ))
                                       }
                                    
                                      </optgroup>
                                    </select>
                                  </div>
                                {
                                  renderSeller()
                                }
                                {
                                  checkRadio()
                                }
                                
                                  <div className="woocommerce-privacy-policy-text" />
                                  <p className="woocommerce-form-row form-row">
                                    <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" defaultValue="a75e9b7c84" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                    <button type="submit" className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Register">Đăng ký</button>
                                  </p>
                                </form>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div></div></div></div></div></article>
            </main>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
