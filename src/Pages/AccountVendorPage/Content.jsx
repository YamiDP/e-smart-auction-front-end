import { useMemo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"
const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'

export const Content = () => {
    let history = useNavigate ();
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [award, setAward] = useState([]);
    const token_access =  localStorage.getItem("access_token")
    const user_id =  localStorage.getItem("user_id")
    const [accessToken, setAccessToken] = useState();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [housenumber_street, sethousenumber_street] = useState('');
    const [mobile, setmobile] = useState('');
    const [zip_code, setzip_code] = useState('');
    const [ward, setward] = useState('');
    const [seller, setSeller] = useState({
        fullname: '',
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
    const submitAccount = async (e) => {
        console.log(e.target.password_1.value)
      e.preventDefault();
      const response = await axios.put(
        API['sellerUpdate'],
        // '{\n    "fullname": "Nguy\u1EC5n Trung Ki\xEAn",\n    "username": "nguyentrungkien10a4truongchinh",\n    "email": "nguyentrungkien2324@gmail.com",\n    "password": "123456aA@",\n    "mobile": "0334662260",\n    "housenumber_street": "123 Vo Van Ngan",\n    "zip_code": "100000",\n    "ward": 55\n}',
        {
          'fullname': fullname,
          'username':username,
          'email': email,
          'password': e.target.password_1.value,
          'mobile': mobile,
          'housenumber_street': housenumber_street,
          'zip_code':zip_code,
          'ward': ward.id
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
           setFullname(dataSeller.fullname)
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
     //   await axios.get(API['getWard']).then(function (response) {
     //     const dataw = response.data;
     //     setAward(dataw)
     // }).catch(function (error) {
     //     console.log(error);
     // });
         // ...
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
                  <div className="dokan-dashboard-content">
                    <article className="dashboard-content-area woocommerce edit-account-wrap">
                      <h1 className="entry-title">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Chỉnh sửa chi tiết tài khoản
                          </font>
                        </font>
                      </h1>
                      <form
                        onSubmit={submitAccount}
                        className="edit-account"
                        method="post"
                      >
                        <p
                          className="form-row form-row-first"
                          style={{ width: "100%" }}
                        >
                          <label>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Họ và tên
                              </font>
                            </font>
                            <span className="required">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>*</font>
                              </font>
                            </span>
                          </label>
                          <input
                            required
                            type="text"
                            className="input-text"
                            name="fullname"
                            value={fullname}
                            onChange={(e) =>setFullname(e.target.value)}
                          />
                          <br />
                        </p>
                        <div className="clear" />
                        <p className="form-row form-row-wide">
                          <label htmlFor="user_name">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Tên đăng nhập
                              </font>
                            </font>
                            <span className="required">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>*</font>
                              </font>
                            </span>
                          </label>
                          <input
                           required
                            type="user"
                            className="input-text"
                            name="username"
                            value={username}
                            onChange={(e) =>setUsername(e.target.value)}
                          />
                        </p>
                        <div className="clear" />
                        <p className="form-row form-row-wide">
                          <label htmlFor="account_phone">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Số điện thoại{" "}
                              </font>
                            </font>
                            <span className="required">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>*</font>
                              </font>
                            </span>
                          </label>
                          <input
                           required
                            type="number"
                            className="input-text"
                            name="mobile"
                            id="account_phone"
                           
                            value={mobile}
                            onChange={(e) =>setmobile(e.target.value)}
                          />
                        </p>
                        <div className="clear" />
                        <p className="form-row form-row-wide">
                          <label htmlFor="account_email">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Địa chỉ email{" "}
                              </font>
                            </font>
                            <span className="required">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>*</font>
                              </font>
                            </span>
                          </label>
                          <input
                            required
                            type="email"
                            className="input-text"
                            name="email"
                            id="account_email"
                            value={email}
                            onChange={(e) =>setemail(e.target.value)}

                          />
                        </p>
                        <div className="clear" />
                        <fieldset>
                          <legend>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Thay đổi địa chỉ
                              </font>
                            </font>
                          </legend>
                          <div className="dokan-form-group">
                            <div className="dokan-form-group">
                              <label
                                className="control-label"
                                htmlFor="dokan_address[street_1]"
                              >
                                <font style={{ verticalAlign: "inherit" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    Số nhà, tên đường
                                  </font>
                                </font>
                              </label>
                              <input
                                id="dokan_address[street_1]"
                                value={housenumber_street}
                                onChange={(e) =>sethousenumber_street(e.target.value)}
                                name="housenumber_street"
                                placeholder="địa chỉ đường phố"
                                className="dokan-form-control input-md"
                                type="text"
                              />
                            </div>
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
                            <div className="dokan-from-group">
                              <div className="dokan-form-group dokan-w5 dokan-left">
                                <label
                                  className="control-label"
                                  htmlFor="dokan_address[zip]"
                                >
                                  Post/ZIP Code{" "}
                                </label>
                                <input
                                  id="dokan_address[zip]"
                                  value={zip_code}
                                  name="zip_code"
                                  placeholder="Mã bưu / Zip"
                                  className="dokan-form-control input-md"
                                  type="text"
                                  onChange={(e) =>setzip_code(e.target.value)}
                                />
                              </div>
                              <div className="dokan-clearfix" />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <legend>
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                Thay đổi mật khẩu
                              </font>
                            </font>
                          </legend>
                          <p className="form-row form-row-wide">
                            <label htmlFor="password_current">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Mật khẩu hiện tại (để trống không thay đổi)
                                </font>
                              </font>
                            </label>
                            <input
                              required
                              type="password"
                              className="input-text"
                              name="password_current"
                              id="password_current"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <label htmlFor="password_1">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Mật khẩu mới (để trống không thay đổi)
                                </font>
                              </font>
                            </label>
                            <input
                             required
                              type="password"
                              className="input-text"
                              name="password_1"
                              id="password_1"
                            />
                          </p>
                          <p className="form-row form-row-wide">
                            <label htmlFor="password_2">
                              <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                  Xác nhận mật khẩu mới
                                </font>
                              </font>
                            </label>
                            <input
                              type="password"
                              className="input-text"
                              name="password_2"
                              id="password_2"
                              required
                            />
                          </p>
                        </fieldset>
                        <div className="clear" />
               
                        <div className="clear" />
                        <button type="submit" className="dokan-btn dokan-btn-danger dokan-btn-theme">Lưu thay đổi</button>
                      </form>
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