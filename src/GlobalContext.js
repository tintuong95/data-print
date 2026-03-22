import React, { createContext, useContext, useState } from 'react';

// Tạo Context
const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Các hàm để cập nhật state
  const updateData = (newData) => {
    setData(newData);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const clearData = () => {
    setData([]);
  };

  // Giá trị được cung cấp cho các component con
  const value = {
    data,
    selectedProduct,
    updateData,
    selectProduct,
    clearData
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook để sử dụng context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext phải được sử dụng trong GlobalProvider');
  }
  return context;
};