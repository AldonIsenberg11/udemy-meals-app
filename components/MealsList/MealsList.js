import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem";

function mealsList({items}) {
    function renderMealItem(itemData) {
        const {id, title, imageUrl, affordability, complexity, duration} = itemData.item;

        const mealItemProps = {
            id,
            title,
            imageUrl,
            affordability,
            complexity,
            duration,
        }

        return (
            <MealItem {...mealItemProps} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={items} 
                keyExtractor={(item) => item.id }
                renderItem={renderMealItem} 
            />
        </View>
    )
}

export default mealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})