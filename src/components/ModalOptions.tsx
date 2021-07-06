import React, {FC} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ModalOptionsProps} from 'src/types/components/modalOptions';

const ModalOptions: FC<ModalOptionsProps> = ({
  onClose,
  onSelect,
  options,
  id,
  ...rest
}) => {
  return (
    <Modal {...rest} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.close}>
            <TouchableWithoutFeedback onPress={() => onClose(id)}>
              <Ionicons name="close" size={24} />
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            data={options}
            renderItem={({item: {value, label}}) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onSelect(id, value);
                }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.text}>
                  {label}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.label}
          />
        </View>
      </View>
    </Modal>
  );
};
export default ModalOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'flex-end',
  },
  content: {
    position: 'relative',
    width: '100%',
    maxHeight: '45%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    paddingTop: 32,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
  button: {
    marginBottom: 12,
    paddingBottom: 12,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 12,
    padding: 8,
  },
});
