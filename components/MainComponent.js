import React, { Component } from 'react';
import Home from './HomeComponent';
import Review from './ReviewComponent';
import Bookdetail from './BookdetailComponent';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeNavigator = createStackNavigator();
const ReviewNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function HomeNavigatorScreen({ navigation }) {
    return(
        <HomeNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#D95D5D"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={{
                  headerTitle: "Home",
                  headerLeft: () => <Icon name="menu" style={{marginLeft: 10}} size={24} color= 'white' onPress={ () => navigation.toggleDrawer() } />
                }}
            />

        </HomeNavigator.Navigator>
    );
}

function ReviewNavigatorScreen({ navigation }) {
    return(
        <ReviewNavigator.Navigator
            initialRouteName='Reviews'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#D95D5D"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <ReviewNavigator.Screen
                name="Reviews"
                component={Review}
                options={{
                  headerTitle: "Reviews",
                  headerLeft: () => <Icon name="menu" style={{marginLeft: 10}} size={24} color= 'white' onPress={ () => navigation.toggleDrawer() } />
                }}
            />
            <ReviewNavigator.Screen
                name="Bookdetail"
                component={Bookdetail}
                options={{ headerTitle: "Book Details"}}
            />

        </ReviewNavigator.Navigator>
    );
}

function MainNavigatorScreen() {
    return(
        <MainNavigator.Navigator
            drawerStyle={{
              backgroundColor: '#F1D4D4'
            }}
        >
            <MainNavigator.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                  headerTitle: 'Home',
                  drawerLabel: 'Home',
                  drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                      name='home'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                    />
                  )
                }}
            />
            <MainNavigator.Screen
                name="Reviews"
                component={ReviewNavigatorScreen}
                options={{
                  headerTitle: 'Reviews',
                  drawerLabel: 'Reviews',
                  drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                      name='pencil'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                    />
                  )
                }}
            />
        </MainNavigator.Navigator>
    );
}


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
        <NavigationContainer>
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigatorScreen/>
            </View>
        </NavigationContainer>
    );
  }
}

export default Main;
