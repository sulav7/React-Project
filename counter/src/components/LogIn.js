import React from "react";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
function LogIn() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("visited field", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            id='name'
            name='name'
            style={{ width: "250px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red", fontSize: "13px" }}>
              {formik.errors.name}
            </div>
          ) : null}
          <br />
          <br />
          <label htmlFor='email'>E-mail</label>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            style={{ width: "250px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red", fontSize: "13px" }}>
              {formik.errors.email}
            </div>
          ) : null}
          <br />
          <br />
          <label htmlFor='name'>Channel</label>
          <br />
          <input
            type='text'
            id='channel'
            name='channel'
            style={{ width: "250px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div style={{ color: "red", fontSize: "13px" }}>
              {formik.errors.channel}
            </div>
          ) : null}
          <br />
          <br />
          <button
            style={{ width: "100px", height: "40px", borderRadius: "0px" }}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
