import React, { useState } from 'react';

function Sidebar({ onFilterChange }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        onFilterChange({ category: event.target.value, color: selectedColor, price: selectedPriceRange, size: selectedSize });
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        onFilterChange({ category: selectedCategory, color: event.target.value, price: selectedPriceRange, size: selectedSize });
    };

    const handlePriceRangeChange = (event) => {
        setSelectedPriceRange(event.target.value);
        onFilterChange({ category: selectedCategory, color: selectedColor, price: event.target.value, size: selectedSize });
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        onFilterChange({ category: selectedCategory, color: selectedColor, price: selectedPriceRange, size: event.target.value });
    };

    return (
        <div className="sidebar-filters" style={{ width: "200px", padding: "10px", backgroundColor: "#f7f7f7", borderRight: "1px solid #ddd" }}>
            <h4>Filters</h4>
            <div className="filter-group">
                <h5>Category</h5>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="mens">Men's</option>
                    <option value="womens">Women's</option>
                    <option value="kids">Kids'</option>
                </select>
            </div>
            <div className="filter-group">
                <h5>Color</h5>
                <select value={selectedColor} onChange={handleColorChange}>
                    <option value="">All</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
            <div className="filter-group">
                <h5>Price</h5>
                <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
                    <option value="">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-150">$100 - $150</option>
                    <option value="150+">$150+</option>
                </select>
            </div>
            <div className="filter-group">
                <h5>Size</h5>
                <select value={selectedSize} onChange={handleSizeChange}>
                    <option value="">All</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
}

export default Sidebar;
