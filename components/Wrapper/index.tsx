import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Wrapper = () => {
    // Acrescentar um map ao resultado, que irá exibir as imagens na tela.
    return (
        <ScrollView style={styles.container} horizontal={true}>
            <Image
                source={require('../../assets/hero.jpg')}
                style={styles.image}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    image: {
        marginRight: 15,
        width: 350,
        height: 500,
        borderRadius: 30,
    }
});

export default Wrapper;