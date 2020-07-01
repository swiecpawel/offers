import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import style from "./FormikSelect.module.css";

export interface FormikSelectItem {
  label: string;
  value: string | number;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  label: string;
  required?: boolean;
  opt: string;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
  required: boolean;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl fullWidth={true} >
      <InputLabel required={required}>{label}</InputLabel>
      <Select
        native
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  name,
  items,
  label,
  required = false,
  opt,
}) => {
  return (
    <div className={style.FormikSelect}>
      <Field
        name={name}
        as={MaterialUISelectField}
        errorString={<ErrorMessage name={name} />}
        required={required}
      >
        <option value="" disabled>
          {opt}
        </option>

        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default FormikSelect;
