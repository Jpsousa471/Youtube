import { createContext, useState } from "react";

interface DropMenuContextProps {
    openDropMenu: boolean;
    setOpenDropMenu: (openDropMenu: boolean) => void
    
}

interface ProviderProps {
    children: React.ReactNode
}

export const DropMenuContext = createContext({} as DropMenuContextProps);

export const DropMenuProvider = ({ children }: ProviderProps) => {
    const [openDropMenu, setOpenDropMenu] = useState<boolean>(false);

   
    return <DropMenuContext.Provider value={{openDropMenu, setOpenDropMenu}}>
        {children}
        </DropMenuContext.Provider>;
};