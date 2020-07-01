import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField } from "@material-ui/core";
import style from "./FormikField.module.css";

interface FieldProps {
  name: string;
  label: string;
  err: any;
  variant?: string;
  required?: boolean;
}

const FormikField: React.FC<FieldProps> = ({
  name,
  label,
  err,
  variant,
  required = false,
}) => {
  return (
    <div className={style.field}>
      <Field
        as={TextField}
        label={label}
        name={name}
        fullWidth
        helperText={<ErrorMessage name={name} />}
        error={err}
        variant={variant}
        autoComplete="off"
        required={required}
      />
    </div>
  );
};

export default FormikField;