import React, {useState} from 'react';
import {REMIND_OPTIONS, REPEAT_OPTIONS} from '../../constants/options';
import ModalOptions from '../../components/ModalOptions';
import AddTastLayout from '../../views/AddTast';
import {useDispatch} from 'react-redux';
import {saveTask} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import fieldsForm from '../../utils/form';

interface StateProps {
  [key: string]: {
    open: boolean;
    value: any;
  };
}
const AllTasks = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<StateProps>({
    title: {open: false, value: ''},
    deadline: {open: false, value: ''},
    startTime: {open: false, value: ''},
    endTime: {open: false, value: ''},
    remaind: {open: false, value: REMIND_OPTIONS[0].value},
    repeat: {open: false, value: REPEAT_OPTIONS[0].value},
  });

  const [errors, setErrors] = useState({});

  const closeModal = (name: string) => {
    setModalState(bef => ({...bef, [name]: {open: false, value: ''}}));
  };
  const openModal = (name: string) =>
    setModalState(bef => ({
      ...bef,
      [name]: {open: true, value: bef[name].value},
    }));

  const onSelect = (id: string, value: string) =>
    setModalState(bef => ({
      ...bef,
      [id]: {
        open: false,
        value,
      },
    }));

  const onChangeInput = (id: string, value: string) => {
    const {error, formatValue} = fieldsForm[`${id}`].validate(value);
    setErrors(bef => ({
      ...bef,
      [id]: error,
    }));
    setModalState(bef => ({
      ...bef,
      [id]: {
        open: false,
        value: formatValue,
      },
    }));
  };

  const onSubmit = () => {
    const hasEmptyValue = Object.values(modalState).some(
      item => Boolean(item.value) === false,
    );
    if (!hasEmptyValue) {
      const newTask: any = {
        id: new Date().getTime().toString(),
      };
      for (const key in modalState) {
        newTask[key] = modalState[key].value;
      }
      dispatch(saveTask(newTask));
      goBack();
    } else {
      Alert.alert('Error', 'Please complete all fields', [{style: 'cancel'}]);
    }
  };

  return (
    <>
      <AddTastLayout
        openModal={openModal}
        valueDeadline={modalState.deadline.value}
        valueRepeat={modalState.repeat.value}
        valueRemaind={modalState.remaind.value}
        valueStartTime={modalState.startTime.value}
        valueEndTime={modalState.endTime.value}
        valueTitle={modalState.title.value}
        onChangeInput={(id, value) => onChangeInput(id, value)}
        handleSubmit={onSubmit}
        errors={Object.values(errors).filter(Boolean)}
      />
      <ModalOptions
        onClose={closeModal}
        visible={modalState.repeat.open}
        id="repeat"
        onSelect={(id, value) => onSelect(id, value)}
        options={REPEAT_OPTIONS}
      />
      <ModalOptions
        onClose={closeModal}
        visible={modalState.remaind.open}
        id="remaind"
        onSelect={(id, value) => onSelect(id, value)}
        options={REMIND_OPTIONS}
      />
    </>
  );
};

export default AllTasks;
