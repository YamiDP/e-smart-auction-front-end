import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { DashCustomerMenu } from "../../Elements/DashCustomerMenu"
import { useNavigate    } from 'react-router-dom';

export const Content = () => {
  const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'
  let history = useNavigate ();
  const token = localStorage.getItem("access_token")
  const user_id = localStorage.getItem("user_id")
  const type = localStorage.getItem("type")
  const [buyer, setBuyer] = useState([])
  useEffect(() => {
    if(!localStorage.getItem("access_token"))
    {
     history('/login',
     {state: { message: "Bạn chưa đăng nhập!" }
   });
    }
    async function fetchData() {
  
  axios.get(API['buyerById']+user_id).then(function (res) {
      const data = res.data;
      console.log(data)
      setBuyer(data);
  
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
                  <div className="dokan-dashboard-content">
                    <div className="dokan-profile-frame-wrapper
                                                profile-frame
                                                profile-info-box profile-layout-default
                                                profile-info-summery-wrapper dokan-clearfix" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                      <div className="profile-info-head">
                        <div className="profile-img profile-img-circle">
                          <img src="https://secure.gravatar.com/avatar/4ad54e1f11a96567ca10ba087cc87957?s=96&d=mm&r=g" alt="Yami" size={150} />
                        </div>
                        <h1 className="store-name">{buyer.fullname}</h1>
                      </div>
                      <div className="profile-info">
                        <ul className="dokan-store-info">
                          <li className="dokan-store-username">
                            <i className="fa fa-user" aria-hidden="true" />
                            <span className="username">{buyer.username}</span>
                          </li>
                          <li className="dokan-store-address">
                            <i className="fas fa-map-marker-alt" />
                            <span className="city">{buyer.housenumber_street},</span>
                            <span className="country"> Vietnam </span>
                          </li>
                          <li className="dokan-store-phone">
                            <i className="fas fa-mobile-alt" />
                            <a href="tel:0522127609">{buyer.mobile}</a>
                          </li>
                          <li className="dokan-store-email">
                            <i className="far fa-envelope" />
                            <a href="mailto:yamikami2002@gmail.com">{buyer.email}</a>
                          </li>
                          <li className="dokan-store-rating">
                            <i className="fas fa-star" />
                            No ratings found yet!
                          </li>
                        </ul>
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

    )
}