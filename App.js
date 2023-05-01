import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack' // use native stack navigator for better performance versus stack navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
    }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

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
            name='Drawer' 
            component={DrawerNavigator} 
            options={{
              headerShown: false,
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
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
