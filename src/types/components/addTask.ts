interface AddTaskProps {
  openModal: (name: string) => void;
  valueDeadline: string;
  valueRepeat: string;
  valueRemaind: string;
  valueStartTime: string;
  valueEndTime: string;
  valueTitle: string;
  onChangeInput: (id: string, value: any) => void;
  handleSubmit: () => void;
  errors: Array<string | any>;
}
export default AddTaskProps;
