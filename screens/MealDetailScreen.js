import { StyleSheet, Text } from "react-native"

function MealDetailScreen({route}) {
    const { mealId } = route.params;
    return <Text>This is the Meal Detail Screen ({ mealId })</Text>
}

export default MealDetailScreen

const styles = StyleSheet.create({})