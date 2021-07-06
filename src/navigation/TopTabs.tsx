import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTask from '../containers/AllTask';
import CompleteTask from '../containers/CompleteTask';
import FavoriteTask from '../containers/FavoriteTask';
import UncompleteTask from '../containers/UncompleteTask';
import {StyleSheet} from 'react-native';

const Tabs = createMaterialTopTabNavigator();

const MainTabs = () => (
  <Tabs.Navigator
    initialRouteName="All"
    tabBarOptions={{
      indicatorStyle: {
        backgroundColor: 'black',
        width: 13,
        alignSelf: 'center',
        left: '10%',
      },
      labelStyle: {
        fontSize: 10,
        textTransform: 'capitalize',
        width: 'auto',
      },
      tabStyle: {
        borderTopWidth: StyleSheet.hairlineWidth * 1.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'gray',
      },
    }}>
    <Tabs.Screen name="All" component={AllTask} />
    <Tabs.Screen name="Completed" component={CompleteTask} />
    <Tabs.Screen name="Uncompleted" component={UncompleteTask} />
    <Tabs.Screen name="Favorite" component={FavoriteTask} />
  </Tabs.Navigator>
);

export default MainTabs;
