import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8081/api/v1/products/user/view/all", {
            validateStatus: () => {
                return true;
            }
        });
        if (result.status === 302) {
            setProducts(result.data);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Size</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <th>{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.size}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductView;
