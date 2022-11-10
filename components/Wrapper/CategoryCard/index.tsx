import styled from "styled-components/native";

const CategoryCard = ({ id, name, thumb }: any) => {
    return (
        <Container>
            <ThumbImage
                source={{ uri: thumb }}
                resizeMode="center"
            />
            <Title>{name}</Title>
        </Container>
    );
}

const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`

const ThumbImage = styled.Image`
    width: 180px;
    height: 200px;
`

const Title = styled.Text`
    font-size: 20px;
`

export default CategoryCard;