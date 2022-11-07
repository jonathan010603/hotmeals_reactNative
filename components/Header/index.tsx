import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header} >
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 130,
        backgroundColor: '#f14049',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: { width: 250, marginTop: 'auto' }
})

export default Header;