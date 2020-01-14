import React from 'react';
import { useFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    formContainer: style=>({
        maxWidth: '30rem',
        margin: 'auto'
    })
})
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.lastName = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be greater then 6 words';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const LoginForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const handleClick=(e)=>{
      console.log(e.target);
      
  }
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
        <h1>Login in</h1>
        <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email">Email Address</Label>
        <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <Label htmlFor="lastName">Password</Label>
        <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.Password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Login</button>
        </Form>
    </div>  
  );
};

export default LoginForm;