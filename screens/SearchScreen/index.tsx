import { useEffect, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Filters, Search } from "../../components";
import FetchCard from "../../components/FetchCard";
import useFilterItems from "../../hooks/useFilterItems";

export type Imeals = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strMealThumb: string
}

const SearchScreen = () => {
    const [query, setQuery] = useState<string | null>(null);
    const [rawItems, setRawItems] = useState<Array<Imeals>>([]);
    const [filteredItems, setfilteredItems] = useState<Array<Imeals>>([]);
    const [filters, setFilters] = useState<Array<String>>([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => setRawItems(data.meals))
    }, [query]);

    useEffect(() => {
        let filtered = useFilterItems(rawItems, filters);
        setfilteredItems(filtered)
    }, [rawItems, filters]);

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
                        <Filters amount={filteredItems?.length} />
                    }
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