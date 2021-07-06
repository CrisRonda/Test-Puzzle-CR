import React from 'react';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ButtonProps} from '../types/components/button';
import {colors} from '../theme/colors';

const Button: FC<ButtonProps> = ({onPress = () => {}, title}) => (
  <RectButton onPress={onPress} style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </RectButton>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  title: {
    color: 'white',
  },
});
