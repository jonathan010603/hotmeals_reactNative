import { useContext, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { GlobalContext } from '../../../context/globalCtx';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

interface ICard {
    title: string,
    imgSrc: string,
}

const Card = ({ title, imgSrc }: ICard) => {
    const ctx = useContext(GlobalContext);

    useEffect(() => ctx.meals.length > 0 && ctx.setError(false), []);

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                colors={['#000000', 'transparent']}
            >
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
            <Image
                source={{ uri: imgSrc }}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    title: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 40,
        height: 60,
        justifyContent: 'center'
    },
    image: {
        width: 350,
        height: 500,
        borderRadius: 30,
    },
    gradient: {
        position: 'absolute',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        height: 80,
        zIndex: 2
    }
});

export default Card;