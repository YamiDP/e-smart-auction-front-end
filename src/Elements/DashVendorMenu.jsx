import { Link, useNavigate } from "react-router-dom";
export const DashVendorMenu = ({ countView = null }) => {
  const url = window.location.pathname
  let history = useNavigate ();
  const Logout = () =>{
    localStorage.removeItem("access_token")
    localStorage.removeItem("user_id")
    localStorage.removeItem("type")
    history('/',
    {state: { message: "Đăng xuất thành công!" }
  });
  }
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
          <li className={url == '/dash-vendor'? "dashboard active": "dashboard"} ><Link to="/dash-vendor"><i className="fas fa-tachometer-alt" />
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>Tổng quan</font>
              </font>
            </Link></li>
          <li className={url == '/product-vendor'? "products active": "products"}><Link to="/product-vendor"><i className="fas fa-briefcase" />
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>Các sản phẩm</font>
              </font>
            </Link></li>
          <li className={url == '/order-vendor'? "orders active": "orders"}><Link to="/order-vendor"><i className="fas fa-shopping-cart" />
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>Đơn đặt hàng</font>
              </font>
            </Link></li>
          <li  className={url == '/wallet-vendor'? "withdraw active": "withdraw"}><Link to="/wallet-vendor"><i className="fas fa-upload" />
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>Rút tiền</font>
              </font>
            </Link></li>
          <li className={url == '/store-setting-vendor'? "active": ""}><Link to="/store-setting-vendor"><i className="fas fa-university" /> Cửa hàng</Link></li>
          <li className="dokan-common-links dokan-clearfix">
            <a title className="tips" data-placement="top" href="#/store/dsafs/" target="_blank" data-original-title="Ghé cửa hàng">
              <i className="fas fa-external-link-alt" />
            </a>
            <Link to="/account-vendor" title className="tips" data-placement="top" data-original-title="Chỉnh sửa thông tin"><i className="fas fa-user" /></Link>
            <a onClick={ () => Logout() } title className="tips" data-placement="top" data-original-title="Đăng xuất"><i className="fas fa-power-off" /></a>
          </li>
        </ul>
      </div>
    </div>
        
    
    );
  };
  