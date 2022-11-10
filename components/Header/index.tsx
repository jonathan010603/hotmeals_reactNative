import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface Iprops {
    toTheTop: () => void
}

const Header = ({ toTheTop }: Iprops) => {
    return (
        <Container>
            <TouchableOpacity onPress={() => toTheTop()}>
                <Logo
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Burger
                    source={require('../../assets/burger.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </Container>
    );
}

const Container = styled.View`
    height: 90px;
    padding-top: 40px;
    padding-left: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f14049;
`

const Logo = styled.Image`
    width: 150px
`

const Burger = styled.Image`
    width: 70px;
    height: 40px
`

export default Header;