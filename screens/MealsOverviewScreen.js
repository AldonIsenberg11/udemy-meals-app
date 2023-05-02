import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data"; 


function MealsOverviewScreen({navigation, route}) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    
        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation])

    return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;