import React from 'react';
import Input from '../components/Input';
import Container from '../components/Container';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AddTaskProps from '../types/components/addTask';

const AddTask = ({
  openModal,
  valueDeadline,
  valueRepeat,
  valueRemaind,
  valueStartTime,
  valueEndTime,
  onChangeInput,
  valueTitle,
  handleSubmit,
  errors,
}: AddTaskProps) => {
  return (
    <Container>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <Input
          label="Title"
          placeholder="Design team meeting"
          onChangeText={value => onChangeInput('title', value)}
          value={valueTitle}
        />
        <Input
          label="Deadline"
          placeholder="20-02-2021"
          onChangeText={value => onChangeInput('deadline', value)}
          value={valueDeadline}
          maxLength={10}
          keyboardType="decimal-pad"
        />
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Input
              label="Start time"
              placeholder="20:00"
              value={valueStartTime}
              onChangeText={value => onChangeInput('startTime', value)}
              maxLength={5}
              keyboardType="decimal-pad"
            />
          </View>
          <View style={{flex: 1, marginLeft: 16}}>
            <Input
              label="End time"
              placeholder="21:00"
              value={valueEndTime}
              onChangeText={value => onChangeInput('endTime', value)}
              maxLength={5}
              keyboardType="decimal-pad"
            />
          </View>
        </View>

        <Input
          label="Remaind"
          touchable
          placeholder="10 minutes early"
          onPress={() => openModal('remaind')}
          value={valueRemaind}
        />
        <Input
          label="Repeat"
          touchable
          placeholder="Weekle"
          onPress={() => openModal('repeat')}
          value={valueRepeat}
        />
      </KeyboardAwareScrollView>
      {/* <View style={{flex: 1}} /> */}

      <View style={styles.errorContainer}>
        {errors.map((text: string) => (
          <Text style={styles.error} key={text}>
            {text}
          </Text>
        ))}
      </View>

      <Button title="Create task" onPress={handleSubmit} />
    </Container>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorContainer: {
    padding: 8,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
  },
});
