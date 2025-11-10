import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { Product, initialProducts } from '../types/product';

interface ProductsState { products: Product[]; }
const initialState: ProductsState = { products: initialProducts };

export enum ActionType {
    ADD_PRODUCT = 'ADD_PRODUCT',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export type ProductAction =
    | { type: ActionType.ADD_PRODUCT; payload: Omit<Product, 'id'> } // ID tự động tạo
    | { type: ActionType.UPDATE_PRODUCT; payload: Product }
    | { type: ActionType.DELETE_PRODUCT; payload: { id: number } };

const productReducer = (state: ProductsState, action: ProductAction): ProductsState => {
    switch (action.type) {
        case ActionType.ADD_PRODUCT:
            
            const maxId = state.products.length > 0 ? Math.max(...state.products.map(p => p.id)) : 0;
            const newId = maxId + 1;
            const newProduct = { ...action.payload, id: newId };
            return {
                ...state,
                products: [newProduct, ...state.products], 
            };

        case ActionType.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === action.payload.id ? action.payload : p
                ),
            };

        case ActionType.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload.id),
            };

        default:
            return state;
    }
};

interface ProductContextProps {
    state: ProductsState;
    dispatch: Dispatch<ProductAction>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
export {};