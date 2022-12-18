import { WrapperContent } from "../../Elements/WrapperContent"
import { useMemo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export const Content = () => {
    let history = useNavigate ();
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [award, setAward] = useState([]);
    const token_access =  localStorage.getItem("access_token")
    const [accessToken, setAccessToken] = useState();
    const [deliveryFee, setSeliveryFee] = useState(0);
    const [allSeller, setAllSeller] = useState([]);
    const [total, setTotal] = useState(0);
    const [info, setInfo] = useState({
      fullname: '',
      provice: 0,
      district: 0,
      ward: 0,
      housenumber_street:'',
      phone_number: 0,
      shipping_email: ''
    });
    const [productsInCart, setProducts] =
    useState(
        JSON.parse(
            localStorage.getItem(
                "shopping-cart"
            )
        ) || []
    );
    const options = {
      headers: {
        'access_token': token_access,
          'Content-Type': 'application/json',
          
      }
    };
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [detailChechout, setDetailChechout] = useState([]);
    const createOrder = (data, actions) => {
      const change = 24350
      const mon = total/change
      const result = Math.round(mon * 100) / 100

      return actions.order
        .create({
          purchase_units: [
            {
              description: "detail checkout",
              amount: {
                currency_code: "USD",
                value: result,
              },
            },
          ],
          // not needed if a shipping address is actually needed
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
        })
        .then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    };
    const selectFee = async (e) =>{
      await axios.get(API['transport']+e).then(function (response) {
        const data = response.data.price;
        setTotalM(data)
    }).catch(function (error) {
        console.log(error);
    });
    await axios.get(API['getWarByDistrict']+e).then(function (response) {
      const dataWard = response.data;
      setAward(dataWard)
    }).catch(function (error) {
        console.log(error);
    });
    }
    const onApprove = (data, actions) => {
      return actions.order.capture().then(async function (details) {
        const { payer } = details;
       
        setDetailChechout(details)
        setSuccess(true);
        const headers = {
          'Content-Type': 'application/json',
          "access_token": token_access,
        }
        await axios.post(API['processPayment'],{ 
          order:{
            fullname: info.fullname,
            shipping_email: info.shipping_email,
            phone_number: info.phone_number,
            housenumber_street: info.housenumber_street,
            district: info.district,
            district: info.ward,
            account_type: "paypal",
            account_no: payer.email_address,
          },
          orderItems: productsInCart,
          product_type: "normal_product",
    
        }, {
          headers: headers
        }).catch(function (error) {
            console.log(error);
        });
        
      localStorage.setItem( 
        "shopping-cart",
        JSON.stringify([])
      );
          history('/',
            {state: { message: "Mua hàng thành công!" }
          });
      });
    };
    const onError = (data, actions) => {
      setErrorMessage("An Error occured with your payment ");
    };
    const setTotalM = (feeDistrict)=>{
      // const set = total + price
      // setTotal(count)
      setSeliveryFee(feeDistrict)
      let total = 0 
      productsInCart.map((item, index)=>{
        if(index == 0){
          total = ++ item.price * item.count
        }
      })
      const result = total + feeDistrict
      setTotal(result)
    }
    const getToken = async ()=>{
        await axios.get(API['getToken'],options).then(function (response) {
            const dataDis = response.data;
            setAccessToken(dataDis.clientToken)
        }).catch(function (error) {
            console.log(error);
        });
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
      console.log(response.data)
      setAward(dataWard)
  }).catch(function (error) {
      console.log(error);
  });

  };
