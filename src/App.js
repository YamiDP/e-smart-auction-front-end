import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./store.css";
import { AboutPage } from "./Pages/AboutPage";
import { BestSellerPage } from "./Pages/BestSellerPage";
import { BlogPage } from "./Pages/BlogPage";
import { CateSubPage } from "./Pages/CateSubPage";
import { ContactPage } from "./Pages/ContactPage";
import { CateSecondSubPage } from "./Pages/CateSecondSubPage";
import { DetailProductPage } from "./Pages/DetailProductPage";
import { HomePage } from "./Pages/HomePage";
import { ProductCatePage } from "./Pages/ProductCatePage";
import { StoreListingPage } from "./Pages/StoreListingPage";
import { HomeTemplate } from "./Templates/HomeTemplate";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { VenderStore } from "./Pages/RegisterPage/Vendor/store";
import { VenderPayment } from "./Pages/RegisterPage/Vendor/payment";
import { VenderReady } from "./Pages/RegisterPage/Vendor/ready";
import { CartPage } from "./Pages/CartPage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { DashVendorPage } from "./Pages/DashVendor";
import { AccountVendorPage } from "./Pages/AccountVendorPage";
import { VendorOrderPage } from "./Pages/VendorOrderPage";
import { ProductVendorPage } from "./Pages/ProductVendorPage";
import { StoreSettingVendorPage } from "./Pages/StoreSettingVendorPage";
import { VisitStoreVendorPage } from "./Pages/VisitStoreVendorPage";
import { AccountCustomerPage } from "./Pages/AccountCustomerPage";
import { AutionCustomerPage } from "./Pages/AutionCustomerPage";
import { DashCustomerPage } from "./Pages/DashCustomerPage";
import { WalletVendorPage } from "./Pages/WalletVendorPage";


function App() {
  const token = localStorage.getItem("access_token")
  const type = localStorage.getItem("type")
  return (
    <>
      <HomeTemplate>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="shop">
              <Route
                path="products-by-categories"
                element={<ProductCatePage />}
              />
              <Route
                path="best-selling-products"
                element={<BestSellerPage />}
              />
            </Route>
            <Route path="product-category-first-sub-category">
              <Route path=":firstSub" element={<CateSubPage />} />
            </Route>
            <Route path="product-category-second-sub-category/">
              <Route path=":secondSub" element={<CateSecondSubPage />} />
            </Route>
            <Route path="store-listing" element={<StoreListingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog">
              <Route path="blog-boxed-layout" element={<BlogPage />} />
            </Route>
            <Route path="product">
              <Route path=":product" element={<DetailProductPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="user">
              <Route path="process-store" element={<VenderStore />} />
              <Route path="process-payment" element={<VenderPayment />} />
              <Route path="process-ready" element={<VenderReady />} />
            </Route>
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="dash-vendor" element={<DashVendorPage />} />
          <Route path="account-vendor" element={<AccountVendorPage />} />
          <Route path="order-vendor" element={<VendorOrderPage />} />
          <Route path="wallet-vendor" element={<WalletVendorPage />} />
          <Route path="product-vendor" element={<ProductVendorPage />} />
          <Route path="store-setting-vendor" element={<StoreSettingVendorPage />} />
          <Route path="visit-store-vendor" element={<VisitStoreVendorPage />} />
          <Route path="account-customer" element={<AccountCustomerPage />} />
          <Route path="aution-customer" element={<AutionCustomerPage />} />
          <Route path="dash-customer" element={<DashCustomerPage />} />
        </Routes>
      </HomeTemplate>
    </>
  );
}

export default App;
