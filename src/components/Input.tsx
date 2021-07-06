import React, {ComponentProps} from 'react';
import {FC} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface InputProps extends TextInputProps {
  label: string | number;
  touchable?: Boolean;
  onPress?: () => void;
  icon?: any;
}

const Input: FC<InputProps> = ({
  label,
  touchable,
  onPress = () => {},
  icon = 'chevron-down-outline',
  ...rest
}) => {
  if (touchable) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <View style={[styles.input, styles.inputTouchable]}>
            <Text style={[rest.value ? styles.value : styles.placeholder]}>
              {rest.value || rest.placeholder}
            </Text>
          </View>
          <Ionicons style={styles.icon} name={icon} size={24} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} inlineImagePadding={23} {...rest} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 28,
  },
  inputTouchable: {
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#C6C6C6',
  },
  input: {
    height: 40,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    paddingLeft: 16,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 8,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    color: 'black',
  },
});

export default Input;
