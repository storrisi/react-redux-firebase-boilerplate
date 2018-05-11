export function validateEmail(value) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value !== '' && re.test(value);
}

export function validatePassword(value) {
  const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[_£/=^-§ç+*|'%!#$%&?<>()[\]\\.,;:\s@"]).*$/;
  return value !== '' && re.test(value);
}

export function validateConfirmPassword(value, values) {
  return (
    value !== '' &&
    validatePassword(value) &&
    values.password === values.confirmPassword
  );
}

export function validateDate(value) {
  const re = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
  return re.test(value);
}

export function validateAll(rules, data) {
  return new Promise((resolve, reject) => {
    if (!rules || Object.keys(rules).length === 0) {
      return resolve(data);
    }

    const validationStatus = {};
    const validated = Object.keys(rules).reduce((result, key) => {
      let validates = result;
      validates = rules[key](data[key], data);
      validationStatus[key] = validates;
      return result === false ? false : validates;
    }, true);
    return validated ? resolve(data) : reject(validationStatus);
  });
}
