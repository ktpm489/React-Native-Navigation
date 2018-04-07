// navigator.js
// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

// StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

// TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

// Plain old Component
import Plain from './Plain'

// Screen
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import SettingsScreen from './SettingsScreen'


// Tabs Navigator
export const Tabs = TabNavigator({
    TabA: { screen: TabA },
    TabB: { screen: TabB },
    TabC: { screen: TabC }
}, {
        order: ['TabA', 'TabB', 'TabC'],
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,

    })

    // custom tab with stack into tab navigator
    const HomeStack = StackNavigator({
        Home : { screen: HomeScreen},
        Details : { screen: DetailsScreen}
    })
    const SettingsStack = StackNavigator({
        Settings: { screen: SettingsScreen},
        Details: { screen: DetailsScreen }
    }) 
 // export custom tab navigator
 export const TabCus = TabNavigator(
     {
         Home: { screen : HomeStack},
         Settings: { screen: SettingsStack}
     }
 )   

export const Stack = StackNavigator({
    ItemList: { screen: ItemList },
    Item: { screen: Item },
    Tabs: { screen: Tabs }
}, {
        initialRouteName: 'ItemList'
    })
// Drawer Navigator
// sap xep dua vao thu tu
export const Drawer = DrawerNavigator({
    Stack: { screen: Stack },
    Tabs: { screen: Tabs },
    TabCus: { screen: TabCus},
    Plain: { screen: Plain },
})