import React, { useState } from 'react';
import Sidebar from './sidebar';

function Wallets() {
    const [filters, setFilters] = useState({});
    const [products] = useState([
        { id: 1, category: 'mens', color: 'black', price: 50, size: 'M', name: 'Gregor Bi-Fold Leather Wallet', image: 'https://cdn07.nnnow.com/web-images/large/styles/7UH4WO8H6I7/1708075818967/1.jpg' },
        { id: 2, category: 'womens', color: 'red', price: 75, size: 'L', name: 'Hadley Solid Zip Around Wallet', image: 'https://cdn18.nnnow.com/web-images/large/styles/BBZFZ8OA7HE/1677756573712/1.jpg' },
        { id: 3, category: 'mens', color: 'brown', price: 60, size: 'S', name: 'Hilfiger Leather Card Wallet', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/AM12187_GTY_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 4, category: 'womens', color: 'black', price: 80, size: 'M', name: 'Monogram Jacquard Marleigh Wallet', image: 'https://cdn04.nnnow.com/web-images/large/styles/BY16DNTE8YB/1702884639596/1.jpg' },
        { id: 5, category: 'mens', color: 'blue', price: 65, size: 'L', name: 'Hilfiger Stripe Leather Coin Wallet', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/AM12186_GTY_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
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
                filters.price === '150-200' ? product.price > 150 && product.price <= 200 :
                product.price > 200
            )) &&
            (!filters.size || product.size === filters.size)
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
                <section id="wallet-products" style={{ backgroundColor: "#444444", flexGrow: 1 }}>
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

export default Wallets;
