import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack' // use native stack navigator for better performance versus stack navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons 
              name='list' 
              color={color} 
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons 
              name='star' 
              color={color} 
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
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
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