const submitCheckout = async (e) => {
  e.preventDefault();
  setShow(true)
  setInfo({
    fullname: e.target.fullname.value,
    provice: e.target.provice.value,
    district: e.target.district.value,
    ward: e.target.ward.value,
    housenumber_street: e.target.housenumber_street.value,
    phone_number: e.target.phone_number.value,
    shipping_email: e.target.shipping_email.value,
  })
};
    useEffect(() => {
       if(!localStorage.getItem("access_token"))
       {
        history('/login',
        {state: { message: "Đăng nhập để mua hàng" }
      });
       }
       async function fetchData() {
        // You can await here
        const response = await axios.get(API['getPrivince'])
        const data = await response.data;
        setProvince(data);
        await axios.get(API['allSeller'])
        .then(function (response) {
        setAllSeller(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    //     await axios.get(API['getDistrict']).then(function (response) {
    //       const dataDis = response.data;
    //       setDistrict(dataDis)
    //   }).catch(function (error) {
    //       console.log(error);
    //   });
    //   await axios.get(API['getWard']).then(function (response) {
    //     const dataw = response.data;
    //     setAward(dataw)
    // }).catch(function (error) {
    //     console.log(error);
    // });
        // ...
      }
       setTotalM(0)
       getToken()
       fetchData()
      }, []);
    return (
       
             <div>
        <div className="ibid-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <li><a href="https://ibid.modeltheme.com/antiques-collectibles">Trang chủ</a></li>
                  <li className="active">Thanh toán</li>
                </ol>
              </div>
              <div className="col-md-12">
                <h2>Thông tin thanh toán</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Revolution slider */}
        {/* Page content */}
        <div id="primary" className=" content-area no-sidebar">
          <div className="container">
            <main id="main" className="col-md_12 site-main main-content">
              <article id="post-10" className="post-10 page type-page status-publish hentry">
                <div className="entry-content">
                  <form onSubmit={submitCheckout}  method="post" >
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper" />
                    <div className="woocommerce-form-coupon-toggle">
                    </div>
                    <div className="woocommerce-notices-wrapper" />
                      <div className="col-1">
                        <div className="woocommerce-billing-fields">
                          <h3>Chi tiết thanh toán</h3>
                          <div className="woocommerce-billing-fields__field-wrapper">
                            <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority={10} style={{width: '100%'}}>
                              <label htmlFor="billing_first_name" className>Họ và tên&nbsp;
                                <abbr className="required" title="required">*</abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input type="text" className="input-text " name="fullname" id="billing_first_name" placeholder defaultValue autoComplete="given-name" required/></span>
                            </p>
                            <select name="provincecity" className="provincecity" style={{display: 'none'}}>
                              <option value="hcm" selected="selected">Default sorting</option>
                            </select>
                            <div className="dokan-form-group">
                                    <label className="control-label" htmlFor="dokan_address[city]">Tỉnh/thành phố <span className="required">
                                        *</span>
                                    </label>
                                    <select required name="provice" className="city_to_district dokan-form-control" id="dokan_address_city" style={{width: '100% !important;'}} onChange={(e)=> selectProvice(e.target.value)}>
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
                                    <label className="control-label" htmlFor="district">Quận/huyện <span className="required">
                                        *</span>
                                    </label>
                                    <select required name="district" className="district_to_wards dokan-form-control" id="dokan_address_district" style={{width: "100% "}} onChange={(e)=> selectFee(e.target.value)}>
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
                            <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority={10} style={{width: '100%', marginTop: '20px'}}>
                              <label htmlFor="billing_first_name" className>Địa chỉ&nbsp;
                                <abbr className="required" title="required">*</abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input type="text" className="input-text " name="housenumber_street" id="billing_first_name" placeholder defaultValue autoComplete="given-name" /></span>
                            </p>
                            <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority={10} style={{width: '100%'}}>
                              <label htmlFor="billing_first_name" className>Số điện thoại&nbsp;
                                <abbr className="required" title="required">*</abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input type="number" className="input-text " name="phone_number" id="billing_first_name" placeholder defaultValue autoComplete="given-name" required/></span>
                            </p>
                            <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority={10} style={{width: '100%'}}>
                              <label htmlFor="billing_first_name" className>Email&nbsp;
                                <abbr className="required" title="required">*</abbr>
                              </label>
                              <span className="woocommerce-input-wrapper">
                                <input type="email" className="input-text " name="shipping_email" id="billing_first_name" placeholder defaultValue autoComplete="given-name" required/></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    <h3 id="order_review_heading">Hàng hóa của bạn</h3>
                    <div id="order_review" className="woocommerce-checkout-review-order">
                      <table className="shop_table woocommerce-checkout-review-order-table" style={{position: 'static', zoom: 1}}>
                        <thead>
                          <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Tổng giá trị sản phẩm</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            productsInCart.map((item, index)=>((index == 0 &&(
                              <tr className="cart_item">
                              <td className="product-name">
                                {item.name}&nbsp; <strong className="product-quantity">×&nbsp;{item.count} </strong>
                                <dl className="variation">
                                  <dt className="variation-Vendor">Price:</dt>
                                  <dd className="variation-Vendor">
                                    <p>{new Intl.NumberFormat('vi-VN').format(item.price)}</p>
                                  </dd>
                                  <dt className="variation-Vendor">Vendor:</dt>
                                  <dd className="variation-Vendor">
                                    <p>{
                                      allSeller.map((item1, index)=>(item1.id == item.seller_id &&(
                                        <>{item1.username}</>
                                      )
                                        
                                      ))}</p>
                                  </dd>
                                </dl>
                              </td>
                              <td className="product-total">
                                <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{new Intl.NumberFormat('vi-VN').format(item.price*item.count)}</bdi></span>
                              </td>
                             
                            </tr>
                            ))

                            ))
                              
                          }
                        
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Tổng giá trị sản phẩm</th>
                            <td><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{new Intl.NumberFormat('vi-VN').format(total)}</bdi></span></td>
                          </tr>
                          <tr className="woocommerce-shipping-totals shipping">
                            <th>Phí vận chuyển</th>
                            <td data-title="Phí vận chuyển">
                              <ul id="shipping_method" className="woocommerce-shipping-methods">
                                <li>
                                  <input type="hidden" name="shipping_method[0]" data-index={0} id="shipping_method_0_flat_rate2" defaultValue="flat_rate:2" className="shipping_method" /><label htmlFor="shipping_method_0_flat_rate2">Giá cố định: <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{deliveryFee}</bdi></span></label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Tổng tiền</th>
                            <td><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{new Intl.NumberFormat('vi-VN').format(total+deliveryFee)}</bdi></span></strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                     
                      <div id="payment" className="woocommerce-checkout-payment" style={{position: 'static', zoom: 1}}>
                    
                        <ul className="wc_payment_methods payment_methods methods">
                          <li className="wc_payment_method payment_method_paypal">
                            <input id="payment_method_paypal" type="radio" className="input-radio" name="payment_method" defaultValue="paypal" defaultChecked="checked" data-order_button_text style={{display: 'none'}} />
                            <label htmlFor="payment_method_paypal">
                              Thanh toán </label>
                            <div className="payment_box payment_method_cod">
                              <p>Thanh toán bằng Paypal</p>
                              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
                            </div></li>
                        </ul> 

                        <PayPalScriptProvider
                          options={{
                            "client-id":"AfL4LeK0Bb6yXISpNlzKZPK5qIXUA4eavuK6sK6BLRj6ZNYhXpLqWUoU7O9SZE-I3hHjtKDlF_zNYMmT",
                          }}
                        >
                          <div>
                          <button type="submit" className="button alt" name="woocommerce_checkout_place_order" id="place_order" data-value="Place order">Mua ngay</button>

                      
                            {show ? (
                              <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={createOrder}
                                onApprove={onApprove}
                              />
                            ) : null}
                          </div>
                        </PayPalScriptProvider>
                        <div className="form-row place-order">
                          <noscript>
                            Since your browser does not support JavaScript, or it is disabled, please ensure you click the
                            &lt;em&gt;Update Totals&lt;/em&gt; button before placing your order. You may be charged more than the
                            amount stated above if you fail to do so. &lt;br /&gt;&lt;button type="submit" class="button alt"
                            name="woocommerce_checkout_update_totals" value="Update totals"&gt;Update totals&lt;/button&gt;
                          </noscript>
                          <div className="woocommerce-terms-and-conditions-wrapper">
                            <div className="woocommerce-privacy-policy-text" />
                          </div>
                          <input type="hidden" id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" defaultValue="f1188b371e" /><input type="hidden" name="_wp_http_referer" defaultValue="/antiques-collectibles/?wc-ajax=update_order_review" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                  <div className="clearfix" />
                </div>{/* .entry-content */}
              </article>{/* #post-## */}
            </main>
          </div>
        </div>
      </div>
    )
}