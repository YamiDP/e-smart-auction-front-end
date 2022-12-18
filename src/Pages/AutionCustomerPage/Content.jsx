import { useMemo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashCustomerMenu } from "../../Elements/DashCustomerMenu"
const BaseUrl ='https://e-smart-auction-server.herokuapp.com/'

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-server.herokuapp.com/'
  const token_access =  localStorage.getItem("access_token")
  const user_id =  localStorage.getItem("user_id")
  const [buyerBids, setBuyerBids] = useState([]);
  const [total, setTotal] = useState(0);
  let history = useNavigate ();

  const setTotalAmount =(m)=>{
    const plusTotal = total+m
    setTotal(plusTotal)
  }
  useEffect(() => {
  if(!localStorage.getItem("access_token"))
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {

   await axios.get(API['successBids'], {
    headers: {
        'access_token':token_access,
        'Content-Type': 'application/json'
    }
}).then(function (response) {
     const data = response.data;
     console.log(data)
     setBuyerBids(data)
     const totalAmount = 0
     if(data.length > 0){
      const to = 0
      data.forEach((element, index) => {
        const value = element.id
        to = to + value 
       
      })  
      console.log(to)
      setTotalAmount(to)
     
    }
  
  
  
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
                <DashCustomerMenu/>
                <div className="dokan-dashboard-content dokan-orders-content">
                  <article className="dokan-orders-area">
                  
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
                              <font style={{verticalAlign: 'inherit'}}>Mã sản phẩm
                              </font>
                            </font>
                          </th>
                          <th>
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Tên sản phẩm
                              </font>
                            </font>
                          </th>
                          <th>
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Giá thắng thầu
                              </font>
                            </font><span className="tips earning-info" title data-original-title="Earning could be greater than or less than the calculated value based on different criteria like tax and shipping fee receiver" />
                          </th>
                          <th>
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Thanh toán
                              </font>
                            </font>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          buyerBids.map((item, index)=>(
                            <tr className= {item.paid == 1 ?'success':'danger'}>
                            <th className="dokan-product-select check-column">
                              <label htmlFor="cb-select-28556" />
                              <input className="cb-select-items dokan-checkbox" type="checkbox" data-product-name="Knowledge Head" name="bulk_products[]" defaultValue={28556} />
                            </th>
                            <td data-title="Image" className="column-thumb">
                              <a href="#/dashboard/products/?product_id=28556&action=edit">
                                <img width={50} height={50} src={BaseUrl+item.product?.featured_image} className="attachment-thumbnail size-thumbnail" alt="" />
                              </a>
                            </td>
                            <td data-title="ProductID">
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.product_id}
                                </font>
                              </font>
                            </td>
                            <td data-title="ProductName">
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{item.product?.name}
                                </font>
                              </font>
                            </td>
                           
                            <td data-title="FinalPrice">
                              <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">
                                  <font style={{verticalAlign: 'inherit'}} />
                                </span>
                                <font style={{verticalAlign: 'inherit'}}>
                                  <font style={{verticalAlign: 'inherit'}}>{new Intl.NumberFormat('vi-VN').format(item.win_bid_amount)}
                                  </font><span className="woocommerce-Price-currencySymbol">
                                    <font style={{verticalAlign: 'inherit'}}>VNĐ
                                    </font>
                                  </span>
                                </font>
                              </span>
                            </td>
                            <td data-title="Payment">
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>
                                {item.paid == 1 ?(<></>

                                ):( <button type="button">Thanh toán</button>)}
                                 
                                </font>
                              </font>
                            </td>
                          </tr>
                          ))
                        }
                       
                        <tr bgcolor="#55555">
                          <td data-title="Spam1">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>
                              </font>
                            </font>
                          </td>
                          <td data-title="Spam2">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>
                              </font>
                            </font>
                          </td>
                          <td data-title="Spam3">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>
                              </font>
                            </font>
                          </td>
                          <td data-title="TotalPay">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font color="white"><b>Tổng tiền</b></font>
                              </font>
                            </font>
                          </td>
                          <td data-title="TotalPayment">
                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">
                                <font style={{verticalAlign: 'inherit'}} />
                              </span>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>{total}
                                </font><span className="woocommerce-Price-currencySymbol">
                                  <font style={{verticalAlign: 'inherit'}}>VNĐ
                                  </font>
                                </span>
                              </font>
                            </span>
                          </td>
                          <td data-title="Payment">
                            <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>
                                <button type="button">Thanh toán</button>
                              </font>
                            </font>
                          </td>
                        </tr>
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
    )
}
