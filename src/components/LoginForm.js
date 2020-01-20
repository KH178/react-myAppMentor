import React from 'react';
import { useFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createUseStyles } from 'react-jss';

import PersonHead from '../images/personHead.png'
import LockIcon from '../images/LockIcon.png'

const useStyles = createUseStyles({
  mainHeading:{
    textAlign: 'center',
    color:'#4164aa',
    fontFamily: 'Trocchi',
    fontSize: '1.8rem',
    paddingBottom: '0.2rem',
    marginTop:'1.5rem',
    position:'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '0.1rem',
      display: 'block',
      backgroundColor: '#eaeaea'
  }
  },
    formContainer: style=>({
        maxWidth: '30rem',
        margin: 'auto'
    }),
    signLogForm:{
      width: '80%',
      margin: 'auto'
    },
    inputContainer:{
      display: 'flex',
      border: '1px solid #505050',
      borderRadius: '5px',
      margin: '2rem 0',
      position:'relative',
      '& input':{
        border: 'none',
        padding: '1.5rem 1rem',
        fontFamily: 'Trocchi',
        color: '#8d8897',
        '&::Placeholder':{
          fontSize: '24px',
          color:'red'
        }
      },
    },
    inputIconimg:{
      margin: 'auto',
      padding: '0rem 0.7rem',
      display: 'flex',
      position: 'relative',
      '& img':{
        width: '1.5rem',
        height: '1.5rem',
        justifyContent:'center'
      },
    },
    signInBtn:{
      width:'100%',
      backgroundColor: '#355d98',
      borderRadius: '7px',
      overflow: 'hidden',
      '& button':{
        width: '100%',
        background: 'inherit',
        color: '#fffefe',
        padding: '0.4rem',
        fontSize: '1.3rem',
        cursor: 'pointer',
        outline: 'inherit',
        border: '0',
        fontFamily: 'Merriweather'
      }
    }
})
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.loginPassword) {
    errors.lastName = 'Required';
  } else if (values.loginPassword.length < 6) {
    errors.loginPassword = 'Password must be greater then 6 words';
  }

  if (!values.loginEmail) {
    errors.loginEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginEmail)) {
    errors.loginEmail = 'Invalid email address';
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
      loginPassword: '',
      loginEmail: '',
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
        <p>Sign In</p>
      </div>
        <Form onSubmit={formik.handleSubmit} className={classes.signLogForm}>
        {/* <Label htmlFor="loginEmail">Email Address</Label> */}
        <div className={classes.inputContainer}>
          <div className={classes.inputIconimg}>
            <img src={PersonHead} alt="icon"/>
          </div>
          <Input
              id="loginEmail"
              name="loginEmail"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.loginEmail}
              placeholder="Email"
          />
          {formik.errors.loginEmail ? <div>{formik.errors.loginEmail}</div> : null}
        </div>
        {/* <Label htmlFor="loginPassword">Password</Label> */}
        <div className={classes.inputContainer}>
          <div className={classes.inputIconimg}>
            <img src={LockIcon} alt="icon"/>
          </div>
        <Input
            id="loginPassword"
            name="loginPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.loginPassword}
            placeholder="Password"
        />
        {formik.errors.loginPassword ? <div>{formik.errors.loginPassword}</div> : null}
        </div>
        <div className={classes.signInBtn}>
          <button type="submit">Sign In</button>
        </div>
        </Form>
    </div>  
  );
};

export default LoginForm;