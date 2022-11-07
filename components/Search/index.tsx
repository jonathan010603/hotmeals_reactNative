import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { GlobalContext } from '../../context/globalCtx';

const Search = () => {
    const [searchInput, setInput] = useState(String);
    const ctx = useContext(GlobalContext);

    const handleClick = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(res => res.json())
            .then(data => ctx.setMeals(data.meals))
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={text => setInput(text)} />
            <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
                <Image
                    source={require('../../assets/search.png')}
                    style={styles.searchIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: 350,
        height: 60,
        backgroundColor: '#f7f7f7',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 50
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f14049',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        width: 30,
    },
    input: {
        flex: 1,
        marginRight: 10,
        marginLeft: 18,
        fontSize: 20
    }
})

export default Search;