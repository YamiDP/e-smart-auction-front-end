import { WrapperContent } from "../../Elements/WrapperContent";
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { useNavigate    } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DashVendorMenu } from "../../Elements/DashVendorMenu"

export const Content = () => {
  const BaseUrl ='http://localhost:8000'
  const token_access =  localStorage.getItem("access_token")
  const type = localStorage.getItem("type")
  //const token_access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbnRydW5na2llbjIzMjRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJuZ3V5ZW50cnVuZ2tpZW4xMGE0dHJ1b25nY2hpbmgiLCJ1c2VyX3R5cGUiOiJ2ZW5kb3IiLCJpYXQiOjE2NzA2MDU3MjQsImV4cCI6MTY3MDY5MjEyNH0.sKgdAVebpjWu59RJjYJbrXm_QPdQSqntLQsOky7PjVw'
  const user_id =  localStorage.getItem("user_id")
  const [sellerProduct, setSellerProduct] = useState([]);
  const [allSize, setAllSize] = useState([]);
  const [allColor, setAllColor] = useState([]);
  const [productById, setProductById] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [previewImage1, setPreviewImage1] = useState();
  const [previewImage2, setPreviewImage2] = useState();
  const [cate, setCate] = useState([]);
  const [prductDetail, setPrductDetail] = useState({});
  const [productId, setProductId] = useState('');
  const [sku, setsku] = useState('');
  const [name, setname] = useState('');
  const [hover_featured_image, set_hover_featured_image] = useState('');
  const [featured_image, set_featured_image] = useState('');
  const [short_subscription, set_short_subscription] = useState('');
  const [description_detail,  set_description_detail] = useState('');
  const [additional_information,  set_additional_information] = useState('');
  const [condition,  set_condition] = useState();
  const [price,  set_price] = useState();
  const [start_bid_amount,  set_start_bid_amount] = useState();
  const [current_bid_amount,  set_current_bid_amount] = useState();
  const [step_bid_amount,  set_step_bid_amount] = useState();
  const [auction_start,  set_auction_start] = useState();
  const [auction_end,  set_auction_end] = useState();
  const [color_id,  set_color_id] = useState();
  const [category_id,  set_category_id] = useState();
  const [size_id,  set_size_id] = useState();

  const setProduct = async (id)=> {
    if(typeof id =='number')
    {
      await axios.get(API['productDetail']+id,  {
        headers: {
            'access_token': token_access,
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        const data = response.data;
        console.log( response.data)
        setProductId(data.id)
        setsku(data.sku)
        setname(data.name)
        set_hover_featured_image(data.hover_featured_image)
        set_featured_image(data.featured_image)
        set_short_subscription(data.short_subscription)
        set_description_detail(data.description_detail)
        set_condition(data.condition)
        set_price(data.price)
        set_start_bid_amount(data.start_bid_amount)
        set_current_bid_amount(data.current_bid_amount)
        set_step_bid_amount(data.step_bid_amount)
        set_auction_start(data.auction_start)
        set_auction_end(data.auction_end)
        set_color_id(data.color_id)
        set_category_id(data.category_id)
        set_size_id(data.size_id)
        set_additional_information(data.additional_information)
        setShowEdit(true)
      }).catch(function (error) {
        console.log(error);
      });
    }
   
  }
  let history = useNavigate ();
  const submitDeleteProduct = async (e) => {
    const response = await axios.delete(
      API['deleteProduct']+e,
      {
          headers: {
              'access_token': token_access,
              'Content-Type': 'application/json'
          }
      }
  ).then((res)=>{
    getAllProductBySeller()
    toast('Thành công!');
  }).catch(function (error) {
    toast('Error!');
      console.log(error);
  });;
  };
  const submitEditProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      API['updateProduct']+productId,
      // '{\n    "fullname": "Nguy\u1EC5n Trung Ki\xEAn",\n    "username": "nguyentrungkien10a4truongchinh",\n    "email": "nguyentrungkien2324@gmail.com",\n    "password": "123456aA@",\n    "mobile": "0334662260",\n    "housenumber_street": "123 Vo Van Ngan",\n    "zip_code": "100000",\n    "ward": 55\n}',
      {
        "sku": sku,
        "name": name,
       "hover_featured_image": previewImage2,
       "featured_image": previewImage1,
       "short_subscription": e.target.short_subscription.value,
       "description_detail":e.target.description_detail.value,
       "additional_information": e.target.additional_information.value,
       "condition": e.target.condition.value,
        "price": e.target.price.value,
        "start_bid_amount":e.target.start_bid_amount.value, 
        "current_bid_amount": e.target.current_bid_amount.value,
        "step_bid_amount": e.target.step_bid_amount.value,
        "auction_start": moment(e.target.auction_start.value).format('YYYY-MM-DD HH:mm:ss'),
        "auction_end": moment(e.target.auction_end.value).format('YYYY-MM-DD HH:mm:ss'),
        "category_id": e.target.category_id.value,
        "size_id": e.target.size_id.value,
        "color_id": e.target.color_id.value,

      },
      {
          headers: {
              'access_token': token_access,
              'Content-Type': 'application/json'
          }
      }
  ).then((res)=>{
    getAllProductBySeller()
    toast('Thành công!');
  }).catch(function (error) {
    toast('Error!');
      console.log(error);
  });;
  };
  const submitNewProduct = async (e) => {
  e.preventDefault();
  const response = await axios.post(
    API['newProduct'],
    // '{\n    "fullname": "Nguy\u1EC5n Trung Ki\xEAn",\n    "username": "nguyentrungkien10a4truongchinh",\n    "email": "nguyentrungkien2324@gmail.com",\n    "password": "123456aA@",\n    "mobile": "0334662260",\n    "housenumber_street": "123 Vo Van Ngan",\n    "zip_code": "100000",\n    "ward": 55\n}',
    {
      "sku": e.target.sku.value,
      "name": e.target.name.value,
     "hover_featured_image": previewImage2,
     "featured_image": previewImage1,
     "short_subscription": e.target.short_subscription.value,
     "description_detail":e.target.description_detail.value,
     "additional_information": e.target.additional_information.value,
     "condition": e.target.condition.value,
      "price": e.target.price.value,
      "start_bid_amount":e.target.start_bid_amount.value, 
      "current_bid_amount": e.target.current_bid_amount.value,
      "step_bid_amount": e.target.step_bid_amount.value,
      "auction_start": moment(e.target.auction_start.value).format('YYYY-MM-DD HH:mm:ss'),
      "auction_end": moment(e.target.auction_end.value).format('YYYY-MM-DD HH:mm:ss'),
      "category_id": e.target.category_id.value,
      "size_id": e.target.size_id.value,
      "color_id": e.target.color_id.value,
    },
    {
        headers: {
            'access_token': token_access,
            'Content-Type': 'application/json'
        }
    }
).then((res)=>{
  toast('Thành công!');
  getAllProductBySeller()
  e.target.reset();
}).catch(function (error) {
  toast('Error!');
    console.log(error);
});;
};


  const previewImageBack2 =async (files, e)=>{
    const form = new FormData()
    form.append('products', files[0])
  
  await axios.post(API['uploadImage'], form,{
    headers: {
      'access_token':token_access,
    }
  }).then(function (response) {
    const data = response.data;
    console.log( response.data)
    setPreviewImage2(data)}).catch(function (error) {
    console.log(error);
  });
  }
  const previewImageBack =async (files, e)=>{
    console.log(typeof files[0])
    const form = new FormData()
    form.append('products', files[0])
  
  await axios.post(API['uploadImage'], form,{
    headers: {
      'access_token': token_access,
    }
  }).then(function (response) {
    const data = response.data;
    console.log( response.data)
    setPreviewImage1(data)}).catch(function (error) {
    console.log(error);
  });
  }
  const getAllProductBySeller = async ()=>{
    await axios.get(API['sellerGetProduct'], {
      headers: {
          'access_token': token_access,
          'Content-Type': 'application/json'
      }
  }).then(function (response) {
       const data = response.data;
       console.log(data)
       setSellerProduct(data)
   }).catch(function (error) {
       console.log(error);
   });
  }
  
  useEffect(() => {
  if(!localStorage.getItem("access_token") || type !== 'vendor')
  {
   history('/login',
   {state: { message: "Bạn chưa đăng nhập!" }
 });
  }
  async function fetchData() {
    getAllProductBySeller()
 await axios.get(API['allSize']).then(function (response) {
  const data = response.data;
  setAllSize(data);
}).catch(function (error) {
  console.log(error);
});

await axios.get(API['allColor']).then(function (responseColor) {
  const dataColor = responseColor.data;
  setAllColor(dataColor);
}).catch(function (error) {
  console.log(error);
});
await axios.get(API['menu']).then(function (res) {
  const menu = res.data;
  console.log(menu)
  setCate(menu);
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
        <article id="post-4867" className="post-4867 page type-page status-publish hentry">
          <div className="entry-content">
            <div className="dokan-dashboard-wrap">
           <DashVendorMenu/>
              <div className="dokan-dashboard-content dokan-product-listing">
                <article className="dokan-product-listing-area">
                
              {
                ( showEdit == false &&(
                  <>
                  <h2><i className="fas fa-briefcase">&nbsp;</i>&nbsp;Thêm sản phẩm mới</h2>
                  <form onSubmit={submitNewProduct} action method="post" id="dokan-add-new-product-form" data-hs-cf-bound="true">
                  <div className="product-form-container">
                    <div className="content-half-part dokan-feat-image-content">
                      <div className="dokan-feat-image-upload">
                        <div className="instruction-inside">
                          <input type="hidden" name="feat_image_id" className="dokan-feat-image-id" defaultValue={0} />
                          <i className="fas fa-cloud-upload-alt" />
                          <a href="#" className="dokan-feat-image-btn btn btn-sm">Tải ảnh
                            nổi bật 1
                          </a>
                          <input
                              id="img_face"
                              type="file"
                              class="file_img"
                              accept="image/*,.heic"
                              onChange={(e)=> previewImageBack(e.target.files, e)} 
                            />
                        </div>
                        {
                          previewImage1 !== undefined  ?(
                            <img width={200} height={200} src={BaseUrl+previewImage1} className="attachment-thumbnail size-thumbnail" alt="" />
                          ):
                         <></>
                        }
                       
                      </div>
                      <div className="dokan-product-gallery">
                        <div className="dokan-side-body" id="dokan-product-images">
                          <div id="product_images_container">
                            <span className="product_images dokan-clearfix ui-sortable">
                            </span>
                            <input type="hidden" id="product_image_gallery" name="product_image_gallery" defaultValue />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-half-part dokan-feat-image-content">
                      <div className="dokan-feat-image-upload">
                        <div className="instruction-inside">
                          <input type="hidden" name="feat_image_id" className="dokan-feat-image-id" defaultValue={0} />
                          <i className="fas fa-cloud-upload-alt" />
                          <a href="#" className="dokan-feat-image-btn btn btn-sm">Tải ảnh
                            nổi bật 2</a>
                            <input
                              id="img_face"
                              type="file"
                              class="file_img"
                              accept="image/*,.heic"
                              onChange={(e)=> previewImageBack2(e.target.files, e)} 
                            />
                        </div>
                        {
                          previewImage2 !== undefined  ?(
                            <img width={200} height={200} src={BaseUrl+previewImage2} className="attachment-thumbnail size-thumbnail" alt="" />
                          ):
                         <></>
                        }
                       
                      </div>
                      <div className="dokan-product-gallery">
                        <div className="dokan-side-body" id="dokan-product-images">
                          <div id="product_images_container">
                            <span className="product_images dokan-clearfix ui-sortable">
                            </span>
                            <input type="hidden" id="product_image_gallery" name="product_image_gallery" defaultValue />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-full-container">
                      <div className="dokan-form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="dokan-form-control" name="name" required />
                      </div>
                      <div className="dokan-form-group">
                        <label>SKU</label>
                        <input type="text" className="dokan-form-control" name="sku" required/>
                      </div>
                      <div className="dokan-form-group">
                        <p>
                          <label>Kích thước</label>
                          <select required name="color_id">
                            {
                              allSize.map((s, index1)=>(
                                <option value={s.id }>{s.name }</option>
                              ))
                            }
                          
                          </select>
                          <label>Màu sắc</label>
                          <select required name="size_id">
                          {
                              allColor.map((c, index1)=>(
                                <option value={c.id }>{c.name }</option>
                              ))
                            }
                          </select>
                        </p>
                      </div>
                      <div className="dokan-form-group">
                        <label>Mô tả</label>
                        <textarea required name="short_subscription" id className="dokan-form-control" rows={3} defaultValue={""} />
                      </div>
                      <div className="dokan-form-group">
                        <label>Mô tả chi tiết</label>
                        <textarea required name="description_detail" id className="dokan-form-control" rows={5} defaultValue={""} />
                      </div>
                      <div className="dokan-form-group">
                        <label>Thông tin bổ sung</label>
                        <textarea required name="additional_information" id className="dokan-form-control" rows={2} defaultValue={""} />
                      </div>
                      <div className="dokan-form-group">
                        <label>Tình trạng</label>
                        <input required type="text" className="dokan-form-control" name="condition" />
                      </div>
                      <div className="dokan-form-group">
                        <label>Danh mục</label>
                        <select required name="category_id" className="city_to_district dokan-form-control">
                          <optgroup label="------------------------------">
                            {/* {
                              cate.map((c,i)=>(
                                item.firstSubCategories.map((item1, index3) => (
                                  item1.secondSubCategories.map((item2, index4) => (
                              ))
                            } */}
                            { cate.map((c,i)=>(
                              c.firstSubCategories.map((item1, index3) => (
                                <>

                                  {item1.name}
                                {
                                  item1.secondSubCategories.map((item2, index4) => (
                                    <option value={item2.id}>{item2.name}</option>
                                  ))
                                }
                                </>
                              ))
                              ))
                            }
                          </optgroup>
                        </select>
                    
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá khởi điểm</label>
                        <input required type="number" className="dokan-form-control" name="start_bid_amount" />
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá hiện tại</label>
                        <input required type="number" className="dokan-form-control" name="current_bid_amount" />
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá mua ngay</label>
                        <input required type="number" className="dokan-form-control" name="price" />
                      </div>
                      <div className="dokan-form-group">
                        <label>Bước nhảy</label>
                        <input required type="number" className="dokan-form-control" name="step_bid_amount" />
                      </div>
                      <div className="dokan-form-group">
                        <p>
                          <label htmlFor="birthdaytime">Ngày bắt đầu:</label>
                          <input required type="datetime-local" id="birthdaytime" name="auction_start" />
                          <label htmlFor="birthdaytime">Ngày kết thúc:</label>
                          <input required type="datetime-local" id="birthdaytime" name="auction_end" />
                        </p>
                      </div>
                      <button type="submit" style={{background: "#ffff",border: "0px"}}>
                      <div className="dokan-form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <span type="submit" className="dokan-add-product">
                          <a href="#/dashboard/new-product/" className="dokan-btn dokan-btn-theme dokan-add-new-product">
                            <i className="fas fa-briefcase">&nbsp;</i>
                            <font style={{verticalAlign: 'inherit'}}>
                              <font htmlFor="submit_add" style={{verticalAlign: 'inherit'}}>
                                Thêm sản phẩm mới</font>
                            </font>
                          </a>
                        </span>
                      
                      </div>
                      </button>
                    </div>
                  </div>
                </form></>
                ))
                
              }
              {
                ( showEdit == true &&(
                  <>
                  <h2><i className="fas fa-briefcase">&nbsp;</i>&nbsp;Sửa sản phẩm</h2>
                  <form onSubmit={submitEditProduct} action method="post" id="dokan-add-new-product-form" data-hs-cf-bound="true">
                  <div className="product-form-container">
                    <div className="content-half-part dokan-feat-image-content">
                      <div className="dokan-feat-image-upload">
                        <div className="instruction-inside">
                          <input type="hidden" name="feat_image_id" className="dokan-feat-image-id" defaultValue={0} />
                          <i className="fas fa-cloud-upload-alt" />
                          <a href="#" className="dokan-feat-image-btn btn btn-sm">Tải ảnh
                            nổi bật 1
                          </a>
                          <input
                              id="img_face"
                              type="file"
                              class="file_img"
                              accept="image/*,.heic"
                              onChange={(e)=> previewImageBack(e.target.files, e)} 
                            />
                            
                        </div>
                       
                        {
                          previewImage1 !== undefined  ?(
                            <img src={BaseUrl+previewImage1} class="img-thumbnail" style={{maxWidth: "50%"}}/>
                           
                          ):
                          <img src={BaseUrl+featured_image} class="img-thumbnail" style={{maxWidth: "50%"}}/>
                        }
                      </div>
                      <div className="dokan-product-gallery">
                        <div className="dokan-side-body" id="dokan-product-images">
                          <div id="product_images_container">
                            <span className="product_images dokan-clearfix ui-sortable">
                            </span>
                            <input type="hidden" id="product_image_gallery" name="product_image_gallery" defaultValue />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-half-part dokan-feat-image-content">
                      <div className="dokan-feat-image-upload">
                        <div className="instruction-inside">
                          <input type="hidden" name="feat_image_id" className="dokan-feat-image-id" defaultValue={0} />
                          <i className="fas fa-cloud-upload-alt" />
                          <a href="#" className="dokan-feat-image-btn btn btn-sm">Tải ảnh
                            nổi bật 2</a>
                            <input
                              id="img_face"
                              type="file"
                              class="file_img"
                              accept="image/*,.heic"
                              onChange={(e)=> previewImageBack2(e.target.files, e)} 
                            />
                            
                        </div>
                        {
                          previewImage2 !== undefined ?(
                            <img src={BaseUrl+previewImage2} class="img-thumbnail" style={{maxWidth: "50%"}}/>
                            
                          ):
                          <img src={BaseUrl+hover_featured_image} class="img-thumbnail" style={{maxWidth: "50%"}}/>
                        } 
                      </div>
                      <div className="dokan-product-gallery">
                        <div className="dokan-side-body" id="dokan-product-images">
                          <div id="product_images_container">
                            <span className="product_images dokan-clearfix ui-sortable">
                            </span>
                            <input type="hidden" id="product_image_gallery" name="product_image_gallery" defaultValue />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-full-container">
                      <div className="dokan-form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="dokan-form-control" name="product_name" value={name} onChange={(e) =>setname(e.target.value)} required />
                      </div>
                      <div className="dokan-form-group">
                        <label>SKU</label>
                        <input type="text" className="dokan-form-control" name="sku"  value={sku} onChange={(e) =>setsku(e.target.value)} required/>
                      </div>
                      <div className="dokan-form-group">
                        <p>
                          <label>Kích thước</label>
                          <select required name="size_id" onChange={(e) =>set_size_id(e.target.value)}>
                            {
                              allSize.map((s, index1)=>(size_id == s.id?(
                                <option value={s.id } selected>{s.name }</option>
                              ):
                              (<option value={s.id }>{s.name }</option>)
                              ))
                            }
                          
                          </select>
                          <label>Màu sắc</label>
                          <select required name="color_id" onChange={(e) =>set_color_id(e.target.value)}>
                          {
                              allColor.map((c, index1)=>(color_id == c.id?
                                (<option value={c.id } selected>{c.name }</option>):
                                (<option value={c.id }>{c.name }</option>)
                              ))
                            }
                          </select>
                        </p>
                      </div>
                      <div className="dokan-form-group">
                        <label>Mô tả</label>
                        <textarea required name="short_subscription" id className="dokan-form-control" rows={3} value={short_subscription} onChange={(e) =>set_short_subscription(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <label>Mô tả chi tiết</label>
                        <textarea required name="description_detail" id className="dokan-form-control" rows={5} value={description_detail} onChange={(e) =>set_description_detail(e.target.value)} />
                      </div>
                      <div className="dokan-form-group">
                        <label>Thông tin bổ sung</label>
                        <textarea required name="additional_information" id className="dokan-form-control" rows={2} value={additional_information} onChange={(e) =>set_additional_information(e.target.value)} />
                      </div>
                      <div className="dokan-form-group">
                        <label>Tình trạng</label>
                        <input required type="text" className="dokan-form-control" name="condition" value={condition} onChange={(e) =>set_condition(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <label>Danh mục</label>
                        <select required name="category_id" className="city_to_district dokan-form-control">
                          <optgroup label="------------------------------">
                            {/* {
                              cate.map((c,i)=>(
                                item.firstSubCategories.map((item1, index3) => (
                                  item1.secondSubCategories.map((item2, index4) => (
                              ))
                            } */}
                            { cate.map((c,i)=>(
                              c.firstSubCategories.map((item1, index3) => (
                                <>

                                  {item1.name}
                                {
                                  item1.secondSubCategories.map((item2, index4) => (category_id == item2.id?
                                    (<option value={item2.id} selected>{item2.name}</option>):(<option value={item2.id}>{item2.name}</option>)
                                  ))
                                }
                                </>
                              ))
                              ))
                            }
                          </optgroup>
                        </select>
                    
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá khởi điểm</label>
                        <input required type="number" className="dokan-form-control" name="start_bid_amount" value={start_bid_amount} onChange={(e) =>set_start_bid_amount(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá hiện tại</label>
                        <input required type="number" className="dokan-form-control" name="current_bid_amount" value={current_bid_amount} onChange={(e) =>set_current_bid_amount(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <label>Giá mua ngay</label>
                        <input required type="number" className="dokan-form-control" name="price" value={price} onChange={(e) =>set_price(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <label>Bước nhảy</label>
                        <input required type="number" className="dokan-form-control" name="step_bid_amount" value={step_bid_amount} onChange={(e) =>set_step_bid_amount(e.target.value)}/>
                      </div>
                      <div className="dokan-form-group">
                        <p>
                          <label htmlFor="birthdaytime">Ngày bắt đầu:</label>
                          {
                            <p>
                              {moment(auction_start).format('DD-MM-YYYY HH:mm:ss')}
                            </p>
                          }
                          <input required type="datetime-local" id="birthdaytime" name="auction_start" onChange={(e) =>set_auction_start(e.target.value)}/>
                          <label htmlFor="birthdaytime" style={{marginTop: "5%",display: "block"}}>Ngày kết thúc:</label>
                          {
                            <p>
                              {moment(auction_end).format('DD-MM-YYYY HH:mm:ss')}
                            </p>
                          }
                          <input required type="datetime-local" id="birthdaytime" name="auction_end" onChange={(e) =>set_auction_end(e.target.value)}/>
                        </p>
                      </div>
                      <button type="submit" style={{background: "#ffff",border: "0px"}}>
                      <div className="dokan-form-group" style={{display: 'flex', justifyContent: 'center'}}>
                        <span type="submit" className="dokan-add-product">
                          <a href="#/dashboard/new-product/" className="dokan-btn dokan-btn-theme dokan-add-new-product">
                            <i className="fas fa-briefcase">&nbsp;</i>
                            <font style={{verticalAlign: 'inherit'}}>
                              <font htmlFor="submit_add" style={{verticalAlign: 'inherit'}}>
                               Sửa thông tin sản phẩm</font>
                            </font>
                          </a>
                        </span>
                      
                      </div>
                      </button>
                    </div>
                  </div>
                </form></>
                ))
              }
                  {/* <div className="product-listing-top dokan-clearfix">
                    <ul className="dokan-listing-filter dokan-left subsubsub">
                      <li className="active">
                        <a href="#/dashboard/products/">
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Tất cả (1)</font>
                          </font>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard/products/?post_status=pending">
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Đang chờ xem xét (1)
                            </font>
                          </font>
                        </a>
                      </li>
                      <li>
                        <a href="#/dashboard/products/?post_status=instock">
                          <font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>Còn hàng (1)</font>
                          </font>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div className="dokan-w12">
                    <form className="dokan-form-inline dokan-w8 dokan-product-date-filter" method="get" data-hs-cf-bound="true">
                      <div className="dokan-form-group">
                        <select name="date" id="filter-by-date" className="dokan-form-control">
                          <option selected="selected" value={0}>
                            Tất cả các ngày
                          </option>
                          <option value={202211}>
                            tháng 11 năm 2022
                          </option>
                        </select>
                      </div>
                      <div className="dokan-form-group">
                        <select name="product_cat" id="product_cat" className="product_cat dokan-form-control chosen">
                          <option value={-1} selected="selected">
                            - Chọn một danh
                            mục -
                          </option>
                          <option className="level-0" value={47}>
                            Thiết bị điện tử
                          </option>
                          <option className="level-1" value={123}>
                            &nbsp;&nbsp;&nbsp;phụ kiện ô tô
                          </option>
                          <option className="level-1" value={122}>
                            &nbsp;&nbsp;&nbsp;điện tử ô tô
                          </option>
                          <option className="level-1" value={119}>
                            &nbsp;&nbsp;&nbsp;Rạp chiếu phim tại nhà
                          </option>
                          <option className="level-1" value={121}>
                            &nbsp;&nbsp;&nbsp;Ảnh &amp; Video
                          </option>
                          <option className="level-1" value={120}>
                            &nbsp;&nbsp;&nbsp;Loa di động
                          </option>
                          <option className="level-1" value={97}>
                            &nbsp;&nbsp;&nbsp;Tivi
                          </option>
                          <option className="level-0" value={58}>
                            Thời trang &amp;
                            Thể thao
                          </option>
                          <option className="level-1" value={135}>
                            &nbsp;&nbsp;&nbsp;quần áo phụ nữ
                          </option>
                          <option className="level-1" value={136}>
                            &nbsp;&nbsp;&nbsp;Giày nữ
                          </option>
                          <option className="level-1" value={138}>
                            &nbsp;&nbsp;&nbsp;phụ kiện nam
                          </option>
                          <option className="level-1" value={134}>
                            &nbsp;&nbsp;&nbsp;Quần áo nam
                          </option>
                          <option className="level-1" value={101}>
                            &nbsp;&nbsp;&nbsp;giày dép nam
                          </option>
                          <option className="level-1" value={137}>
                            &nbsp;&nbsp;&nbsp;phụ kiện nữ
                          </option>
                          <option className="level-0" value={50}>
                            đồ gia dụng
                          </option>
                          <option className="level-1" value={128}>
                            &nbsp;&nbsp;&nbsp;Máy lạnh &amp; Hệ thống sưởi
                          </option>
                          <option className="level-1" value={127}>
                            &nbsp;&nbsp;&nbsp;Cà Phê &amp; Nước Giải Khát
                          </option>
                          <option className="level-1" value={125}>
                            &nbsp;&nbsp;&nbsp;Máy rửa chén
                          </option>
                          <option className="level-1" value={98}>
                            &nbsp;&nbsp;&nbsp;tủ lạnh
                          </option>
                          <option className="level-1" value={126}>
                            &nbsp;&nbsp;&nbsp;Máy hút bụi
                          </option>
                          <option className="level-1" value={124}>
                            &nbsp;&nbsp;&nbsp;Máy giặt
                          </option>
                          <option className="level-0" value={15}>
                            đồ chơi trẻ em
                          </option>
                          <option className="level-1" value={102}>
                            &nbsp;&nbsp;&nbsp;Đồ chơi trẻ em
                          </option>
                          <option className="level-1" value={139}>
                            &nbsp;&nbsp;&nbsp;Trò chơi giáo dục
                          </option>
                          <option className="level-1" value={141}>
                            &nbsp;&nbsp;&nbsp;đồ chơi sở thích
                          </option>
                          <option className="level-1" value={140}>
                            &nbsp;&nbsp;&nbsp;đồ chơi ngoài trời
                          </option>
                          <option className="level-0" value={49}>
                            Máy tính xách tay
                            Sản phẩm CNTT
                          </option>
                          <option className="level-1" value={114}>
                            &nbsp;&nbsp;&nbsp;Phụ kiện
                          </option>
                          <option className="level-1" value={115}>
                            &nbsp;&nbsp;&nbsp;Máy tính để bàn
                          </option>
                          <option className="level-1" value={116}>
                            &nbsp;&nbsp;&nbsp;màn hình
                          </option>
                          <option className="level-1" value={117}>
                            &nbsp;&nbsp;&nbsp;thiết bị ngoại vi máy tính
                          </option>
                          <option className="level-1" value={118}>
                            &nbsp;&nbsp;&nbsp;phần mềm
                          </option>
                          <option className="level-0" value={52}>
                            Chăm sóc cá nhân
                          </option>
                          <option className="level-1" value={129}>
                            &nbsp;&nbsp;&nbsp;Máy cắt &amp; Máy cạo râu
                          </option>
                          <option className="level-1" value={130}>
                            &nbsp;&nbsp;&nbsp;Vệ sinh răng miệng
                          </option>
                          <option className="level-1" value={132}>
                            &nbsp;&nbsp;&nbsp;Nước hoa cho nàng
                          </option>
                          <option className="level-1" value={131}>
                            &nbsp;&nbsp;&nbsp;Nước hoa cho anh ấy
                          </option>
                          <option className="level-1" value={99}>
                            &nbsp;&nbsp;&nbsp;Tấm &amp; Máy sấy
                          </option>
                          <option className="level-0" value={57}>
                            cửa hàng thú cưng
                          </option>
                          <option className="level-1" value={133}>
                            &nbsp;&nbsp;&nbsp;Phụ kiện
                          </option>
                          <option className="level-1" value={100}>
                            &nbsp;&nbsp;&nbsp;thức ăn cho thú cưng
                          </option>
                          <option className="level-0" value={51}>
                            Những cái điện
                            thoại
                          </option>
                          <option className="level-1" value={62}>
                            &nbsp;&nbsp;&nbsp;Vỏ &amp; Bảo vệ
                          </option>
                          <option className="level-1" value={69}>
                            &nbsp;&nbsp;&nbsp;Bảng điều khiển chơi game
                          </option>
                          <option className="level-1" value={65}>
                            &nbsp;&nbsp;&nbsp;Cáp dữ liệu
                          </option>
                          <option className="level-1" value={64}>
                            &nbsp;&nbsp;&nbsp;Bộ sạc di động
                          </option>
                          <option className="level-1" value={59}>
                            &nbsp;&nbsp;&nbsp;Điện thoại di động
                          </option>
                          <option className="level-1" value={63}>
                            &nbsp;&nbsp;&nbsp;ngân hàng điện
                          </option>
                          <option className="level-1" value={66}>
                            &nbsp;&nbsp;&nbsp;gậy tự sướng
                          </option>
                          <option className="level-1" value={67}>
                            &nbsp;&nbsp;&nbsp;Máy tính bảng
                          </option>
                          <option className="level-1" value={68}>
                            &nbsp;&nbsp;&nbsp;Bảo vệ máy tính bảng
                          </option>
                          <option className="level-0" value={418}>
                            Việc bán hàng
                          </option>
                          <option className="level-0" value={5670}>
                            wordpress
                          </option>
                          <option className="level-1" value={5671}>
                            &nbsp;&nbsp;&nbsp;Công nghệ
                          </option>
                        </select>
                      </div>
                      <div className="dokan-form-group">
                        <select name="product_type" id="filter-by-type" className="dokan-form-control" style={{maxWidth: '140px'}}>
                          <option value>
                            Loại sản phẩm
                          </option>
                          <option value="simple">
                            Giản dị
                          </option>
                        </select>
                      </div>
                      <button type="submit" name="product_listing_filter" value="ok" className="dokan-btn">
                        <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Lọc</font>
                        </font>
                      </button>
                    </form>
                    <form method="get" className="dokan-form-inline dokan-w5 dokan-product-search-form" data-hs-cf-bound="true">
                      <button type="submit" name="product_listing_search" value="ok" className="dokan-btn">
                        <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Tìm kiếm</font>
                        </font>
                      </button>
                      <input type="hidden" id="dokan_product_search_nonce" name="dokan_product_search_nonce" defaultValue="7b37119f05" /><input type="hidden" name="_wp_http_referer" defaultValue="/dashboard/products/" />
                      <div className="dokan-form-group">
                        <input type="text" className="dokan-form-control" name="product_search_name" placeholder="tìm kiếm sản phẩm" defaultValue />
                      </div>
                    </form>
                  </div> */}
                  <div className="dokan-dashboard-product-listing-wrapper">
                    <form id="product-filter" method="POST" className="dokan-form-inline" data-hs-cf-bound="true">
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
                                <font style={{verticalAlign: 'inherit'}}>SKU</font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Tên</font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Kích thước
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Màu sắc
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Tình trạng
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Giá khởi điểm
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Giá hiện tại
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Giá mua ngay
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Ngày bắt đầu
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Ngày kết thúc
                                </font>
                              </font>
                            </th>
                            <th>
                              <font style={{verticalAlign: 'inherit'}}>
                                <font style={{verticalAlign: 'inherit'}}>Thay đổi
                                </font>
                              </font>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                              sellerProduct.map((item, index)=>(
                          <tr className="danger">
                         
                                 <><th className="dokan-product-select check-column">
                                  <label htmlFor="cb-select-28556" />
                                  <input className="cb-select-items dokan-checkbox" type="checkbox" data-product-name="Knowledge Head" name="bulk_products[]" defaultValue={28556} />
                                </th><td data-title="Image" className="column-thumb">
                                    <a href="#">
                                      <img width={50} height={50} src={BaseUrl+item.featured_image} className="attachment-thumbnail size-thumbnail" alt="" />
                                    </a>
                                  </td><td data-title="SKU">
                                    <span className="na">
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>{item.sku}
                                            </font>
                                          </font>
                                        </font>
                                      </font>
                                    </span>
                                  </td><td data-title="Name" className="column-primary">
                                    <strong>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          {item.name}</font>
                                      </font>
                                    </strong>
                                  </td><td data-title="Color_id">
                                    <strong>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                        {
                                            allColor.map((color, index)=>(color.id == item.color_id &&(
                                              color.name
                                            )))
                                          }
                                        </font>
                                      </font>
                                    </strong>
                                  </td><td data-title="Size_id">
                                    <strong>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          {
                                            allSize.map((size, index)=>(size.id == item.size_id &&(
                                              size.name
                                            )))
                                          }
                                        </font>
                                      </font>
                                    </strong>
                                  </td><td data-title="Stock">
                                    <mark className="instock">
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>{
                                          item.condition
                                        }
                                        </font>
                                      </font>
                                    </mark>
                                  </td><td data-title="Start_Price">
                                    <ins><span className="woocommerce-Price-amount amount">
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>
                                              {new Intl.NumberFormat('vi-VN').format(item.start_bid_amount)}
                                            </font>
                                          </font>
                                        </font>
                                      </font>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                          </font>
                                        </font>
                                      </font><span className="woocommerce-Price-currencySymbol">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>
                                              <font style={{ verticalAlign: 'inherit' }}>
                                                VNĐ
                                              </font>
                                            </font>
                                          </font>
                                        </font>
                                      </span>
                                    </span></ins>
                                  </td><td data-title="Recent_Price">
                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">
                                      <font style={{ verticalAlign: 'inherit' }} />
                                    </span>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>{new Intl.NumberFormat('vi-VN').format(item.current_bid_amount)}
                                        </font><span className="woocommerce-Price-currencySymbol">
                                          <font style={{ verticalAlign: 'inherit' }}>VNĐ
                                          </font>
                                        </span>
                                      </font>
                                    </span>
                                  </td><td data-title="Final_Price">
                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">
                                      <font style={{ verticalAlign: 'inherit' }} />
                                    </span>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit', color: 'red' }}>
                                        {new Intl.NumberFormat('vi-VN').format(item.price)}
                                        </font><span className="woocommerce-Price-currencySymbol">
                                          <font style={{ verticalAlign: 'inherit', color: 'red' }}>
                                            VNĐ
                                          </font>
                                        </span>
                                      </font>
                                    </span>
                                  </td><td className="post-date" data-title="Date">
                                    <abbr title="11 giờ trước">
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          {
                                             moment(item.auction_start).format('YYYY-MM-DD')
                                          }
                                        </font>
                                      </font>
                                    </abbr>
                                  </td><td className="post-date" data-title="Date">
                                    <abbr title="11 giờ trước">
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                        {
                                             moment(item.auction_end).format('YYYY-MM-DD')
                                          }
                                        </font>
                                      </font>
                                    </abbr>
                                  </td><td className="post-date" data-title="Date">
                                    <div className="row-actions">
                                      <span className="edit"><a onClick={ () => setProduct(item.id)}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                            Chỉnh sửa</font>
                                        </font>
                                      </a>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}> |
                                          </font>
                                        </font>
                                      </span> <span className="delete"><a onClick={ () => submitDeleteProduct(item.id)}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          <font style={{ verticalAlign: 'inherit' }}>
                                            xóa vĩnh viễn</font>
                                        </font>
                                      </a></span>
                                    </div>
                                    <button type="button" className="toggle-row" />
                                  </td><td className="diviader" /></>
                            
                           
                          </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </form>
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
