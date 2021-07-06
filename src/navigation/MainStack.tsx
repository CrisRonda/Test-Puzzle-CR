import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddTask from '../containers/AddTask';
import TopTabs from './TopTabs';
import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();

const MainTask = () => {
  return (
    <Stack.Navigator
      initialRouteName="Board"
      screenOptions={{
        headerTitleAlign: 'left',
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          paddingLeft: 24,
        },
        headerTitleStyle: {
          paddingLeft: 16,
        },
        headerBackImage: () => <Ionicons name="chevron-back" size={28} />,
      }}>
      <Stack.Screen name="Board" component={TopTabs} />
      <Stack.Screen
        name="Add"
        component={AddTask}
        options={{
          headerTitleStyle: {
            paddingLeft: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainTask;
