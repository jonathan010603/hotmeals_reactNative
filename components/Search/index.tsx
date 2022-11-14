import { useState } from 'react';
import styled from 'styled-components/native';

interface Iprops {
    setQuery: (query: string) => void
}

const Search = ({ setQuery }: Iprops) => {
    const [searchInput, setInput] = useState(String);

    const clicked = () => {
        !searchInput.match(/^\s*$/) && setQuery(searchInput);
    }

    return (
        <Container>
            <Input
                onChangeText={text => setInput(text)}
                onSubmitEditing={() => setQuery(searchInput)}
            />
            <Button onPress={() => clicked()}>
                <Icon
                    source={require('../../assets/search.png')}
                    resizeMode="contain"
                />
            </Button>
        </Container>
    );
}

const Container = styled.View`
    width: 385px;
    height: 60px;
    margin-top: 50px;
    margin-bottom: 10px;
    border-radius: 30px;
    background-color: #f7f7f7;
    align-self: center;
    flex-direction: row;
    justify-content: flex-end;
`

const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: #f14049;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 20px;
    margin-left: 18px;
    margin-right: 10px;
`

const Icon = styled.Image`
    width: 30px;
`

export default Search;