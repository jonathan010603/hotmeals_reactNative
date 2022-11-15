import { CategoryCard, Hero } from "../../components";
import { categoryData } from "../../assets/categories";
import { FlatList, ListRenderItem } from "react-native";
import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { GlobalContext } from "../../context/globalCtx";

export type Icategory = {
    idCategory: String,
    strCategory: String,
    strCategoryThumb: String
}

const HomeScreen = () => {
    const globalCtx = useContext(GlobalContext);

    useEffect(() => {
        globalCtx.setCategories(categoryData);
    }, [])

    const renderItem: ListRenderItem<Icategory> = ({ item }) => (
        <CategoryCard
            id={item.idCategory}
            name={item.strCategory}
            thumb={item.strCategoryThumb}
        />
    );

    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <Hero />
                    <ShowCaseHeader>
                        <ShowCaseName>Categories</ShowCaseName>
                        <Icon
                            source={require('../../assets/expand.png')}
                            resizeMode="contain"
                        />
                    </ShowCaseHeader>
                </>
            }
            numColumns={2}
            horizontal={false}
            data={categoryData}
            keyExtractor={(item) => item.idCategory}
            renderItem={renderItem}
        />
    )
}

const ShowCaseHeader = styled.View`
    width: 100%;
    height: 100px;
    color: #FFFFFF;
    background-color: #f14049;
    align-items: center;
    justify-content: center;
`

const ShowCaseName = styled.Text`
    color: #FFFFFF;
    font-size: 30px;
`

const Icon = styled.Image`
    height: 50px;
`

export default HomeScreen;