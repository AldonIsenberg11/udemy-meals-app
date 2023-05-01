import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack' // use native stack navigator for better performance versus stack navigator

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            contentStyle: { backgroundColor: '#3f2f25' },
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen}
            // We used `useLayoutEffect` in the mealsOverviewScreen to set the title of the screen instead of passing here.
            // options={({route, navigation}) => {
            //   const { categoryId } = route.params;
            //   const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);
            //   return {
            //     title: selectedCategory.title,
            //   }
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
