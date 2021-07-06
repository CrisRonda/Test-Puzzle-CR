import {AnyAction} from 'redux';
import {StateTask} from 'src/types/redux';
import {TASK_TYPES} from '../types';

const initialState: StateTask = {
  task: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TASK_TYPES.UPDATE_TASKS:
      const newState = state.task.map(item =>
        item.id === action.payload
          ? {...item, isComplete: !item.isComplete}
          : item,
      );
      return {...state, task: newState};
    case TASK_TYPES.SAVE_TASK:
      return {...state, task: [action.payload, ...state.task]};
    default:
      return state;
  }
};
export default reducer;
