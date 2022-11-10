import { useEffect, useState } from "react";
import Search from "./Search";
import { Wrapper } from "../../components";


const SearchScreen = () => {
    const [query, setQuery] = useState<string>("");
    const [items, setItems] = useState<Array<Object>>([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, [query]);

    return (
        <>
            <Search setQuery={setQuery} />
            {
                query?.length > 0
                && <Wrapper items={items} />
            }
        </>
    )
}

export default SearchScreen;