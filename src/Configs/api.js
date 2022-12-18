// const domain = "https://e-smart-auction-api-server.herokuapp.com";
// const domain = "http://localhost:8000"
const domain = "https://e-smart-auction-server.herokuapp.com"
const arr = [
  ["menu", "menu/get-all-parent-categories"],
  ["homeLastestAuction", "home/get-lastest-auction"],
  ["allParentCates", "parent-category/get-all-parent-categories"],
  ["parentCate", "parent-category", true],
  ["lastestAuction","home/get-lastest-auction"],
  ["parentCategory","parent-category/get-all-parent-categories"],
  ["getProductsByFirstSub","product/get-products-by-first-sub-category-slug/"],
  ["getProductsBySecondSub","product/get-products-by-second-sub-category-slug/"],
  ["detailProduct", "product/show/"],
  ["relatedProduct", "product/get-related-products-by-product-slug/"],
  ["allSize", "size/get-all-sizes"],
  ["allColor", "color/get-all-colors"],
  ["sellerById", "seller/show/"],
  ["allSeller", "seller/get-all-sellers"],
  ["getProductsByFirstSub", "product/get-products-by-first-sub-category-slug/"],
  ["getPrivince", "province/get-all-provinces"],
  ["getDistrict", "district/get-all-districts"],
  ["getDistrictById", "district/show/"],
  ["getWard", "ward/get-all-wards"],
  ["getWardById", "ward/show/"],
  ["login", "user/login"],
  ["getToken", "braintree/getToken"],
  ["processPayment", "payment/processPayment"],
  ["transport", "transport/get-transport-by-district-id/"],
  ["getDistrictByProvince", "district/get-district-by-province-id/"],
  ["getWarByDistrict", "ward/get-ward-by-district-id/"],
  ["newBid", "bid/create-new-bid"],
  ["sellerUpdate", "seller/update-account"],
  ["register", "user/register"],
  ["sellerGetOrder", "seller/get-orders-by-seller-id"],
  ["sellerGetProduct", "seller/get-products-by-seller-id"],
  ["productDetail", "seller/get-product-detail-by-product-id/"],
  ["uploadImage", "admin/upload/image/products"],
  ["newProduct", "seller/create-new-product"],
  ["updateStore", "seller/update-store-information"],
  ["buyerById", "buyer/show/"],
  ["buyerUpdate", "buyer/update-account"],
  ["successBids", "buyer/get-success-bids-by-seller-id"],
  ["updateProduct", "seller/update-product/"],
  ["deleteProduct", "seller/delete-product/"],
  ["productStore", "seller/get-products-in-store"],
  ["sellerWallet", "seller/get-wallet"],
  ["sellerDash", "seller/seller-dashboard"],
  ["sellerChart", "seller/get-data-chart"],
  ["sellerSendDraw", "seller/send-withdraw-request"],

]
const API = {};
arr.map(
  (item) =>
    (API[item[0]] = [
      item[2]
        ? (props) => `${domain}/${item[1]}/${props}`
        : `${domain}/${item[1]}`,
    ])
);

export { API };
