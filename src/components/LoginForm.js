import React from 'react';
import { useFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createUseStyles } from 'react-jss';
import useStyles from '../styles/LoginComponentStyle'

import PersonHead from '../images/personHead.png'
import LockIcon from '../images/LockIcon.png'

// const useStyles = createUseStyles({
//   mainHeading: {
//     textAlign: 'center',
//     color: '#4164aa',
//     fontFamily: 'Trocchi',
//     fontSize: '1.6rem',
//     paddingBottom: '0.2rem',
//     marginTop: '1.5rem',
//     position: 'relative',
//     '&:before': {
//       content: '""',
//       position: 'absolute',
//       bottom: 0,
//       width: '100%',
//       height: '0.1rem',
//       display: 'block',
//       backgroundColor: '#eaeaea'
//     }
//   },
//   formContainer: style => ({
//     maxWidth: '30rem',
//     margin: 'auto'
//   }),
//   signForm: {
//     width: '80%',
//     margin: 'auto'
//   },
//   inputContainer: {
//     display: 'flex',
//     border: '1px solid #505050',
//     borderRadius: '5px',
//     margin: '2rem 0',
//     position: 'relative',
//     overflow: 'hidden',
//     '& input': {
//       border: 'none',
//       padding: '1.5rem 1rem',
//       fontFamily: 'Trocchi',
//       borderLeft: '1px solid #b5b5b5',
//       borderRadius: '0',
//       color: '#8d8897',
//       '&::Placeholder': {
//         fontSize: '1.2rem',
//         letterSpacing: '0.6px'
//       },
//       '&:focus': {
//         boxShadow: 'none',
//         borderLeft: '1px solid #b5b5b5',
//       },
//     },
//   },
//   inputIconimg: {
//     margin: 'auto',
//     padding: '0rem 0.7rem',
//     display: 'flex',
//     position: 'relative',
//     '& img': {
//       width: '1.5rem',
//       height: '1.5rem',
//       justifyContent: 'center'
//     },
//   },
//   signInBtn: {
//     width: '100%',
//     backgroundColor: '#355d98',
//     borderRadius: '7px',
//     overflow: 'hidden',
//     '& button': {
//       width: '100%',
//       background: 'inherit',
//       color: '#fffefe',
//       padding: '0.4rem',
//       fontSize: '1.3rem',
//       cursor: 'pointer',
//       outline: 'inherit',
//       border: '0',
//       fontFamily: 'Merriweather'
//     }
//   },
    
//   forgotPass: {
//     color: '#c53e46',
//     fontFamily: 'Merriweather',
//     width: '80%',
//     margin: '1rem auto',
//     textAlign: 'right',
//     cursor: 'pointer'
//   },
//   signCallAction: {
//     width: '80%',
//     margin: '1.5rem auto',
//     color: '#454141',
//     fontFamily: 'Merriweather',
//     '& p': {
//       fontSize: '1rem',
//       '& span': {
//         fontSize: '1.1rem',
//         color: '#2e9557',
//         cursor: 'pointer'
//       }
//     }
//   },
//   orHeading: {
//     color: '#9a9a9a',
//     fontFamily: 'Merriweather',
//     textAlign: 'center',
//     position: 'relative',
//     '&:before': {
//       content: '""',
//       position: 'absolute',
//       top: '50%',
//       left: '20%',
//       width: '25%',
//       height: '0.1rem',
//       display: 'block',
//       backgroundColor: '#eaeaea'
//     },
//     '&:after': {
//       content: '""',
//       position: 'absolute',
//       top: '50%',
//       right: '20%',
//       width: '25%',
//       height: '0.1rem',
//       display: 'block',
//       backgroundColor: '#eaeaea'
//     }
//   },

//   //input error
//   showInputError: {
//     width: '10px',
//     backgroundColor: '#c53e46',
//     animation: 'rightIndicator 1s'
//   },
//   showInputSuccess: {
//     width: '10px',
//     backgroundColor: '#2e9557',
//     animation: 'rightIndicator 1s'
//   },

//   // googleFBSignIn BTN
//   googleFbSignup: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap'
//   },
//   googleSignIn: {
//     backgroundColor: '#ea4335',
//     color: '#ffffff',
//     width: '11rem',
//     margin: '0.5rem auto',
//     padding: {
//       top: '0.5rem',
//       bottom: '0.5rem',
//     },
//     '&:hover': {
//       color: '#ffffff',
//       '&:focus': {
//         boxShadow: '0'
//       }
//     }
//   },
//   fbSignIn: {
//     backgroundColor: '#4267b2',
//     color: '#ffffff',
//     width: '11rem',
//     margin: '0.5rem auto',
//       padding: {
//         top: '0.5rem',
//         bottom: '0.5rem',
//       },
//       '&:hover': {
//         color: '#ffffff',
//         '&:focus': {
//           boxShadow: '0'
//         }
//       }
//   },
//   '@media screen and (max-width: 768px)': {
//     googleFbSignup: {
//       justifyContent: 'center'
//     }
//   }
// })
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

const LoginForm = ({handleFlip}) => {
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
        <Form onSubmit={formik.handleSubmit} className={classes.signForm}>
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
          {formik.values.loginEmail.length > 0 ? formik.errors.loginEmail ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
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
        {/* {formik.errors.loginPassword ? <div>{formik.errors.loginPassword}</div> : null} */}
        </div>
        <div className={classes.signInBtn}>
          <button type="submit">Sign In</button>
        </div>
      </Form>
      <div className={classes.forgotPass}><p>Forgot Password?</p></div>
      <div className={classes.signCallAction}><p>Don’t have an account? <span onClick={handleFlip}>Get Started!</span></p></div>
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

export default LoginForm;