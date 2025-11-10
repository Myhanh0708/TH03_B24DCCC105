
export type Category = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
    id: number;
    ten: string;
    danhMuc: Category;
    gia: number; 
    soLuong: number; 
    moTa: string;
}

export const initialProducts: Product[] = [
    { id: 1, ten: 'Kẹp tóc hello kitty', danhMuc: 'Khác', gia: 10000, soLuong: 30, moTa: 'Kẹp tóc mèo hello kitty đáng yêu.' },
    { id: 2, ten: 'Giày thể thao nữ', danhMuc: 'Khác', gia: 250000, soLuong: 25, moTa: 'Giày thể thao theo chủ đề Hello Kitty dễ thương Lavina Carpio dành cho nữ: Thoải mái và sành điệu.' },
    { id: 3, ten: 'Bún bò Huế', danhMuc: 'Đồ ăn', gia: 30000, soLuong: 100, moTa: 'Bún bò Huế đầy đủ giá rẻ tại O Phương Ao Sen.' },
    { id: 4, ten: 'Sách học đàn piano ', danhMuc: 'Sách', gia: 280000, soLuong: 5, moTa: 'Giáo trình piano cho người mới bắt đầu.' },
    { id: 5, ten: 'Tủ lạnh', danhMuc: 'Điện tử', gia: 9500000, soLuong: 3, moTa: 'Tủ lạnh tiện lợi.' },
    { id: 6, ten: 'Quần Jeans Nữ', danhMuc: 'Quần áo', gia: 150000, soLuong: 20, moTa: 'Quần jeans ống suông.' },
    { id: 7, ten: 'Bim Bim swing', danhMuc: 'Đồ ăn', gia: 6000, soLuong: 200, moTa: 'Bim Bim swing khoai tây.' },
    { id: 8, ten: 'Giáo trình triết học Mác Lenin', danhMuc: 'Sách', gia: 30000, soLuong: 15, moTa: 'Giáo trình triết học bán chạy nhất tại Ao Sen.' },
    { id: 9, ten: 'Tai Nghe Bluetooth', danhMuc: 'Điện tử', gia: 1800000, soLuong: 30, moTa: 'Tai nghe êm.' },
    { id: 10, ten: 'Áo Hoodie nữ ', danhMuc: 'Khác', gia: 176000, soLuong: 50, moTa: 'Áo Hoodie nữ form rộng.' },
];
export {};