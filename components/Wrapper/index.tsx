import { useState } from "react";
import CategoryCard from './CategoryCard';
import styled from 'styled-components/native';
import Card from './Card';
import React from "react";

interface Iprops {
    cat?: boolean,
    items: Array<Object>
}

const Wrapper = React.memo(
    ({ items, cat }: Iprops) => {

        return (
            <>
                <Container>
                    {
                        items?.map((item: any) => {
                            if (cat) return (
                                <CategoryCard
                                    id={item.idCategory}
                                    name={item.strCategory}
                                    thumb={item.strCategoryThumb}
                                />
                            )
                            return (
                                <Card
                                    id={item.idMeal}
                                    name={item.strMeal}
                                    thumb={item.strMealThumb}
                                />
                            );
                        })
                    }
                </Container>
            </>
        );
    }
)

const Container = styled.View`
    padding-horizontal: 10px;
    width: 97%;
    align-self: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

export default Wrapper;