import { FlashList } from "@shopify/flash-list";
import { Dispatch, SetStateAction, useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { categoryData } from "../../assets/categories";
import { SearchContext } from "../../context/searchCtx";
import { Icategory } from "../../screens/HomeScreen";

type Iprops = {
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const FilterModal = ({ setModalOpen }: Iprops) => {
    const SearchCtx = useContext(SearchContext);
    let filtersToApply: Array<string> = [];

    const clickedClose = () => {
        setModalOpen(false);
    }

    const clickedApply = () => {
        SearchCtx.setFilters(filtersToApply);
        setModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <TouchableOpacity onPress={() => clickedClose()}>
                    <CloseIcon
                        source={require('../../assets/close.png')}
                    />
                </TouchableOpacity>
                <FlashList
                    numColumns={3}
                    horizontal={false}
                    keyExtractor={(item) => item.idCategory}
                    data={categoryData}
                    estimatedItemSize={14}
                    renderItem={({ item }) => (
                        <CategoryBox onPress={() => { }}>
                            <CategoryBoxTxt>{item.strCategory}</CategoryBoxTxt>
                        </CategoryBox>
                    )}
                />
                <Apply onPress={() => clickedApply()}>
                    <ApplyTxt>Apply</ApplyTxt>
                </Apply>
            </Content>
        </Container>
    );
}

const CategoryBoxTxt = styled.Text`
    color: #FFFFFF;
    font-size: 11px;
`

const CategoryBox = styled.TouchableOpacity`
    margin-horizontal: 3px;
    margin-vertical: 3px;
    width: 90px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #f14049;
`

const ApplyTxt = styled.Text`
    color: #FFFFFF
    font-size: 15px;
`

const Apply = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: 10px;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: #f14049;
`

const CloseIcon = styled.Image`
    align-self: flex-end;
    margin-bottom: 15px;
    width: 30px;
    height: 30px;
`;

const Content = styled.View`
    width: 76.08%;
    height: 400px;
    margin-top: 230px;
    padding-top: 10px;
    padding-horizontal: 10px;
    align-self: center;
    background-color: #FFFFFF;
`

const Container = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.4);
`

export default FilterModal;