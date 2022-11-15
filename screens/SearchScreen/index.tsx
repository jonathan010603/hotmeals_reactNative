import { FlashList } from "@shopify/flash-list";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-native";
import { FilterModal, FiltersBar, Search } from "../../components";
import FetchCard from "../../components/FetchCard";
import { SearchContext } from "../../context/searchCtx";
import useFilterItems from "../../hooks/useFilterItems";

export type Imeals = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strMealThumb: string
}

const SearchScreen = () => {
    const [query, setQuery] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [rawItems, setRawItems] = useState<Array<Imeals>>([]);
    const [filteredItems, setfilteredItems] = useState<Array<Imeals>>([]);
    const SearchCtx = useContext(SearchContext);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => setRawItems(data.meals))
    }, [query]);

    useEffect(() => {
        let filtered = useFilterItems(rawItems, SearchCtx?.filters);
        setfilteredItems(filtered)
    }, [rawItems]);

    return (
        <FlashList
            ListHeaderComponent={
                <>
                    <Search setQuery={setQuery} />
                    {
                        <FiltersBar
                            amount={filteredItems?.length}
                            setModalOpen={setModalOpen}
                        />
                    }
                    <Modal transparent={true} visible={modalOpen}>
                        <FilterModal setModalOpen={setModalOpen} />
                    </Modal>
                </>
            }
            numColumns={2}
            data={filteredItems || []}
            estimatedItemSize={25}
            renderItem={({ item }) => (
                <FetchCard
                    key={item.idMeal}
                    id={item.idMeal}
                    name={item.strMeal}
                    thumb={item.strMealThumb}
                />
            )}
        />
    )
}


export default SearchScreen;