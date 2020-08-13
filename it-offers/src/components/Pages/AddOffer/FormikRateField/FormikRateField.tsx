import React from "react";
import {ErrorMessage, Field} from "formik";
import style from "../FormikField/FormikField.module.css";
import TechOption from "../TechOption/TechOption";

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

const FormikRateField: React.FC<FieldProps> = ({
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
      <Field

        value={value}
        as={TechOption}
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

export default FormikRateField;