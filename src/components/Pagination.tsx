
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
    
    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const buttonStyle: React.CSSProperties = {
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        minWidth: '40px',
        margin: '0 4px',
        transition: 'background-color 0.2s, color 0.2s'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '20px' }}>
            
            {/* Nút Previous */}
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ ...buttonStyle, backgroundColor: currentPage === 1 ? '#e9ecef' : '#f0f0f0' }}
            >
                &larr; Previous
            </button>

            {/* Hiển thị các số trang */}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{ 
                        ...buttonStyle, 
                        backgroundColor: page === currentPage ? '#007bff' : '#f0f0f0',
                        color: page === currentPage ? 'white' : 'black',
                        fontWeight: page === currentPage ? 'bold' : 'normal',
                        border: page === currentPage ? '1px solid #007bff' : '1px solid #ccc'
                    }}
                >
                    {page}
                </button>
            ))}

            {/* Nút Next */}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ ...buttonStyle, backgroundColor: currentPage === totalPages ? '#e9ecef' : '#f0f0f0' }}
            >
                Next &rarr;
            </button>
        </div>
    );
};

export default Pagination;
export {};