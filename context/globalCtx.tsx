import { createContext, ReactNode, useState } from 'react';

export const GlobalContext = createContext<any>(null);

export const GlobalCtxWrapper = ({ children }: { children: ReactNode }) => {

    const [categories, setCategories] = useState<Array<Object>>([])
    const [error, setError] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{
            categories, setCategories,
            error, setError,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}