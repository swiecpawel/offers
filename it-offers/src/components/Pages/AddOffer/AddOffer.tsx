import * as React from "react";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import Header from "../../Header/Header";
import style from "./AddOffer.module.css";
import { TiTick } from "react-icons/ti";
import { MdAddAPhoto } from "react-icons/md";
import { addNewOffer, OfferType } from "../../../slices/offer/offerSlice";
import FormikField from "./FormikField/FormikField";
import FormikSelect from "./FormikSelect/FormikSelect";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import TechOption from "./TechOption/TechOption";
import FormikRateField from "./FormikRateField/FormikRateField";

const ValidationSchema = Yup.object().shape({
  shortName: Yup.string().required("This field is required"),
  companyWebsite: Yup.string().required("This field is required"),
  companySize: Yup.number().required("This field is required"),
  experienceLevel: Yup.string().required("This field is required"),
  title: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  street: Yup.string().required("This field is required"),
  mainTechnology: Yup.string().required("This field is required"),
  jobDescription: Yup.string().required("This field is required"),
});

const technologiesOtions: Array<String> = [
  "Java",
  "C/C++",
  "HTML5",
  "CSS3",
  "JavaScript",
];

const AddOffer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (values: OfferType) => {
    try {
      console.log(`Submit: ${JSON.stringify(values)}`);
      dispatch(addNewOffer(values));
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          shortName: "",
          companyWebsite: "",
          companyType: "",
          companySize: "",
          companyIndustry: "",
          experienceLevel: "",
          title: "",
          employmentType: "",
          salaryFrom: "",
          salaryTo: "",
          currency: "",
          city: "",
          street: "",
          mainTechnology: "",
          technology: [
            {
              tech: "",
              level: "",
            },
          ],
          jobDescription: "",
          coordinates: [51.12, 12.12],
          date: "",
          example: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {({ values, errors, handleReset, dirty, isValid, touched }) => (
          <Form>
            <div className={style.Content}>
              <div className={style.Form}>
                <div className={style.strip}>
                  <div className={style.logoBox}>
                    <div className={style.logo}>
                      <MdAddAPhoto size={80} />
                    </div>
                    <div>Upload logo*</div>
                  </div>
                  <div className={style.inputBox}>
                    <FormikField
                      required={true}
                      name="shortName"
                      label="Company Name"
                      err={errors.shortName && touched.shortName}
                    />
                    <FormikField
                      required={true}
                      name="companyWebsite"
                      label="Company website"
                      err={errors.companyWebsite && touched.companyWebsite}
                    />
                    <FormikField
                      name="companySize"
                      label="Company Size"
                      err={errors.companySize && touched.companySize}
                    />
                  </div>

                  <div className={style.inputBox}>
                    <FormikSelect
                      name="companyType"
                      items={[
                        { label: "Software House", value: "Software-House" },
                        { label: "Start Up", value: "Start-Up" },
                      ]}
                      label="companyType"
                      opt="Choose Type"
                    />
                    <FormikSelect
                      name="companyIndustry"
                      items={[
                        { label: "E-commerce", value: "B2B" },
                        { label: "IoT", value: "Iot" },
                        { label: "Military", value: "Military" },
                        { label: "Logistic", value: "Logistic" },
                        { label: "Travel", value: "Travel" },
                        { label: "Other", value: "Other" },
                      ]}
                      label="employmentType"
                      opt="Choose employment Type"
                    />
                  </div>
                </div>
                <div className={style.strip}>
                  <div className={style.inputBox}>
                    <FormikField
                      required={true}
                      name="title"
                      label="Title"
                      err={errors.title && touched.title}
                    />
                    <FormikField
                      name="salaryFrom"
                      label="salaryFrom"
                      err={errors.salaryFrom}
                    />
                  </div>
                  <div className={style.inputBox}>
                    <FormikSelect
                      name="experienceLevel"
                      items={[
                        { label: "Junior", value: 1 },
                        { label: "Mid", value: 2 },
                        { label: "Senior", value: 3 },
                      ]}
                      label="Experience Level"
                      opt="Choose Exp Lvl "
                    />
                    <FormikField
                      name="salaryTo"
                      label="Salary to"
                      err={errors.salaryTo}
                    />
                  </div>
                  <div className={style.inputBox}>
                    <FormikSelect
                      name="employmentType"
                      items={[
                        { label: "B2B", value: "B2B" },
                        { label: "Permanent", value: "Permanent" },
                        {
                          label: "Mandate Contract",
                          value: "Mandate Contract",
                        },
                      ]}
                      label="employmentType"
                      opt="Choose employment Type"
                    />
                    <FormikSelect
                      name="currency"
                      items={[
                        { label: "PLN", value: "PLN" },
                        { label: "USD", value: "USD" },
                        {
                          label: "EUR",
                          value: "EUR",
                        },
                        {
                          label: "GBP",
                          value: "BGP",
                        },
                      ]}
                      label="Currency"
                      opt="Choose currency"
                    />
                  </div>
                </div>
                <div className={style.stripe}></div>
                <div className={style.stripe}>
                  <div className={style.offerTitle}>Job description</div>
                  <FormikField
                    name="jobDescription"
                    label="Job Description"
                    err={errors.jobDescription && touched.jobDescription}
                    variant="outlined"
                    multiline={true}
                  />
                </div>

                <div className={style.stripTech}>
                  <FieldArray
                    name="technology"
                    render={(arrayHelpers) => (
                      <div className={style.stripTech}>
                        {values.technology.map((t, index) => (
                          <div key={index}>
                            <FormikField
                              name={`technology[${index}].tech`}
                              label="Technology"
                              err={false}
                            />
                            <FormikRateField
                              name={`technology[${index}].level`}
                              label={"Add"}
                              err={false}
                            />

                            <button
                              className={style.remove}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              x
                            </button>
                          </div>
                        ))}
                        <button
                          className={style.add}
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ tech: "", level: "" })
                          }
                        >
                          +
                        </button>
                      </div>
                    )}
                  />
                </div>
                <div className={style.stripe}>
                  <div className={style.offerTitle}>Choose your location</div>
                </div>
                <div className={style.stripeLeft}>
                  <div className={style.inputBox}>
                    <FormikField
                      name="city"
                      label="City"
                      err={errors.city && touched.city}
                    />
                  </div>
                  <div className={style.inputBox}>
                    <FormikField
                      name="street"
                      label="Street"
                      err={errors.street && touched.street}
                    />
                  </div>
                </div>
                <div className={style.map}>Map</div>
                <div className={style.strip}>
                  <div className={style.inputBox}>
                    <FormikSelect
                      name="mainTechnology"
                      items={[
                        { label: "C++", value: "cpp" },
                        { label: "Java", value: "java" },
                        { label: "PM", value: "PM" },
                        { label: "HTML", value: "html" },
                      ]}
                      label="mainTechnology"
                      opt="Choose Main Tech"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Autocomplete
                multiple
                id="tags-filled"
                options={technologiesOtions.map((T) => T)}
                defaultValue={[technologiesOtions[1]]}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <TechOption tech={option} />

                    /*<Chip variant="outlined" label={option} {...getTagProps({ index })} />*/
                  ))
                }
                renderInput={(params) => (
                  <>
                    <TextField
                      {...params}
                      variant="filled"
                      label="freeSolo"
                      placeholder="Add Technology"
                    />
                  </>
                )}
              />
            </div>

            <div className={style.strip}>
              <div className={style.buttons}>
                <button disabled={!dirty || !isValid} type="submit">
                  Submit
                </button>
              </div>
              <div className={style.buttons}>
                <button onClick={handleReset} type="button">
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddOffer;
