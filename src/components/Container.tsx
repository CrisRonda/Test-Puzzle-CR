import React from 'react';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
const Container: FC = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: 'white',
  },
});

export default Container;
