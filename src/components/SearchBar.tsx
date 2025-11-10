import React from 'react';

interface SearchBarProps {
    searchText: string;
    setSearchText: (text: string) => void;
    setCurrentPage: (page: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText, setCurrentPage }) => {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCurrentPage(1); 
    };

    const inputStyle: React.CSSProperties = { 
        width: '100%', 
        padding: '10px 12px', 
        border: '2px solid #007bff', 
        borderRadius: '6px', 
        boxShadow: '0 2px 4px rgba(0, 123, 255, 0.1)',
        fontSize: '16px'
    };
    
    const containerStyle: React.CSSProperties = {
        padding: '15px',
        backgroundColor: '#eaf5ff',
        borderRadius: '8px',
        marginBottom: '20px'
    };

    return (
        <div style={containerStyle}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#007bff' }}>
                Tìm kiếm Sản phẩm theo Tên
            </label>
            <input
                type="text"
                placeholder="Nhập tên sản phẩm để tìm kiếm..."
                value={searchText}
                onChange={handleSearchChange}
                style={inputStyle}
            />
        </div>
    );
};

export default SearchBar;
export {};