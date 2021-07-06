import React, {FC, useState} from 'react';
import {TouchableWithoutFeedback, Text, StyleSheet, View} from 'react-native';
import {Task} from '../types/task';
import Checkbox from './Checkbox';

interface TaskTileProps extends Task {
  onPress: (id: any) => void;
}
const TaskTile: FC<TaskTileProps> = ({title, onPress, id, isComplete}) => {
  return (
    <View style={{marginBottom: 16}}>
      <TouchableWithoutFeedback onPress={() => onPress(id)}>
        <View style={[styles.container]}>
          <Checkbox checked={isComplete || false} onPress={() => onPress(id)} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TaskTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    flex: 1,
  },
});
