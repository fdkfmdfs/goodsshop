import { FaWolfPackBattalion } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import MainSlider from "./Mainslider";
import Mdpick from "./Mdpick";
import Magazine from "./Magazine";
import { Link } from "react-router-dom";

const Main = () => {
   const [products, setProduct] = useState([]);
    useEffect(() => {
        let url =
            "https://f6aabb72-5817-4e4f-aec3-b58c788bde8b.mock.pstmn.io/products";
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                const products = res.data.products;
                setProduct(products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); 

    return (
        <div>
          

            <MainSlider />
            <Mdpick />
            <div className="banner">
                <p> 🛋 </p>
                <p> 🪑 </p>
                <p> 🛁 </p>
                <p> 🛏 </p>
                <p> 🚪 </p>                
            </div>
            <div className="products">
                <h2>Products</h2>
                <div id="product-list" className= "p-list">
                  {products.map((product, idx) => (
                        <Link to={`/ProductPage/${idx}`} className="product-link">
                            <div className="product-card" key={idx}>
                                <div>
                                    <img
                                        src={product.imageUrl}
                                        alt="product-img"
                                        className="product-img"
                                    />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}원</span>
                                    <span className="product-seller">
                                        <FaWolfPackBattalion className="product-avatar" />
                                        <span>{product.seller}</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Magazine />
      
        </div>
    );
};

export default Main;