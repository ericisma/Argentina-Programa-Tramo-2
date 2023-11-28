import React from "react";
import ProductDetail from "../components/ProductDetail";




const ProductPage = () => {
    const product = {
        name: "El señor de los añillos",
        description: "La novela narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el señor oscuro Sauron.",
        price: 19.99,
        sku: "LOTR1234",
        quantity: 25
    };

    return (
        <>
            <h1>Detalle del producto</h1>
            <div className="container">
                <div className="product-page">
                    <ProductDetail
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        sku={product.sku}
                        quantity={product.quantity}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductPage;