import { View, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from "react";
import CategoryCard from './CategoryCard';

const Showcase = () => {

    const [categories, setCategories] = useState<Array<Object>>();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, []);

    return (
        <View style={styles.container}>
            {
                categories?.map((category: any) =>
                    <CategoryCard
                        id={category.idCategory}
                        name={category.strCategory}
                        thumb={category.strCategoryThumb}
                    />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default Showcase;