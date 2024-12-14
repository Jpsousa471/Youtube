import React, { createContext, useContext, useState } from "react";


interface CategoryContextData {
    categoryId: string;
    setCategoryId: (id: string) => void;
}

interface CategoryContextProps {
    children: React.ReactNode;
}

export const CategoryContext = createContext<CategoryContextData>({} as CategoryContextData);

export const CategoryProvider: React.FC<CategoryContextProps> = ({children}) => {
    const [categoryId, setCategoryId] = useState<string>('0');

    return(
     <CategoryContext.Provider value={{
            categoryId,
            setCategoryId
        }}>
            {children}
        </CategoryContext.Provider>
    );
        
};



