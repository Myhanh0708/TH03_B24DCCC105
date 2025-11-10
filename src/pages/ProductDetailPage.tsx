import React, { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext, ActionType } from '../context/ProductContext';
import { formatCurrency } from '../utils/format';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { state, dispatch } = useProductContext();

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const productId = Number(id);
    const product = state.products.find(p => p.id === productId);

    const confirmDelete = () => {
        dispatch({
            type: ActionType.DELETE_PRODUCT,
            payload: { id: productId },
        });
        setShowConfirmModal(false);
        navigate('/');
    };

    if (!product) {
        const buttonStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', margin: '0 5px', backgroundColor: '#6c757d', color: 'white', border: 'none' };
        return <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2 style={{ color: 'red' }}>Sản phẩm không tồn tại</h2>
            <button onClick={() => navigate('/')} style={buttonStyle}>Quay lại Trang Chủ</button>
        </div>;
    }

    const detailStyle: React.CSSProperties = { maxWidth: '800px', margin: '30px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', position: 'relative' };
    const h2Style: React.CSSProperties = { color: '#007bff', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' };
    const labelStyle: React.CSSProperties = { fontWeight: 'bold', display: 'inline-block', width: '150px' };
    const priceStyle: React.CSSProperties = { fontSize: '24px', color: '#28a745', fontWeight: 'bold', margin: '15px 0' };
    const buttonStyle: React.CSSProperties = { padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', margin: '0 5px', transition: 'background-color 0.2s' };

    const modalOverlayStyle: React.CSSProperties = {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, 
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    };
    const modalContentStyle: React.CSSProperties = {
        backgroundColor: 'white', padding: '30px', borderRadius: '8px', 
        width: '400px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
    };
    const deleteBtnStyle: React.CSSProperties = { ...buttonStyle, backgroundColor: '#dc3545', color: 'white', border: 'none' };
    const cancelBtnStyle: React.CSSProperties = { ...buttonStyle, backgroundColor: '#6c757d', color: 'white', border: 'none' };
    const editBtnStyle: React.CSSProperties = { ...buttonStyle, backgroundColor: '#ffc107', color: 'black', border: 'none' };
    const backBtnStyle: React.CSSProperties = { ...buttonStyle, backgroundColor: '#6c757d', color: 'white', border: 'none' };


    return (
        <div style={detailStyle}>
            <h2 style={h2Style}>Chi Tiết Sản Phẩm: {product.ten}</h2>
            
            <p><span style={labelStyle}>ID:</span> {product.id}</p>
            <p><span style={labelStyle}>Danh mục:</span> {product.danhMuc}</p>
            
            <div style={priceStyle}>Giá: {formatCurrency(product.gia)}</div>
            
            <p><span style={labelStyle}>Số lượng tồn kho:</span> {product.soLuong}</p>
            <p style={{ marginTop: '20px', lineHeight: '1.6' }}>
                <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Mô Tả:</span> 
                {product.moTa}
            </p>

            <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <button 
                    onClick={() => navigate(`/edit/${product.id}`)}
                    style={editBtnStyle}
                >
                    Chỉnh Sửa
                </button>
                <button 
                    onClick={() => setShowConfirmModal(true)} 
                    style={deleteBtnStyle}
                >
                    Xóa Sản Phẩm
                </button>
                <button 
                    onClick={() => navigate('/')}
                    style={backBtnStyle}
                >
                    Quay Lại
                </button>
            </div>

            {/* Modal Xác nhận Tùy chỉnh */}
            {showConfirmModal && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h3 style={{ color: '#dc3545', marginBottom: '20px' }}>Xác Nhận Xóa</h3>
                        <p>Bạn có chắc chắn muốn xóa sản phẩm **{product.ten}** này không? Hành động này không thể hoàn tác.</p>
                        <div style={{ marginTop: '25px', textAlign: 'right' }}>
                            <button 
                                onClick={() => setShowConfirmModal(false)}
                                style={cancelBtnStyle}
                            >
                                Hủy
                            </button>
                            <button 
                                onClick={confirmDelete}
                                style={deleteBtnStyle}
                            >
                                Xóa Vĩnh Viễn
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailPage;
export {};