
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import Layout from './components/Layout'; 

const App: React.FC = () => {
    return (
        <Layout> 
            <Routes>
                {/* Route '/': Trang chủ với danh sách sản phẩm */}
                <Route path="/" element={<ProductListPage />} />
                
                {/* Route '/products/:id': Chi tiết sản phẩm */}
                <Route path="/products/:id" element={<ProductDetailPage />} />
                
                {/* Route '/add': Thêm sản phẩm */}
                <Route path="/add" element={<AddProductPage />} />
                
                {/* Route '/edit/:id': Chỉnh sửa sản phẩm */}
                <Route path="/edit/:id" element={<EditProductPage />} />

                {/* Route 404 (Trang không tìm thấy) */}
                <Route path="*" element={
                    <div style={{textAlign: 'center', padding: '50px'}}>
                        <h2 style={{color: '#dc3545'}}>404 - Không tìm thấy trang</h2>
                        <p>Vui lòng kiểm tra lại đường dẫn.</p>
                    </div>
                } />
            </Routes>
        </Layout>
    );
};

export default App;

