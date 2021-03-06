import React from "react";
import {ErrorMessage, Field} from "formik";
import {TextField} from "@material-ui/core";
import style from "./FormikField.module.css";

interface FieldProps {
  value?: String;
  name: String | string;
  label: String | string;
  err: any;
  variant?: string;
  required?: boolean;
  multiline?: boolean;
  onKey?: any;
}

const FormikField: React.FC<FieldProps> = ({
  value,
  name,
  label,
  err,
  variant,
  required = false,
  multiline = false,
  onKey,
}) => {
  return (
    <div className={style.field}>
      <Field value={value}
        as={TextField}
        label={label}
        name={name}
        fullWidth
        helperText={<ErrorMessage name={`${name}`} />}
        error={err}
        variant={variant}
        autoComplete="off"
        required={required}
        multiline={multiline}
        onKeyPress={onKey}
      />
    </div>
  );
};

export default FormikField;
