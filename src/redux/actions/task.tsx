import {Task} from 'src/types/task';
import {TASK_TYPES} from '../types';

export const updateTask = (id: any) => {
  return {
    type: TASK_TYPES.UPDATE_TASKS,
    payload: id,
  };
};

export const saveTask = (task: Task) => {
  return {
    type: TASK_TYPES.SAVE_TASK,
    payload: task,
  };
};
