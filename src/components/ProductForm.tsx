
import React, { useState, useEffect } from 'react';
import { Product, Category } from '../types/product';
import { validateProduct, ProductErrors } from '../utils/validation';

type FormData = Omit<Product, 'id'> & { id?: number };

interface ProductFormProps {
    initialData?: Product; 
    onSubmit: (data: FormData) => void;
    buttonText: string;
}

const CATEGORIES: Category[] = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, buttonText }) => {
    const [formData, setFormData] = useState<FormData>(initialData || {
        ten: '',
        danhMuc: '' as Category,
        gia: 0,
        soLuong: 0,
        moTa: '',
    });
    const [errors, setErrors] = useState<ProductErrors>({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'gia' || name === 'soLuong' ? Number(value) : value
        }));
        
        setErrors(prev => ({ ...prev, [name]: undefined })); 
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
      
        const validationErrors = validateProduct(formData);
        
        if (Object.keys(validationErrors).length > 0) {
            
            setErrors(validationErrors);
        } else {
           
            onSubmit(formData);
        }
    };

    const inputStyle: React.CSSProperties = { width: '100%', padding: '10px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' };
    const labelStyle: React.CSSProperties = { display: 'block', fontWeight: 'bold', marginTop: '10px' };
    const errorStyle: React.CSSProperties = { color: 'red', fontSize: '12px' };
    const buttonSubmitStyle: React.CSSProperties = { 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        marginTop: '20px'
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            
            <div>
                <label htmlFor="ten" style={labelStyle}>Tên Sản Phẩm:</label>
                <input
                    id="ten"
                    name="ten"
                    type="text"
                    value={formData.ten}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Tối thiểu 3 ký tự"
                />
                {errors.ten && <p style={errorStyle}>{errors.ten}</p>}
            </div>

            <div>
                <label htmlFor="danhMuc" style={labelStyle}>Danh Mục:</label>
                <select
                    id="danhMuc"
                    name="danhMuc"
                    value={formData.danhMuc}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">-- Chọn Danh mục --</option>
                    {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                {errors.danhMuc && <p style={errorStyle}>{errors.danhMuc}</p>}
            </div>

            <div>
                <label htmlFor="gia" style={labelStyle}>Giá (VNĐ):</label>
                <input
                    id="gia"
                    name="gia"
                    type="number"
                    value={formData.gia}
                    onChange={handleChange}
                    style={inputStyle}
                    min="0"
                />
                {errors.gia && <p style={errorStyle}>{errors.gia}</p>}
            </div>

            <div>
                <label htmlFor="soLuong" style={labelStyle}>Số Lượng:</label>
                <input
                    id="soLuong"
                    name="soLuong"
                    type="number"
                    value={formData.soLuong}
                    onChange={handleChange}
                    style={inputStyle}
                    min="1"
                    step="1"
                />
                {errors.soLuong && <p style={errorStyle}>{errors.soLuong}</p>}
            </div>

            <div>
                <label htmlFor="moTa" style={labelStyle}>Mô Tả:</label>
                <textarea
                    id="moTa"
                    name="moTa"
                    value={formData.moTa}
                    onChange={handleChange}
                    style={{...inputStyle, minHeight: '100px'}}
                />
            </div>
            
            <button type="submit" style={buttonSubmitStyle}>{buttonText}</button>
        </form>
    );
};

export default ProductForm;
export {};