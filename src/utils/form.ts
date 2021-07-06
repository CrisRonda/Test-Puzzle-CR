import {
  regexDateDDMMYYY,
  regexHour,
  regexValidateDateDDMMYYY,
  regexValidateHour,
} from './date';

type fieldsFormTypes = {
  [key: string]: {
    validate: (value: string) => {formatValue: string; error: string};
  };
};

const fieldsForm: fieldsFormTypes = {
  title: {
    validate: (value: string) => {
      let formatValue = value;
      const error = formatValue.length < 4;
      return {formatValue, error: error ? 'Title not valid' : ''};
    },
  },
  deadline: {
    validate: (value: string) => {
      let formatValue = value;
      formatValue = formatValue.replace(regexDateDDMMYYY, '$1-$2-$3');
      const error = !Boolean(formatValue.match(regexValidateDateDDMMYYY));
      return {formatValue, error: error ? 'Date not valid' : ''};
    },
  },
  startTime: {
    validate: (value: string) => validateHour(value, 'Start time not valid'),
  },
  endTime: {
    validate: (value: string) => validateHour(value, 'End time not valid'),
  },
  remaind: {
    validate: (value: string) => ({
      formatValue: value,
      error: value.length < 5 ? 'Remind time not valid' : '',
    }),
  },
  repeat: {
    validate: (value: string) => ({
      formatValue: value,
      error: value.length < 5 ? 'Repear time not valid' : '',
    }),
  },
};

function validateHour(value: string, errorMessage: string) {
  let formatValue = value;
  formatValue = formatValue.replace(regexHour, '$1:$2');

  let error = '';
  const hour = Number(formatValue.substr(0, 2));
  const min = Number(formatValue.substr(3, 5));
  if (hour <= 0 || hour >= 24) error = errorMessage;
  if (min < 0 || min >= 60) error = errorMessage;

  return {formatValue, error};
}

export default fieldsForm;
