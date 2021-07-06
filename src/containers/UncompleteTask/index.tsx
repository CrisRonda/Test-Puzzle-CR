import React from 'react';
import ListTask from '../../views/ListTasks';
import {RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {Task} from '../../types/task';
import {updateTask} from '../../redux/actions';

const UncompleteTask = () => {
  const dispatch = useDispatch();
  const tasks: Task[] | any = useSelector<RootState>(
    ({taskState}) => taskState.task,
  );
  const uncompleteTask = tasks.filter((item: Task) => !item.isComplete);
  const changeStateTask = (id: any) => dispatch(updateTask(id));

  return <ListTask data={uncompleteTask} handleChange={changeStateTask} />;
};

export default UncompleteTask;
