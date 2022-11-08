import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header} >
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            
            <TouchableOpacity>
                <Image
                    source={require('../../assets/burger.png')}
                    style={styles.burger}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#f14049',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 10
    },
    logo: { width: 150 },
    burger: { width: 70, height: 40 }
})

export default Header;