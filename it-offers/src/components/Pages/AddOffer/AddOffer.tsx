import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Header from "../../Header/Header";
import style from "./AddOffer.module.css";
import { TiTick } from "react-icons/ti";
import { MdAddAPhoto } from "react-icons/md";
import { addNewOffer, OfferType } from "../../../slices/offer/offerSlice";
import FormikField from "./FormikField/FormikField";
import FormikSelect from "./FormikSelect/FormikSelect";
import { useDispatch } from "react-redux";


const ValidationSchema = Yup.object().shape({
  shortName: Yup.string().required("This field is required"),
  companyWebsite: Yup.string().required("This field is required"),
  companySize: Yup.string().required("This field is required"),
  experienceLevel: Yup.string().required("This field is required"),
  title: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  street: Yup.string().required("This field is required"),
  mainTechnology: Yup.string().required("This field is required"),
  jobDescription: Yup.string().required("This field is required"),
});

const AddOffer: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: OfferType) => {
          try {
              console.log(`Submit: ${JSON.stringify(values)}`);
              dispatch(addNewOffer(values));
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
          companySize: 0,
          companyIndustry: "",
          experienceLevel: "",
          title: "",
          employmentType: "",
          salaryFrom: 0,
          salaryTo: 0,
          currency: "",
          city: "",
          street: "",
          mainTechnology: "",
          technology: [
            {
              tech: "",
              level: 1,
            },
          ],
          jobDescription: "",
          coordinates: [51.12, 12.12],
          date: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {({ errors, handleReset, dirty, isValid, touched }) => (
          <Form>
            <div className={style.Content}>
              <div className={style.ProgressBar}>
                <div className={style.circleActive}>1</div>
                <div className={style.titleActive}>Create</div>
                <div className={style.line}></div>
                <div className={style.circle}>2</div>
                <div className={style.title}>Verify</div>
                <div className={style.line}></div>
                <div className={style.circle}>3</div>
                <div className={style.title}>Payment</div>
                <div className={style.line}></div>
                <div className={style.circle}>
                  <TiTick />
                </div>
                <div className={style.title}>Publish</div>
              </div>
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
                      err={errors.companySize}
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
                    <FormikField
                      name="companyIndustry"
                      label="companyIndustry"
                      err={errors.companyIndustry && touched.companyIndustry}
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
                        { label: "Mid", value: 3 },
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
                  </div>
                </div>
                <div className={style.stripe}>
                  <div className={style.offerTitle}>Tech Stack</div>
                </div>
                <div className={style.stripe}>
                  <div className={style.offerTitle}>Job description</div>
                  <FormikField
                    name="jobDescription"
                    label="Job Description"
                    err={false}
                    variant="outlined"
                  />
                </div>
                <div className={style.stripe}>
                  <div className={style.offerTitle}>Choose your location</div>
                </div>
                <div className={style.stripeLeft}>
                  <div className={style.inputBox}>
                    <FormikField name="city" label="City" err={errors.city} />
                  </div>
                  <div className={style.inputBox}>
                    <FormikField
                      name="street"
                      label="Street"
                      err={errors.street}
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
                      ]}
                      label="mainTechnology"
                      opt="Choose Main Tech"
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
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
