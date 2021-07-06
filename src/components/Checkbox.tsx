import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Checkbox = ({
  checked,
  onPress,
}: {
  checked: Boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onPress}>
      {checked && <Ionicons name="checkmark" size={22} color="white" />}
    </Pressable>
  );
};

export default Checkbox;
const styles = StyleSheet.create({
  checkboxBase: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
    marginRight: 24,
  },

  checkboxChecked: {
    backgroundColor: 'coral',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
});
