import { Link, useNavigate } from "react-router-dom";
export const DashCustomerMenu = ({ countView = null }) => {
let history = useNavigate ();
    const Logout = () =>{
        localStorage.removeItem("access_token")
        localStorage.removeItem("user_id")
        localStorage.removeItem("type")
        history('/',
        {state: { message: "Đăng xuất thành công!" }
      });
      }
  const url = window.location.pathname
  const active = (path)=>{
    console.log(url == path)
    if(path == url)
    {
      return('active')
    }
  }
    return (
        <div className="dokan-dash-sidebar">
        <div id="dokan-navigation" aria-label="Thực đơn"><label id="mobile-menu-icon" htmlFor="toggle-mobile-menu" aria-label="Thực đơn">
            <font style={{verticalAlign: 'inherit'}}>
              <font style={{verticalAlign: 'inherit'}}>☰</font>
            </font>
          </label><input id="toggle-mobile-menu" type="checkbox" />
          <ul className="dokan-dashboard-menu">
            <li className={url == '/dash-customer'? "dashboard active": "dashboard"}><Link to="/dash-customer"><i className="fas fa-tachometer-alt" />
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Tổng quan</font>
                </font>
              </Link></li>
            <li className={url == '/aution-customer'? "auction active": "auction"}>
              <Link to="/aution-customer">
                <i className="fas fa-briefcase" />
                Đấu giá
              </Link>
            </li>
            <li className={url == '/account-customer'? "edit-account active": "edit-account"}><Link to="/account-customer"><i className="fas fa-user" />
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Tài khoản
                  </font>
                </font>
              </Link></li>
            <li className="log_out"><a onClick={ () => Logout() }><i className="fas fa-power-off" />
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>Đăng xuất
                  </font>
                </font>
              </a></li>
          </ul>
        </div>
      </div>
        
    
    );
  };
  