import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"
import { Link } from "react-router-dom";

export const Content = () => {
    let history = useNavigate ();
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [award, setAward] = useState([]);
    const token_access =  localStorage.getItem("access_token")
    const user_id =  localStorage.getItem("user_id")
    const [accessToken, setAccessToken] = useState();
    const [company_name, set_company_name] = useState('');
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [housenumber_street, sethousenumber_street] = useState('');
    const [mobile, setmobile] = useState('');
    const [zip_code, setzip_code] = useState('');
    const [ward, setward] = useState('');
    const [seller, setSeller] = useState({
        company_name: '',
        username:  '',
        email: '',
        housenumber_street: '',
        password: '',
        mobile: '',
        zip_code: '',
        ward: '',
    });
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
      
    const submitInfo = async (e) => {
      e.preventDefault();
      const response = await axios.put(
        API['updateStore'],
        {
          'company_name': company_name,
          'account_no': e.target.account_no.value,
          'mobile': mobile,
          'housenumber_street': housenumber_street,
          'zip_code':zip_code,
          'ward':  e.target.ward_id.value,
          'account_type': "paypal"
        },
        {
            headers: {
                'access_token':token_access,
                'Content-Type': 'application/json'
            }
        }
    ).then((res)=>{
      toast('Thành công!');
    }).catch(function (error) {
      toast('Error!');
        console.log(error);
    });;
    };
    const selectFee = async (e) =>{
      await axios.get(API['getWarByDistrict']+e).then(function (response) {
        const dataWard = response.data;
        setAward(dataWard)
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
         // You can await here
         const response = await axios.get(API['getPrivince'])
         const data = await response.data;
         setProvince(data);
         axios.get(API['sellerById']+user_id).then(function (responseSeller) {
            const dataSeller = responseSeller.data;
           // setSeller(dataSeller);
           set_company_name(dataSeller.company_name)
           setUsername(dataSeller.username)
           setemail(dataSeller.email)
           sethousenumber_street(dataSeller.housenumber_street)
           setmobile(dataSeller.mobile)
           setward(dataSeller.ward)
           setzip_code(dataSeller.zip_code)
        
            console.log(responseSeller.data)
        }).catch(function (error) {
            console.log(error);
        });
         await axios.get(API['getDistrict']).then(function (response) {
           const dataDis = response.data;
           setDistrict(dataDis)
       }).catch(function (error) {
           console.log(error);
       });

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
              <div className="dokan-dashboard-content dokan-settings-content">
                <article className="dokan-settings-area">
                  <header className="dokan-dashboard-header">
                    <div className="dokan-store-settign-header-wrap">
                      <h1 className="entry-title">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Cài đặt{" "}
                          </font>
                        </font>
                        <small>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>→ </font>
                          </font>
                          <Link to="/visit-store-vendor">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Ghé thăm cửa hàng
                              </font>
                            </font>
                          </Link>
                        </small>
                      </h1>
                    </div>
                  </header>
                  <div className="dokan-ajax-response"></div>
                  <form
                    onSubmit={submitInfo}
                    method="post"
                    id="store-form"
                    action=""
                    className="dokan-form-horizontal"
                    noValidate="novalidate"
                    data-hs-cf-bound="true"
                  >
                    <div className="dokan-form-group">
                      <label
                        className="dokan-w3 dokan-control-label"
                        htmlFor="dokan_store_name"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Tên cửa hàng
                          </font>
                        </font>
                      </label>
                      <div className="dokan-w5 dokan-text-left">
                        <input
                          id="dokan_store_name"
                          required
                          value={company_name}
                          name="dokan_store_name"
                          placeholder="tên cửa hàng"
                          className="dokan-form-control"
                          type="text"
                          onChange={(e) =>set_company_name(e.target.value)}
                        />
                      </div>
                    </div>
                    <input
                      type="hidden"
                      id="dokan_selected_country"
                      defaultValue=""
                    />
                    <input
                      type="hidden"
                      id="dokan_selected_state"
                      defaultValue=""
                    />
                    <div className="dokan-form-group">
                      <label
                        className="dokan-w3 dokan-control-label"
                        htmlFor="setting_address"
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Địa chỉ nhà
                          </font>
                        </font>
                      </label>
                      <div className="dokan-w5 dokan-text-left dokan-address-fields">
                        <div className="dokan-form-group">
                          <label
                            className="control-label"
                            htmlFor="dokan_address[street_1]"
                          >
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Số nhà, tên đường 1
                              </font>
                            </font>
                          </label>
                          <input
                            required
                            id="dokan_address[street_1]"
                            value={housenumber_street}
                            name="dokan_address[street_1]"
                            placeholder="địa chỉ đường phố"
                            className="dokan-form-control input-md"
                            type="text"
                            onChange={(e) =>sethousenumber_street(e.target.value)}
                          />
                        </div>
                        <div className="dokan-form-group">
                          <label
                            className="control-label"
                            htmlFor="dokan_address[city]"
                          >
                            Tỉnh/thành phố <span className="required">*</span>
                          </label>
                          <select
                            required 
                            name="province_id"
                            className="city_to_district dokan-form-control"
                            id="dokan_address_city"
                            onChange={(e)=> selectProvice(e.target.value)}
                          >
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
                          <label
                            className="control-label"
                            htmlFor="dokan_address[district]"
                          >
                            Quận/huyện <span className="required">*</span>
                          </label>
                          <select
                            required
                            name="district_id"
                            className="district_to_wards dokan-form-control"
                            id="dokan_address_district"
                            onChange={(e)=> selectDistrict(e.target.value)}
                          >
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
                          <label
                            className="control-label"
                            htmlFor="dokan_address[wards]"
                          >
                            Xã/phường <span className="required">*</span>
                          </label>
                          <select
                            required
                            name="ward_id"
                            className="wards_to_detail dokan-form-control"
                            id="dokan_address_wards"
                           
                          >
                            <optgroup label="------------------------------">
                            {
                                award.map((item, index)=>(
                                    <option value={item.id}> {item.name}</option>
                                ))
                            }
                             
                            </optgroup>
                          </select>
                        </div>
                        <div className="dokan-from-group">
                          <div className="dokan-form-group dokan-w5 dokan-left">
                            <label
                              className="control-label"
                              htmlFor="dokan_address[zip]"
                            >
                              Post/ZIP Code{" "}
                            </label>
                            <input
                              required
                              id="dokan_address[zip]"
                              value={zip_code}
                              name="dokan_address[zip]"
                              placeholder="Mã bưu / Zip"
                              className="dokan-form-control input-md"
                              type="text"
                              onChange={(e) =>setzip_code(e.target.value)}
                            />
                          </div>
                          <div className="dokan-clearfix" />
                        </div>
                      </div>
                    </div>
                    <div className="dokan-form-group">
                      <label
                        className="dokan-w3 dokan-control-label"
                        htmlFor="setting_phone"
                      >
                        Số điện thoại
                      </label>
                      <div className="dokan-w5 dokan-text-left">
                        <input
                            required
                          id="setting_phone"
                          value={mobile}
                          name="setting_phone"
                          placeholder="+123456.."
                          className="dokan-form-control input-md"
                          type="number"
                          onChange={(e) =>setmobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="dokan-form-group">
                    <label className="dokan-w3 dokan-control-label" htmlFor="dokan_setting">
                        <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>PayPal</font>
                        </font>
                    </label>
                    <div className="dokan-w6">
                        <div className="dokan-form-group">
                        <div className="dokan-w8">
                            <div className="dokan-input-group">
                            <input
                                name="account_no"
                                className="dokan-form-control email"
                                placeholder="you@domain.com"
                                type="email"
                                required
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
              
                    <div className="dokan-form-group">
                      <div
                        className="dokan-w4 ajax_prev dokan-text-left"
                        style={{ marginLeft: "24%" }}
                      >
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            <input
                              type="submit"
                              name="dokan_update_store_settings"
                              className="dokan-btn dokan-btn-danger dokan-btn-theme"
                              value="Cập nhật cài đặt"
                            />
                          </font>
                        </font>
                      </div>
                    </div>
                  </form>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                            .dokan-settings-content .dokan-settings-area .dokan-banner {\n                                                width: 625px;\n                                                height: 300px;\n                                            }\n\n                                            .dokan-settings-content .dokan-settings-area .dokan-banner .dokan-remove-banner-image {\n                                                height: 300px;\n                                            }\n                                        "
                    }}
                  />
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
