import { DashVendorMenu } from "../../Elements/DashVendorMenu"
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'

export const Content = () => {
  let history = useNavigate ();
  const token_access = localStorage.getItem("access_token")
  const type = localStorage.getItem("type")
  const [dash, setDash] = useState([]);
  const [chart1, setChart1] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      
    ],
    fill: true,
  });
  const [chart2, setChart2] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      
    ],
    fill: true,
  });

  const getDash = async ()=>{
    await axios.get(API['sellerDash'], {
      headers: {
          'access_token': token_access,
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
       const data = response.data;
       console.log(data)
       setDash(data)
   }).catch(function (error) {
       console.log(error);
   });
  }
  /////////////for chart

  useEffect(() => {
  if(!localStorage.getItem("access_token"))
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {
    getDash()
    await axios.get(API['sellerChart'], {
      headers: {
          'access_token': token_access,
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
       const data = response.data;
       const quantity = data.order_quantity;
       const revenue = data.revenue;
       const labels = [moment(quantity.column1.day1).format('DD/MM'), moment(quantity.column2.day2).format('DD/MM'), moment(quantity.column3.day3).format('DD/MM'), moment(quantity.column4.day4).format('DD/MM'), moment(quantity.column5.day5).format('DD/MM'), moment(quantity.column6.day6).format('DD/MM'), moment(quantity.column7.day7).format('DD/MM')];
       setChart1(
        {
          labels:  [moment(quantity.column1.day1).format('DD/MM'), moment(quantity.column2.day2).format('DD/MM'), moment(quantity.column3.day3).format('DD/MM'), moment(quantity.column4.day4).format('DD/MM'), moment(quantity.column5.day5).format('DD/MM'), moment(quantity.column6.day6).format('DD/MM'), moment(quantity.column7.day7).format('DD/MM')],
          datasets: [
            {
              label: "DOANH THU THÁNG NÀY",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [quantity.column1.value, quantity.column2.value, quantity.column3.value, quantity.column4.value, quantity.column5.value, quantity.column6.value, quantity.column7.value],
            },
            
          ],
          fill: true,
        });
      setChart2(
        {
          labels:  [moment(revenue.column1.day1).format('DD/MM'), moment(revenue.column2.day2).format('DD/MM'), moment(revenue.column3.day3).format('DD/MM'), moment(revenue.column4.day4).format('DD/MM'), moment(revenue.column5.day5).format('DD/MM'), moment(revenue.column6.day6).format('DD/MM'), moment(revenue.column7.day7).format('DD/MM')],
          datasets: [
            {
              label: "SỐ LƯỢNG ĐƠN HÀNG THÁNG NÀY",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [revenue.column1.value, revenue.column2.value, revenue.column3.value, revenue.column4.value, revenue.column5.value, revenue.column6.value, revenue.column7.value],
            },
            
          ],
          fill: true,
        });
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
                  <div className="dokan-dashboard-content">
  <article className="dashboard-content-area">
    <div className="dokan-w6 dokan-dash-left">
      <div className="dashboard-widget big-counter">
        <ul className="list-inline">
          <li>
            <div className="title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Số lượng sản phẩm đấu giá thành công
                </font>
              </font>
            </div>
            <div className="count">
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">
                  <font style={{ verticalAlign: "inherit" }} />
                </span>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>{dash.success_bid_amount}</font>
                </font>
              </span>
            </div>
          </li>
          <li>
            <div className="title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Doanh thu</font>
              </font>
            </div>
            <div className="count">
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">
                  <font style={{ verticalAlign: "inherit" }} />
                </span>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                   {dash.revenue ?(new Intl.NumberFormat('vi-VN').format(dash.revenue)):(0)}
                  </font>
                  <span className="woocommerce-Price-currencySymbol">
                    <font style={{ verticalAlign: "inherit" }}>VNĐ</font>
                  </span>
                </font>
              </span>
            </div>
          </li>
          <li>
            <div className="title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Số lượng khách hàng tham gia đấu giá
                </font>
              </font>
            </div>
            <div className="count">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>{dash.participant_bid_amount}</font>
              </font>
            </div>
          </li>
          <li>
            <div className="title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Số lượng đơn hàng thành công
                </font>
              </font>
            </div>
            <div className="count">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>{dash.success_order_amount}</font>
              </font>
            </div>
          </li>
          <li>
            <div className="title">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Số lượng đơn hàng bị hủy
                </font>
              </font>
            </div>
            <div className="count">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>{dash.order_total_in_cancel_status}</font>
              </font>
            </div>
          </li>
        </ul>
      </div>
      <div className="dashboard-widget orders">
        <div className="widget-title">
          <i className="fas fa-shopping-cart" />
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>đơn đặt hàng</font>
          </font>
        </div>
        <div className="content-half-part">
          <ul className="list-unstyled list-count" style={{ width: "200%" }}>
            <li>
              <a href="#/dashboard/orders/">
                <span className="title">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Tổng cộng</font>
                  </font>
                </span>{" "}
                <span className="count">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{dash.order_total}</font>
                  </font>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/dashboard/orders/?order_status=wc-pending"
                style={{ color: "#999" }}
              >
                <span className="title">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Chờ xử lý</font>
                  </font>
                </span>{" "}
                <span className="count">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{dash.order_total_in_waiting_process_status}</font>
                  </font>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/dashboard/orders/?order_status=wc-completed"
                style={{ color: "#73a724" }}
              >
                <span className="title">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Đã thanh toán
                    </font>
                  </font>
                </span>{" "}
                <span className="count">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{dash.order_total_in_paid_status}</font>
                  </font>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#/dashboard/orders/?order_status=wc-cancelled"
                style={{ color: "#d54e21" }}
              >
                <span className="title">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Đã hủy</font>
                  </font>
                </span>{" "}
                <span className="count">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{dash.order_total_in_cancel_status}</font>
                  </font>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard-widget products">
  <div className="widget-title">
    <i className="fas fa-briefcase" aria-hidden="true" />
    <font style={{ verticalAlign: "inherit" }}>
      <font style={{ verticalAlign: "inherit" }}>Các sản phẩm</font>
    </font>
    <span className="pull-right">
      <a href="#/dashboard/new-product/">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>+ Thêm sản phẩm mới</font>
        </font>
      </a>
    </span>
  </div>
  <ul className="list-unstyled list-count">
    <li>
      <a href="#/dashboard/products/">
        <span className="title">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Tổng cộng</font>
          </font>
        </span>{" "}
        <span className="count">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>0</font>
          </font>
        </span>
      </a>
    </li>
    <li>
      <a href="#/dashboard/products/?post_status=publish">
        <span className="title">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Trực tiếp</font>
          </font>
        </span>{" "}
        <span className="count">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>0</font>
          </font>
        </span>
      </a>
    </li>
    <li>
      <a href="#/dashboard/products/?post_status=draft">
        <span className="title">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Offline</font>
          </font>
        </span>{" "}
        <span className="count">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>0</font>
          </font>
        </span>
      </a>
    </li>
    <li>
      <a href="#/dashboard/products/?post_status=pending">
        <span className="title">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Đang chờ xem xét</font>
          </font>
        </span>{" "}
        <span className="count">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>0</font>
          </font>
        </span>
      </a>
    </li>
  </ul>
</div>

    </div>
    <div className="dokan-w6 dokan-dash-right">
  <div className="dashboard-widget sells-graph">
    <div className="widget-title">
      <i className="far fa-credit-card" />
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>Doanh thu tháng này</font>
      </font>
    </div>
    <div className="chart-container">
   
      <div
        className="chart-placeholder main"
        style={{ width: "100%", height: 350, padding: 0, position: "relative" }}
      >
         <Line data={chart2} />
        <div className="legend">
          <div
            style={{
              position: "absolute",
              width: 148,
              height: "86.2px",
              top: 17,
              left: 24,
              backgroundColor: "rgb(255, 255, 255)",
              opacity: "0.85"
            }}
          ></div>
          <table
            style={{
              position: "absolute",
              top: 17,
              left: 24,
              fontSize: "smaller",
              color: "rgb(170, 170, 170)"
            }}
          >
            <tbody>
              <tr>
                <td className="legendColorBox">
                  <div style={{ border: "1px solid #ccc", padding: 1 }}>
                    <div
                      style={{
                        width: 4,
                        height: 0,
                        border: "5px solid rgb(52,152,219)",
                        overflow: "hidden"
                      }}
                    ></div>
                  </div>
                </td>
                <td className="legendLabel">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Tổng doanh thu
                    </font>
                  </font>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="dashboard-widget sells-graph">
    <div className="widget-title">
      <i className="far fa-credit-card" />
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>
          Số lượng đơn hàng tháng này
        </font>
      </font>
    </div>
    <div className="chart-container2">
      <div
        className="chart-placeholder2 main"
        style={{ width: "100%", height: 350, padding: 0, position: "relative" }}
      >
        <Line data={chart1} />
        <div className="legend">
          <div
            style={{
              position: "absolute",
              width: 148,
              height: "86.2px",
              top: 17,
              left: 24,
              backgroundColor: "rgb(255, 255, 255)",
              opacity: "0.85"
            }}
          ></div>
          <table
            style={{
              position: "absolute",
              top: 17,
              left: 24,
              fontSize: "smaller",
              color: "rgb(170, 170, 170)"
            }}
          >
            <tbody>
              <tr>
                <td className="legendColorBox">
                  <div style={{ border: "1px solid #ccc", padding: 1 }}>
                    <div
                      style={{
                        width: 4,
                        height: 0,
                        border: "5px solid rgb(26,188,156)",
                        overflow: "hidden"
                      }}
                    ></div>
                  </div>
                </td>
                <td className="legendLabel">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Số lượng đơn đặt hàng
                    </font>
                  </font>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

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