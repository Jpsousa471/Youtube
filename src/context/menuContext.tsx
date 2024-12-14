import { createContext, useState } from "react";

interface MenuContextProps {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void
    
}

interface ProviderProps {
    children: React.ReactNode
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({ children }: ProviderProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(true);

   
    return <MenuContext.Provider value={{openMenu, setOpenMenu}}>
        {children}
        </MenuContext.Provider>;
};