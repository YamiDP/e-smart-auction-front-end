import { WrapperContent } from "../../Elements/WrapperContent"
import { Detail } from "./ContentElements/Detail"
import { RelatedProduct } from "./ContentElements/RelatedProducts"
import { TabMore } from "./ContentElements/TabMore"
import { useMemo, useEffect, useState,useCallback } from "react";
import axios from "axios";
import {API} from "../../Configs/api.js"
import moment from 'moment'
import { CountDown } from "../CountDown"

const BaseUrl ='https://e-smart-auction-api-server.herokuapp.com/'

export const Content = () => {
    const [productDetail, setProductDetail] = useState([]);
    const [productRelate, setProductRelate] = useState([]);
    const [seller, setSeller] = useState([]);
    const [productBySeller, setProductBySeller] = useState([]); 
    const [allSize, setAllSize] = useState([]);
    const [allColor, setAllColor] = useState([]);
    const [allCate, setAllCate] = useState([]);
    const [bids, setBids] = useState([]);
    const url = window.location.pathname
    const param = url.split('product/')[1]

    useEffect(() => {
        async function fetchData() {
          const response =   await axios.get(API['detailProduct']+param)
          const data = await response.data;
          setProductDetail(response.data);
          setBids(data.bids)
          const responseRelate =   await axios.get(API['relatedProduct']+param)
          const dataRelate = await responseRelate.data;
          setProductRelate(dataRelate);
          axios.get(API['sellerById']+data.seller_id).then(function (responseSeller) {
            const dataSeller = responseSeller.data;
            setSeller(dataSeller);
            setProductBySeller(dataSeller.products)
        }).catch(function (error) {
            console.log(error);
        });
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
        await axios.get(API['allParentCates']).then(function (responseAllCate) {
            const dataAllCate = responseAllCate.data;
            setAllCate(dataAllCate);
        }).catch(function (error) {
            console.log(error);
        });
        
          // ...
        }
        fetchData();
      }, []);
    return (
        <WrapperContent propsBreadcum={{ show: true, countView: 1234 }} padding="1" layout="1">
            <div className="container blog-posts">
                <div className="row">
                    <div className="col-md-12 main-content">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div className="row product type-product status-publish has-post-thumbnail product_cat-laptops product_cat-selfie-stickers product_tag-black-friday product_tag-sales first instock featured sold-individually shipping-taxable product-type-auction">
                            <Detail productDetail={productDetail} allColor={allColor} allCate={allCate}/>
                            <div className="col-md-12 tabs-related">
                                <TabMore productDetail={productDetail} baseURL={BaseUrl} seller={seller} productBySeller={productBySeller} allSize={allSize} allColor={allColor}  bids={bids}/>
                                <RelatedProduct propProductRelate={{productRelat1: productRelate, baseURL: BaseUrl}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperContent>
    )
}