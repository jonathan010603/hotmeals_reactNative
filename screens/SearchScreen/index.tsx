import { useContext, useEffect, useState } from "react";
import { FlatList, ListRenderItem, Modal, Text, View } from "react-native";
import { FilterModal, Filters, Search } from "../../components";
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

    const renderItem: ListRenderItem<Imeals> = ({ item }) => (
        <FetchCard
            key={item.idMeal}
            id={item.idMeal}
            name={item.strMeal}
            thumb={item.strMealThumb}
        />
    );

    return (
        <FlatList
            contentContainerStyle={{ marginHorizontal: 5 }}
            ListHeaderComponent={
                <>
                    <Search setQuery={setQuery} />
                    {
                        filteredItems?.length > 0 &&
                        <Filters
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
            horizontal={false}
            data={filteredItems}
            keyExtractor={(item) => item.idMeal}
            renderItem={renderItem}
        />
    )
}


export default SearchScreen;