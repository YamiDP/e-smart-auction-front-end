import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-server.herokuapp.com/'
  const token_access =  localStorage.getItem("access_token")
  const user_id =  localStorage.getItem("user_id")
  const [sellerOrder, setSellerOrder] = useState([]);
  let history = useNavigate ();

  useEffect(() => {
  if(!localStorage.getItem("access_token"))
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {
   await axios.get(API['sellerGetOrder'], {
    headers: {
        'access_token':token_access,
        'Content-Type': 'application/json'
    }
}).then(function (response) {
     const data = response.data;
     console.log(data)
     setSellerOrder(data)
 }).catch(function (error) {
     console.log(error);
 });

 }
  fetchData()
}, []);
  return (
    <div id="primary" className=" content-area no-sidebar">
    <div className="container">
      <main id="main" className="col-md_12 site-main main-content">
        <article id="post-4867" className="post-4867 page type-page status-publish hentry">
          <div className="entry-content">
            <div className="dokan-dashboard-wrap">
             <DashVendorMenu/>
              <div className="dokan-dashboard-content dokan-orders-content">
                <article className="dokan-orders-area">
              
                  <div className="dokan-order-filter-serach">
               
                    <div className="dokan-clearfix" />
                  </div>
                  <table className="dokan-table dokan-table-striped product-listing-table dokan-inline-editable-table" id="dokan-product-list-table">
                    <thead>
                      <tr>
                        <th id="cb" className="manage-column column-cb check-column">
                          <label htmlFor="cb-select-all" />
                          <input id="cb-select-all" className="dokan-checkbox" type="checkbox" />
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Hình ảnh
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tên/ Mã đơn hàng
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tên/ Mã sản phẩm
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tên/ Mã khách hàng
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tình trạng đơn hàng
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tình trạng giao hàng
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}> Họ tên người nhận
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Số điện thoại người
                              nhận
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Email người nhận
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Địa chỉ
                            </font>
                          </font>
                        </th>
                        <th>
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tổng tiền
                            </font>
                          </font><span className="tips earning-info" title data-original-title="Earning could be greater than or less than the calculated value based on different criteria like tax and shipping fee receiver" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        sellerOrder.map((item, index)=>(
                          <tr className={item.shipping_status_id == 1?'success':'danger'}>
                          <th className="dokan-product-select check-column">
                            <label htmlFor="cb-select-28556" />
                            <input className="cb-select-items dokan-checkbox" type="checkbox" data-product-name="Knowledge Head" name="bulk_products[]" defaultValue={28556} />
                          </th>
                          <td data-title="Image" className="column-thumb">
                            <a href="#/dashboard/products/?product_id=28556&action=edit">
                              <img width={50} height={50} src="images/tai-xuong-150x150.png" className="attachment-thumbnail size-thumbnail" alt="" srcSet="images/tai-xuong-150x150.png 150w, images/tai-xuong-110x110.png 110w, images/tai-xuong-70x70.png 70w, images/tai-xuong-200x200.png 200w, images/tai-xuong.png 225w" />
                            </a>
                          </td>
                          <td data-title="OrderID" className="column-primary">
                            <strong><a href="#/dashboard/products/?product_id=28556&action=edit">
                                <font style={{verticalAlign: 'inherit'}}>
                                  <font style={{verticalAlign: 'inherit'}}>
                                    {item.id}</font>
                                </font>
                              </a></strong>
                          </td>
                          <td data-title="ProductID">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Pro01
                              </font>
                            </font>
                          </td>
                          <td data-title="CustomerID">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>{item.buyer_id}
                              </font>
                            </font>
                          </td>
                          <td className="post-status" data-title="Status">
                            <label className={item.order_status_id == 1?'dokan-label dokan-label-success':'dokan-label dokan-label-danger'}>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.order_status_id == 1?'Đã duyệt':'Chưa duyệt'}</font>
                              </font>
                            </label>
                          </td>
                          <td className="delivery-status" data-title="Status">
                            <label className={item.shipping_status_id == 1?'dokan-label dokan-label-success':'dokan-label dokan-label-danger'}>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.shipping_status_id == 1?'Đã giao':'Chưa giao'}</font>
                              </font>
                            </label>
                          </td>
                          <td data-title="RecName">
                            <mark className="RecName">
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.shipping_fullname}
                                </font>
                              </font>
                            </mark>
                          </td>
                          <td data-title="Phone">
                            <mark className="Phone">
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.shipping_mobile}
                                </font>
                              </font>
                            </mark>
                          </td>
                          <td className="Email" data-title="email">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>{item.shipping_email}</font>
                            </font>
                          </td>
                          <td className="address" data-title="Address">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>{item.shipping_housenumber_street}</font>
                            </font>
                          </td>
                          <td data-title="Earning">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">
                                <font style={{verticalAlign: 'inherit'}} />
                              </span>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}> {new Intl.NumberFormat('vi-VN').format(item.shipping_fee)}
                                </font><span className="woocommerce-Price-currencySymbol">
                                  <font style={{verticalAlign: 'inherit'}}>VNĐ
                                  </font>
                                </span>
                              </font>
                            </span>
                          </td>
                        </tr>
                        ))
                      }
                    
                    </tbody>
                  </table>
                </article>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </article>
      </main>
    </div>
  </div>
  );
};
