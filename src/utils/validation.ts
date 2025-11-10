
import { Product } from '../types/product';

export interface ProductErrors {
    ten?: string;
    gia?: string;
    soLuong?: string;
    danhMuc?: string;
}

export const validateProduct = (product: Partial<Product>): ProductErrors => {
    const errors: ProductErrors = {};

    if (!product.ten || product.ten.trim().length < 3) {
        errors.ten = 'Tên sản phẩm bắt buộc và phải có ít nhất 3 ký tự.';
    }
    if (!product.danhMuc) {
        errors.danhMuc = 'Danh mục bắt buộc phải được chọn.';
    }
    const gia = Number(product.gia);
    if (isNaN(gia) || gia <= 0) {
        errors.gia = 'Giá bắt buộc phải là số dương.';
    }

    const soLuong = Number(product.soLuong);
    if (isNaN(soLuong) || soLuong <= 0 || !Number.isInteger(soLuong)) {
        errors.soLuong = 'Số lượng bắt buộc phải là số nguyên dương.';
    }

    return errors;
};
export {};