import styled from "styled-components/native";

type Iprops = {
    amount: number
}

const Filters = ({ amount }: Iprops) => {

    return (
        <>
            <Bar />
            <Container>
                <FilterText>{amount} results</FilterText>
                <Button>
                    <FilterText>Filters</FilterText>
                    <PlusIcon
                        source={require('../../assets/plus.png')}
                        resizeMode={"contain"}
                    />
                </Button>
            </Container>
            <Bar />
        </>
    );
};

const Container = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    margin-vertical: 10px;
    padding-horizontal: 10px;
    align-items: center;
    justify-content: space-between;
`

const FilterText = styled.Text`
    color: #000000;
    font-size: 17px;
    text-align: center;
`

const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: flex-end;
`

const PlusIcon = styled.Image`
    width: 20px;
    height: 24px;
`

const Bar = styled.View`
    width: 380px;
    height: 1px;
    align-self: center;
    background-color: #EBEBEB;
`

export default Filters;