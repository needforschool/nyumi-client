import React from "react";

export const useForm = (
  callback: () => void,
  initialState = {}
): {
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (event: React.FormEvent) => void;
  setValues: React.Dispatch<React.SetStateAction<any>>;
  values: any;
  errors: any;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
  valid: boolean;
} => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const valid = errors && Object.entries(errors).length === 0;

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (event.target.getAttribute("contenteditable"))
      setValues({
        ...values,
        [event.target.getAttribute("name") || ""]: event.target.textContent,
      });
    else if (
      event.target.type === "checkbox" &&
      event.target instanceof HTMLInputElement
    )
      setValues({
        ...values,
        [event.target.name]: event.target.checked,
      });
    else setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (valid) callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    setValues,
    errors,
    setErrors,
    valid,
  };
};
