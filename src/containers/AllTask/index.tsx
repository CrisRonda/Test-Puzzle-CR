import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateTask} from '../../redux/actions';
import {RootState} from '../../redux/store';
import {Task} from '../../types/task';
import ListTask from '../../views/ListTasks';

const AllTasks = () => {
  const tasks: Task[] | any = useSelector<RootState>(
    ({taskState}) => taskState.task,
  );
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const handleAdd = () => navigate('Add');
  const changeStateTask = (id: any) => dispatch(updateTask(id));

  return (
    <ListTask
      data={tasks}
      activeButton
      buttonProps={{title: 'Add new task', onPress: handleAdd}}
      handleChange={id => changeStateTask(id)}
    />
  );
};

export default AllTasks;
