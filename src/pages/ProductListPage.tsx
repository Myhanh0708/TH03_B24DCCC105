

import React, { useState, useMemo } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar'; 
import FilterOptions from '../components/FilterOptions'; 
import { Category } from '../types/product';

const PRODUCTS_PER_PAGE = 6; 

const ProductListPage: React.FC = () => {
    const { state } = useProductContext();
    
    const [searchText, setSearchText] = useState('');

    const [categoryFilter, setCategoryFilter] = useState<Category | ''>(''); 
    
    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');
    const [currentPage, setCurrentPage] = useState(1);
    
   
    const filteredProducts = useMemo(() => {
        let result = state.products;
        if (searchText) {
            result = result.filter(p =>
                p.ten.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (categoryFilter) {
            result = result.filter(p => p.danhMuc === categoryFilter);
        }

        const min = minPrice === '' ? 0 : minPrice; 
        const max = maxPrice === '' ? Infinity : maxPrice;
        
        if (min > max && max !== Infinity) {
             return [];
        }

        result = result.filter(p => p.gia >= min && p.gia <= max);

        return result;
    }, [state.products, searchText, categoryFilter, minPrice, maxPrice]);
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    
    
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(totalPages);
    }
    
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Trang Chủ - Danh Sách Sản Phẩm</h2>
            
            {/* Component Tìm kiếm */}
            <SearchBar 
                searchText={searchText} 
                setSearchText={setSearchText}
                setCurrentPage={setCurrentPage} 
            />

            {/* Component Lọc */}
            <FilterOptions
                categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
                minPrice={minPrice} setMinPrice={setMinPrice}
                maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                setCurrentPage={setCurrentPage} 
            />


            <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e9f7ff', borderRadius: '4px', border: '1px solid #cce5ff' }}>
                Tổng số sản phẩm phù hợp: **{filteredProducts.length}** | Trang hiện tại: **{currentPage}** / **{totalPages}**
            </div>
            
            {/* Hiển thị danh sách sản phẩm */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {filteredProducts.length > 0 ? (
                    currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#dc3545', fontSize: '18px', marginTop: '50px', padding: '20px', border: '1px dashed #dc3545' }}>
                        Không tìm thấy sản phẩm nào phù hợp với điều kiện tìm kiếm/lọc.
                    </p>
                )}
            </div>

            {/* Component Phân trang */}
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductListPage;

export {};
