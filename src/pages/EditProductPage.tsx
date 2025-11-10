import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useProductContext, ActionType } from '../context/ProductContext';
import { Product } from '../types/product';

const EditProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { state, dispatch } = useProductContext();

    const productId = Number(id);
    const productToEdit = state.products.find(p => p.id === productId);

    const handleSubmit = (formData: Omit<Product, 'id'>) => {
        if (!productToEdit) return;

        const updatedProduct: Product = {
            ...formData,
            id: productId, 
        };
        
        dispatch({
            type: ActionType.UPDATE_PRODUCT,
            payload: updatedProduct,
        });
        navigate(`/products/${productId}`);
    };

    if (!productToEdit) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2 style={{ color: 'red' }}>Sản phẩm cần chỉnh sửa không tồn tại</h2>
            <button onClick={() => navigate('/')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Quay lại Trang Chủ</button>
        </div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Chỉnh Sửa Sản Phẩm: {productToEdit.ten}</h2>
            <ProductForm
                initialData={productToEdit}
                onSubmit={handleSubmit}
                buttonText="Lưu Thay Đổi"
            />
        </div>
    );
};

export default EditProductPage;
export {};