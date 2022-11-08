import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CategoryCard = ({ id, name, thumb }: any) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{ uri: thumb }}
                style={styles.image}
                resizeMode="center"
            />
            <Text style={styles.txt}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20
    },
    txt: {
        fontSize: 20,
    },
    image: {
        width: 180,
        height: 200
    }
});

export default CategoryCard;