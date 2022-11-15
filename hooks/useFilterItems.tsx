import { Imeals } from "../screens/SearchScreen";

const useFilterItems = (rawItems: Array<Imeals>, filters: Array<String>) => {
    let filteredItems: Array<Imeals> = [];

    if (filters?.length === 0) return rawItems;

    rawItems?.map(
        item => filters?.map(
            filter => filter === item.strCategory
                && filteredItems.push(item)
        )
    );

    return filteredItems;
}

export default useFilterItems;