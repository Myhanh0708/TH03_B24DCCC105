

import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}


const headerStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
};

const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
};

const mainContentStyle: React.CSSProperties = {
    padding: '20px',
    minHeight: '80vh', 
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #e9ecef',
    color: '#6c757d',
    marginTop: 'auto', 
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header / Navigation Bar */}
            <header style={headerStyle}>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <Link to="/" style={linkStyle}>Quản Lý Danh Sách Sản Phẩm</Link>
                </div>
                <nav style={navStyle}>
                    <Link to="/" style={linkStyle}>
                        Danh Sách Sản Phẩm
                    </Link>
                    <Link to="/add" style={linkStyle}>
                        ➕ Thêm Sản Phẩm Mới
                    </Link>
                </nav>
            </header>

            {/* Main Content Area */}
            <main style={mainContentStyle}>
                {children}
            </main>

            {/* Footer */}
            <footer style={footerStyle}>
                © 2023 Ứng Dụng Quản Lý Sản Phẩm (Sử dụng React & TypeScript)
            </footer>
        </div>
    );
};

export default Layout;
export {};