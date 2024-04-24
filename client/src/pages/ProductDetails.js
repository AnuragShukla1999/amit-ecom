import React, { useCallback, useContext, useEffect, useState } from 'react'
import  { useNavigate, useParams } from 'react-router-dom'
import SummaryApi from '../common'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';
import VerticalCardProduct from '../components/VerticalCardProduct';
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import addToCart from '../helpers/addToCart';
import Context from '../context';



const ProductDetails = () => {
    const [data, setData] = useState({
        productName : "",
        brandName : "",
        category : "",
        productImage : [],
        description : "",
        price : "",
        sellingPrice : ""
    });

    const params = useParams();
    const [loading, setLoading] = useState(true);
    const productImageListLoading = new Array(4).fill(null);

    const [activeImage, setActiveImage] = useState("");

    const [zoomImageCoodinate, setZoomImageCoordinate] = useState({
        x : 0,
        y : 0
    })

    const [zoomImage, setZoomImage] = useState(false);
    const { fetchUserAddToCart } = useContext(Context);

    const navigate = useNavigate();


    const fetchProductDetails = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.productDetails.url, {
            method : SummaryApi.productDetails.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                productId : params?.id
            })
        })

        setLoading(false);
        const dataResponse = await response.json();

        setData(dataResponse?.data);
        setActiveImage(dataResponse?.data?.productImage[0])
    };


    console.log("data", data);

    useEffect(() => {
        fetchProductDetails()
    }, [params]);


    const handleMouseEnterProduct = (imageURL) => {
        setActiveImage(imageURL)
    }


    const handleZoomImage = useCallback((e) => {
        setZoomImage(true);
        const { left, top, width, height } = e.target.getBoundingClientRect();

        console.log("coordinate", left, top, width, height);

        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        setZoomImageCoordinate({
            x,
            y
        })
    })
}