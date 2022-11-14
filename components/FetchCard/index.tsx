import styled from "styled-components/native";

const FetchCard = ({ id, name, thumb }: any) => {
    return (
        <Container style={{ flex: 1 / 2 }}>
            <ThumbImage
                source={{ uri: thumb }}
                resizeMode="center"
            />
            <Title>
                {
                    name.length > 15
                        ? (name.substring(0, 15) + '...')
                        : name
                }
            </Title>
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

export default FetchCard;