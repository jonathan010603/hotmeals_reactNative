import { createContext, ReactNode, useState } from 'react';

export const SearchContext = createContext<any>(null);

export const SearchCtxWrapper = ({ children }: { children: ReactNode }) => {

    const [filters, setFilters] = useState<Array<String>>([]);

    return (
        <SearchContext.Provider value={{
            filters, setFilters
        }}>
            {children}
        </SearchContext.Provider>
    );
}