import React from 'react';
import { useState } from 'react';
import Sidebar from './sidebar';

function Shoes() {
    const [filters, setFilters] = useState({});
    const [products] = useState([
        { id: 1, category: 'mens', color: 'white', price: 60, size: 8, name: 'Pebbled Leather Cupsole Sneaker', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/FM04972_YBS_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 2, category: 'womens', color: 'black', price: 80, size: 7, name: 'Pointed Leather Mule', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/FW07722_BDS_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 3, category: 'kids', color: 'blue', price: 40, size: 6, name: 'Kids Signature Stripe Sneaker', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/7177974_CJM_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 4, category: 'mens', color: 'black', price: 70, size: 9, name: 'Flag Stripe Leather Shoe', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/FM04867_BDS_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 5, category: 'womens', color: 'white', price: 100, size: 8, name: 'Monogram Luxe Leather Sneaker', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/FW07816_YBS_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
    ]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const filteredProducts = products.filter(product => {
        return (
            (!filters.category || product.category === filters.category) &&
            (!filters.color || product.color === filters.color) &&
            (!filters.price || (
                filters.price === '0-50' ? product.price <= 50 :
                filters.price === '50-100' ? product.price > 50 && product.price <= 100 :
                filters.price === '100-150' ? product.price > 100 && product.price <= 150 :
                product.price > 150
            )) &&
            (!filters.size || product.size === parseInt(filters.size))
        );
    });

    return (
        <div>
            <header>
                <h1 style={{ textAlign: "center" }}><b>NZ Fashion Store</b></h1>
                <h3 style={{ textAlign: "center" }}>Welcome to Our Fashion Store</h3>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">Home</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sub">Subscribe</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ display: "flex" }}>
                <Sidebar onFilterChange={handleFilterChange} />
                <section id="shoe-products" style={{ backgroundColor: "#444444", flexGrow: 1 }}>
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" style={{ paddingBottom: "10px" }}>
                                <div className="card-body">
                                    <h2>{product.name}</h2>
                                    <p>Category: {product.category}</p>
                                    <p>Color: {product.color}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Size: {product.size}</p>
                                    <img src={product.image} alt={product.name} style={{ height: "350px", width: "300px" }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Shoes;
