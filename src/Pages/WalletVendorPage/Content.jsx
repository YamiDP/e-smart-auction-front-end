import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"
import { CountDown } from "../CountDown"

export const Content = () => {
  let history = useNavigate ();
  const urlOrigin = window.location.origin.toString();
  const now = moment()
  const BaseUrl ='http://localhost:8000'
  const token_access =  localStorage.getItem("access_token")
  
  const user_id =  localStorage.getItem("user_id")

  const [wallet, setWallet] = useState([]);
const submitMoney = async (e)=>{
  e.preventDefault()
  const headers = {
    'Content-Type': 'application/json',
    "access_token": token_access,
  }
  await axios.post(API['sellerSendDraw'],{ 
    "amount": e.target.money.value,

  }, {
    headers: headers
  }).then((res)=>{
    toast('Thành công!');
    e.target.reset();
  }).catch(function (error) {
      toast('Thất bại');
      console.log(error);
  });
}
  const getWalletSeller = async ()=>{
    await axios.get(API['sellerWallet'], {
      headers: {
          'access_token': token_access,
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
       const data = response.data;
       setWallet(data)
   }).catch(function (error) {
       console.log(error);
   });
  }
  
  useEffect(() => {
  if(!localStorage.getItem("access_token"))
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {
    getWalletSeller()

 }
  fetchData()
}, []);
  return (
    <div id="primary" className=" content-area no-sidebar">
      <ToastContainer/>
    <div className="container">
      <main id="main" className="col-md_12 site-main main-content">
        <article
          id="post-4867"
          className="post-4867 page type-page status-publish hentry"
        >
          <div className="entry-content">
            <div className="dokan-dashboard-wrap">
             <DashVendorMenu/>
              <div className="dokan-dashboard-content dokan-withdraw-content">
                <article className="dokan-withdraw-area">
                  <header className="dokan-dashboard-header">
                    <h1 className="entry-title">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Rút tiền</font>
                      </font>
                    </h1>
                  </header>
                  <div className="entry-content">
                    <div className="dokan-panel dokan-panel-default">
                      <div className="dokan-panel-heading">
                        <strong>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              SỐ DƯ
                            </font>
                          </font>
                        </strong>
                      </div>
                      <div className="dokan-panel-body general-details">
                        <div className="dokan-clearfix dokan-panel-inner-container">
                          <div className="dokan-w8">
                            <p>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Số dư của bạn:{" "}
                                </font>
                                <strong>
                                  <span className="woocommerce-Price-amount amount">
                                    <font style={{ verticalAlign: "inherit" }}>
                                    {new Intl.NumberFormat('vi-VN').format(wallet.current_amount)}
                                    </font>
                                  </span>
                                </strong>
                                <strong>
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">
                                      <font style={{ verticalAlign: "inherit" }}>
                                      VNĐ
                                      </font>
                                    </span>
                                  </span>
                                </strong>
                                <br />
                                <font style={{ verticalAlign: "inherit" }}>
                                  Số tiền rút tối thiểu:
                                </font>
                              </font>
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    <font
                                      style={{ verticalAlign: "inherit" }}
                                    ></font>
                                  </span>
                                  <font style={{ verticalAlign: "inherit" }} />
                                </span>
                              </strong>
                              <font style={{ verticalAlign: "inherit" }} />
                              <strong>
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      <font style={{ verticalAlign: "inherit" }}>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          {new Intl.NumberFormat('vi-VN').format(wallet.minimum_withdraw)}
                                        </font>
                                      </font>
                                    </span>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        VNĐ
                                      </font>
                                    </font>
                                  </bdi>
                                </span>
                              </strong>
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dokan-panel dokan-panel-default"
                      id="dokan-withdraw-payment-method-list"
                      data-security="07ff606689"
                    >
                      <div className="dokan-panel-heading">
                        <strong>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Phương thức thanh toán
                            </font>
                          </font>
                        </strong>
                      </div>
                      <div className="dokan-panel-body general-details">
                        <div className="dokan-clearfix dokan-panel-inner-container">
                          <div className="dokan-w2">
                         <img id="image0" width="40" height="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4XuydC3gcZfXG3zObtrQFAUHl1mzKRYpkk0JBxD8qKiBeUBGKCipCsy0XRSlkU0A0iFwyKRdRqM0GRBAvLaiACioIgsi1QLJBClSaTaFACwi0TWmzO+f/TMulxbbZyzezc3mHh6el+b73vOd3puybzc6MgAcJkAAJkAAJkEDsCEjsOmbDJEACJEACJEACYADgSUACJEACJEACMSTAABDDobNlEiABEiABEmAA4DlAAiRAAiRAAjEkwAAQw6GzZRIgARIgARJgAOA5QAIkQAIkQAIxJMAAEMOhs2USIAESIAESYADgOUACJEACJEACMSTAABDDobNlEiABEiABEmAA4DlAAiRAAiRAAjEkwAAQw6GzZRIgARIgARJgAOA5QAIkQAIkQAIxJMAAEMOhs2USIAESIAESYADgOUACJEACJEACMSTAABDDobNlEiABEiABEmAA4DlAAiRAAiRAAjEkwAAQw6GzZRIgARIgARJgAOA5QAIkQAIkQAIxJMAAEMOhs2USIAESIAESYADgOUACJEACJEACMSTAABDDobNlEiABEiABEmAA4DlAAiRAAiRAAjEkwAAQw6GzZRIgARIgARJgAOA5QAIkQAIkQAIxJMAAEMOhs2USIAESIAESYADgObBpArteNgpbDu6LIWscFNvBwnZwsCUAgajAEUHijV8hAqhAROCoIPHGr2vWwj3X3vHn8vZa18W669/c40CQeGPfevruXl2rua6+W8fds+bP3/Diaq/n8419b65909tbOm/28EY/6+rrm9pv/Yq3OLh9uzU36mcdDuquc9ev49/1va4X1/eb/7227pvHO/7ertFZ51jjYd3V7/x7vv5/r6+9turblRwoCsCaf4cgKLzx30Nr/kze+DNnna+769bds+b3OgSRtTqiQ3CkgMSaXwchWAZHlgO6fM3vYS3HyMIyFK3lsIrLMVZfxXa7voy5RxX515UESMAcAQYAcyyjo7SvvR1W4ctQ/RREPgbFmOg0x05CSkABvALFixC8uPZXWftrnbMUBes5iAyggDzet/xZ3Nnuhg0eJEACmyDAAMDT420CTZ3jodoG4JsARhENCYSSgKAIxWJYGIAiDwf9sPAEgD7sXvc45k5fGcq+aJoEDBNgADAMNJRy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"/>
                            <strong>
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  PayPal
                                </font>
                              </font>
                            </strong>
                          </div>
                          
                          <div
                            className="dokan-w8"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end"
                            }}
                          >
                          
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                              <form onSubmit={submitMoney} method="post" style={{display: "-webkit-inline-box"}}>
                              <div class="dokan-form-group"><input type="number" class="dokan-form-control" name="money" required/></div>

                                <input
                                  type="submit"
                                  className="dokan-btn dokan-btn-danger dokan-btn-theme"
                                  name="dokan_save_account_details"
                                  value="Gửi yêu cầu rút tiền"
                                />
                                 </form>
                              </font>
                            </font>
                           
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
  

  );
};
