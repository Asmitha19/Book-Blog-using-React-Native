import React, { Component } from 'react';
import Home from './HomeComponent';
import Review from './ReviewComponent';
import Bookdetail from './BookdetailComponent';
import Contact from './ContactComponent';
import Feedback from './FeedbackComponent';
import { View, Platform, SafeAreaView, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { fetchReviews, fetchComments, fetchLatest } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    comments: state.comments,
    latest: state.latest
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchComments: () => dispatch(fetchComments()),
  fetchLatest: () => dispatch(fetchLatest())
})

const HomeNavigator = createStackNavigator();
const ReviewNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const FeedbackNavigator = createStackNavigator();
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

function ContactNavigatorScreen({ navigation }) {
    return(
        <ContactNavigator.Navigator
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
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
                options={{
                  headerTitle: "",
                  headerLeft: () => <Icon name="menu" style={{marginLeft: 10}} size={24} color= 'white' onPress={ () => navigation.toggleDrawer() } />
                }}
            />

        </ContactNavigator.Navigator>
    );
}

function FeedbackNavigatorScreen({ navigation }) {
    return(
        <FeedbackNavigator.Navigator
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
            <FeedbackNavigator.Screen
                name="Feedback"
                component={Feedback}
                options={{
                  headerTitle: "Feedback",
                  headerLeft: () => <Icon name="menu" style={{marginLeft: 10}} size={24} color= 'white' onPress={ () => navigation.toggleDrawer() } />
                }}
            />

        </FeedbackNavigator.Navigator>
    );
}

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Asmitha's Bookshelf</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  </ScrollView>
);

function MainNavigatorScreen() {
    return(
        <MainNavigator.Navigator
            drawerStyle={{
              backgroundColor: '#F1D4D4'
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
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
            <MainNavigator.Screen
                name="Contact Us"
                component={ContactNavigatorScreen}
                options={{
                  headerTitle: 'Contact Us',
                  drawerLabel: 'Contact Us',
                  drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                      name='address-card'
                      type='font-awesome'
                      size={16}
                      color={tintColor}
                    />
                  )
                }}
            />
            <MainNavigator.Screen
                name="Feedback"
                component={FeedbackNavigatorScreen}
                options={{
                  headerTitle: 'Feedback',
                  drawerLabel: 'Feedback',
                  drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                      name='comments'
                      type='font-awesome'
                      size={18}
                      color={tintColor}
                    />
                  )
                }}
            />
        </MainNavigator.Navigator>
    );
}


class Main extends Component {

  componentDidMount() {
    this.props.fetchReviews();
    this.props.fetchComments();
    this.props.fetchLatest();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#D95D5D',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
