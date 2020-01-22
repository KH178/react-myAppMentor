import React from 'react';
import { useFormik } from 'formik';
import { Button, Form, Input } from 'reactstrap';
import useStyles from '../styles/LoginComponentStyle';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  }

  if (!values.password) {
    errors.lastName = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be greater then 6 words';
  }
  if (!values.conPassword) {
    errors.conPassword = 'Required';
  } else if (values.conPassword !== values.password) {
    errors.conPassword = 'Password not match';
  }

  if (!values.signEmail) {
    errors.signEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signEmail)) {
    errors.signEmail = 'Invalid email address';
  }

  return errors;
};

const SignupForm = ({handleFlip}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      conPassword: '',
      signEmail: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
      <div className={classes.mainHeading}>
        <p>Sign Up</p>
      </div>
      <Form onSubmit={formik.handleSubmit} className={classes.signForm}>
        <div className={classes.inputContainer}>
        <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
          />
          {formik.values.name.length > 0 ? formik.errors.name ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}

        </div>  
        <div className={classes.inputContainer}>
        <Input
            id="signEmail"
            name="signEmail"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.signEmail}
            placeholder="Email"
        />
        {formik.values.signEmail.length > 0 ? formik.errors.signEmail ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
        </div>
       <div className={classes.passwordInputContainer}> 
        <div className={classes.inputContainer}>
        <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            placeholder="Password"
            />
             {formik.values.password.length > 0 ? formik.errors.password ? <div className={classes.showInputError}></div> : formik.errors.conPassword ?<div className={classes.showInputPending}></div> : <div className={classes.showInputSuccess}></div> : null}
        {/* {formik.errors.password ? <div>{formik.errors.password}</div> : null} */}
        </div>
        <div className={classes.inputContainer}>
        <Input
            id="conPassword"
            name="conPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.conPassword}
            placeholder="Confirm Password"
        />
          {formik.values.conPassword.length > 0 ? formik.errors.password ? <div className={classes.showInputError}></div> : formik.errors.conPassword ?<div className={classes.showInputPending}></div> : <div className={classes.showInputSuccess}></div> : null}
          </div>  
        </div>  
           <div className={classes.signInBtn}>
          <button type="submit">Sign Up</button>
        </div>
      </Form>
      <div className={classes.signCallAction}><p>Already have an account? <span onClick={handleFlip}>Login here</span></p></div>
      <div className={classes.orHeading}><p>or</p></div>
        <div className={classes.googleFbSignup}>
        <div className={classes.googleSignup}>
            <Button className={classes.googleSignIn} color='' size="lg" active>Google</Button>
        </div>
        <div className={classes.fbSignup}>
            <Button className={classes.fbSignIn} color='' size="lg" active>Facebook</Button>
        </div>
      </div>
    </div>  
  );
};

export default React.memo(SignupForm);