import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data"; 
import MealItem from "../components/MealItem";


function MealsOverviewScreen({navigation, route}) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() =>{
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    
        navigation.setOptions({
            title: categoryTitle,
        })
    })


    function renderMealItem(itemData) {
        const {title, imageUrl, affordability, complexity, duration} = itemData.item;

        const mealItemProps = {
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
                data={displayedMeals} 
                keyExtractor={(item) => item.id }
                renderItem={renderMealItem} 
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})