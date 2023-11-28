import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portada from '../assets/img/portada.jpg';


const ProductDetail = ({ name, description, price, sku, quantity }) => {
    return (
        <div className="product-detail">
            <div className="imgPortada">
                <img src={portada} />
            </div>
            <h2 className='title'><b> {name}</b></h2>
            <p className='descripion'>{description}</p>
            <p className='price'><b> precio:</b> ${price}</p>
            <p className='sku'><b> SKU:</b> {sku}</p>
            <p className='quantity'> <b> cantidad disponible: </b>{quantity}</p>
        </div>
    );
};




export default ProductDetail;