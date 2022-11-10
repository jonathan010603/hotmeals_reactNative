import { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface Iprops {
    setScreen: Dispatch<SetStateAction<number>>,
    screen: number
}

const Navigation = ({ screen, setScreen }: Iprops) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => setScreen(0)}>
                <Icon
                    source={require('../../assets/home_red.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setScreen(1)}>
                <Icon
                    source={require('../../assets/search_red.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setScreen(2)}>
                <Icon
                    source={require('../../assets/dice_red.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 55px;
    margin-top: auto;
    padding-horizontal: 50px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between
`

const Icon = styled.Image`
    width: 40px
`

export default Navigation;