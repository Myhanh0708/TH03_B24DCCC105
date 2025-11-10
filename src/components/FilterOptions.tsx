import React from 'react';
import { Category } from '../types/product';

interface FilterOptionsProps {
    categoryFilter: Category | '';
    setCategoryFilter: (category: Category | '') => void;
    minPrice: number | '';
    setMinPrice: (price: number | '') => void;
    maxPrice: number | '';
    setMaxPrice: (price: number | '') => void;
    setCurrentPage: (page: number) => void;
}

const CATEGORIES: Category[] = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

const FilterOptions: React.FC<FilterOptionsProps> = ({
    categoryFilter, setCategoryFilter, minPrice, setMinPrice, 
    maxPrice, setMaxPrice, setCurrentPage
}) => {


    const handleFilterChange = (setter: (value: any) => void, value: any) => {
        setter(value);
        setCurrentPage(1); 
    };

    const handlePriceChange = (setter: (p: number | '') => void, value: string) => {
        const trimmedValue = value.trim();
        const num = parseFloat(trimmedValue);
        
        if (trimmedValue === '') {
            handleFilterChange(setter, '');
        } else if (!isNaN(num) && num >= 0) {
            handleFilterChange(setter, num);
        }
    };

    const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' };
    const inputStyle: React.CSSProperties = { width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' };
    const containerStyle: React.CSSProperties = { 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        marginBottom: '25px', 
        backgroundColor: '#f9f9f9' 
    };

    return (
        <div style={containerStyle}>
            <h4 style={{ marginBottom: '15px', color: '#333' }}>Tùy chọn Lọc (Filter)</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                
                {/* 1. Lọc theo danh mục */}
                <div>
                    <label style={labelStyle}>Lọc theo Danh mục:</label>
                    <select
                        value={categoryFilter} 
                        onChange={(e) => handleFilterChange(setCategoryFilter, e.target.value as Category | '')}
                        style={inputStyle}
                    >
                        <option value="">-- Tất cả Danh mục --</option>
                        {CATEGORIES.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* 2. Lọc theo khoảng giá (Min) */}
                <div>
                    <label style={labelStyle}>Giá Tối thiểu (VNĐ):</label>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => handlePriceChange(setMinPrice, e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                </div>

                {/* 3. Lọc theo khoảng giá (Max) */}
                <div>
                    <label style={labelStyle}>Giá Tối đa (VNĐ):</label>
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => handlePriceChange(setMaxPrice, e.target.value)}
                        style={inputStyle}
                        min="0"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;


export {};
