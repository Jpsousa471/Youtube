import { createContext, useState } from "react";

interface DropMenuContextProps {
    openDropMenus: boolean;
    setOpenDropMenus: (openDropMenus: boolean) => void
    
}

interface ProviderProps {
    children: React.ReactNode
}

export const DropMenuContext2 = createContext({} as DropMenuContextProps);

export const DropMenuProvider2 = ({ children }: ProviderProps) => {
    const [openDropMenus, setOpenDropMenus] = useState<boolean>(true);

   
    return <DropMenuContext2.Provider value={{openDropMenus, setOpenDropMenus}}>
        {children}
        </DropMenuContext2.Provider>;
};