import { createContext, ReactNode, useState } from 'react';

export const GlobalContext = createContext<any>(null);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {

    const [meals, setMeals] = useState<Array<Object>>([])
    const [error, setError] = useState<boolean>(false);
    const [filterModal, setFilterOpen] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<Array<Object>>([]);

    return (
        <GlobalContext.Provider value={
            {
                meals, setMeals,
                error, setError,
                filterModal, setFilterOpen,
                globalFilter, setGlobalFilter
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}