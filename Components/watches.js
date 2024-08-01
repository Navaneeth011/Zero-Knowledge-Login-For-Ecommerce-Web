import React, { useState } from 'react';
import Sidebar from './sidebar';

function Watches() {
    const [filters, setFilters] = useState({});
    const [products] = useState([
        { id: 1, category: 'mens', color: 'black', price: 150, size: 'L', name: '44MM Multifunction Black Leather Watch', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/TW001760_001_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 2, category: 'womens', color: 'white', price: 200, size: 'M', name: '34MM Crystal Bezel Silver Dial Watch', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/TW001780_040_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 3, category: 'kids', color: 'red', price: 50, size: 'S', name: 'Casual Watch With Recycled Strap', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/TW001763_460_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 4, category: 'mens', color: 'blue', price: 175, size: 'L', name: '46MM Multifunction Steel Sport Watch', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/TW001790_460_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
        { id: 5, category: 'womens', color: 'black', price: 220, size: 'M', name: 'Dress Watch With Gunmetal Bracelet', image: 'https://shoptommy.scene7.com/is/image/ShopTommy/TW001626_020_FNT?wid=1080&hei=1422&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp' },
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
                <section id="watch-products" style={{ backgroundColor: "#444444", flexGrow: 1 }}>
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

export default Watches;
