import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useProductContext, ActionType } from '../context/ProductContext';
import { Product } from '../types/product';

const AddProductPage: React.FC = () => {
    const { dispatch } = useProductContext();
    const navigate = useNavigate();

    const handleSubmit = (formData: Omit<Product, 'id'>) => {
        dispatch({
            type: ActionType.ADD_PRODUCT,
            payload: formData,
        });
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Thêm Sản Phẩm Mới</h2>
            <ProductForm
                onSubmit={handleSubmit}
                buttonText="Thêm Sản Phẩm"
            />
        </div>
    );
};

export default AddProductPage;
export {};