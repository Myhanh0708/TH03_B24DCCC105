import React from 'react';
import { Product } from '../types/product';
import { formatCurrency } from '../utils/format';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    const cardStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };
    
    const h4Style: React.CSSProperties = { color: '#007bff', marginBottom: '8px' };
    const infoStyle: React.CSSProperties = { fontSize: '14px', marginBottom: '4px' };
    const priceStyle: React.CSSProperties = { fontWeight: 'bold', color: '#28a745', fontSize: '16px' };

    return (
        <div 
            style={cardStyle} 
            onClick={() => navigate(`/products/${product.id}`)}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div>
                <h4 style={h4Style}>{product.ten}</h4>
                <p style={infoStyle}>Danh mục: {product.danhMuc}</p>
                <p style={infoStyle}>Số lượng: {product.soLuong}</p>
            </div>
            <div style={{ marginTop: '10px' }}>
                <p style={priceStyle}>{formatCurrency(product.gia)}</p>
                <p style={{ fontSize: '12px', color: '#6c757d', marginTop: '5px' }}>Xem chi tiết &rarr;</p>
            </div>
        </div>
    );
};

export default ProductCard;
export {};