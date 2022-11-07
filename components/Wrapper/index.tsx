import { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { GlobalContext } from '../../context/globalCtx';
import Card from './Card';

const Wrapper = () => {
    const ctx = useContext(GlobalContext);
    // Acrescentar um map ao resultado, que irá exibir as imagens na tela.

    const renderCard = (meal: any) => {
        return (
            < Card
                key={meal.idMeal}
                title={meal.strMeal}
                imgSrc={meal.strMealThumb}
            />
        );
    }

    return (
        <ScrollView style={styles.container} horizontal={true}>
            {
                ctx.meals?.map(
                    (meal: any) =>
                        renderCard(meal)
                )
            }
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