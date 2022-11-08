import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/home_red.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/search_red.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/dice_red.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50
    },
    icon: {
        width: 40
    }
});

export default Footer;