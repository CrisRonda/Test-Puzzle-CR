import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TaskTile from '../components/TaskTile';
import Button from '../components/Button';
import Container from '../components/Container';
import {ButtonProps} from '../types/components/button';
import {Task} from '../types/task';

const ListTask = ({
  data,
  buttonProps,
  activeButton,
  handleChange = () => {},
}: {
  data: Task[];
  activeButton?: Boolean;
  buttonProps?: ButtonProps;
  handleChange?: (id: any) => void;
}) => {
  return (
    <Container>
      <View style={styles.content}>
        {data?.length ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TaskTile {...item} onPress={handleChange} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        ) : (
          <Text style={styles.message}>Empty 😞</Text>
        )}
      </View>
      {activeButton && <Button {...buttonProps} />}
    </Container>
  );
};

export default ListTask;

const styles = StyleSheet.create({
  message: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});
