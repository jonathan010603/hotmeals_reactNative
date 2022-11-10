import Hero from "./Hero";
import { useEffect, useState } from "react";
import { Wrapper } from "../../components";
import styled from "styled-components/native";
import React from "react";
import { categoryData } from "../../assets/categories";

const HomeScreen = () => {

    return (
        <>
            <Hero />
            <ShowCaseHeader>
                <ShowCaseName>Categories</ShowCaseName>
                <Icon
                    source={require('../../assets/expand.png')}
                    resizeMode="contain"
                />
            </ShowCaseHeader>
            <Wrapper items={categoryData} cat={true} />
        </>
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