import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const Hero = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/hero.jpg')}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.txt}>{`Your\nFavourite\nMeals in\nOne place`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    gradient: {
        position: 'absolute',
        width: 410,
        height: 400,
        zIndex: 2,
        justifyContent: 'flex-end'
    },
    txt: {
        position: 'absolute',
        top: 100,
        alignSelf: 'flex-start',
        textShadowColor: '#000000',
        textShadowOffset: { width: -0.5, height: 1 },
        textShadowRadius: 5,
        color: '#FFFFFF',
        fontSize: 60,
        marginLeft: 12
    },
    image: {
        width: '100%',
        height: 500
    }
});

export default Hero;