import axios from "axios";
import React,{useEffect,useState} from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import './ProductPage.scss'
const ProductPage = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const[product,setProduct]=useState(null)

  useEffect(()=>{
    axios.get( `https://f6aabb72-5817-4e4f-aec3-b58c788bde8b.mock.pstmn.io/products/${id}`)
    .then((result)=>{
        setProduct(result.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  },[])
  if(product===null){
    return <h2>상품정보를 팔고 있습니다....</h2>
  }

  return (
    
    <div>
        <button onClick={()=>navigate(-1)} id="back-btn">이전화면</button>
        <div id="image-box">
            <img src={`/${product.imageUrl}`} alt="{product.name}" />
        </div>
        <div id="profile-box">
            <img src="/img/icons/avata.png" alt="" />
            <span className="product-seller"></span>
        </div>
        <div id="content-box">
            <div id="name">{product.name}</div>
            <div id="price">{product.price}</div>
            <div id="createAt">2023.08.02</div>
            <div id="description">{product.description}</div>
        </div>
      <h2>상세페이지</h2>
      <h3>{id}번째 입니다. </h3>
    </div>
  );
};

export default ProductPage;
