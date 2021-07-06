import {ModalProps} from 'react-native';

export type option = {
  label: string;
  value: string;
};

export interface ModalOptionsProps extends ModalProps {
  onClose: (id: string) => void;
  onSelect: (id: string, value: string) => void;
  options: option[];
  id: string;
}
