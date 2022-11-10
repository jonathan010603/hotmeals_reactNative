import styled from 'styled-components/native';

const Hero = () => {
    return (
        <Container>
            <Banner
                source={require('../../../assets/hero.jpg')}
                resizeMode="cover"
            />
            <Phrase>{`Your\nFavourite\nMeals in\nOne place`}</Phrase>
        </Container>
    );
}

const Container = styled.View`
    background-color: #000000;
`

const Banner = styled.Image`
    width: 100%;
    height: 400px;
    blur-radius: 200px;
    opacity: 0.6
`

const Phrase = styled.Text`
    top: 70px;
    color: #FFFFFF;
    font-size: 44px;
    line-height: 60px;
    margin-left: 12px;
    position: absolute;
    align-self: flex-start;
    text-shadow-radius: 5px;
    text-shadow-color: #000000;
    text-shadow-offset: { width: -0.5px, height: 1px };
`

export default Hero;