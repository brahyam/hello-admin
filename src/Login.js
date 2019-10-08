import React from 'react';
import { Login, LoginForm } from 'ra-ui-materialui';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  login: {
    main: {
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?books,computers)',
    },
    card: {
      padding: '5px 0 15px 0',
    },
  },
  form: {
    button: {
      height: '3em',
    },
  },
  registration: {
    textAlign: 'center',
    display: 'block',
  },
};

const LoginWithRegistrationForm = withStyles(styles)(({ classes, ...props }) => (
  <div>
    <LoginForm {...props}/>
    <Link className={classes.registration} to={{pathname: "/registration"}} >Registration</Link>
  </div>
));

const LoginFormWithStyles = withStyles(styles.form)(LoginWithRegistrationForm);

const FinalLogin = (props) => (
  <Login loginForm={<LoginFormWithStyles />} {...props} />
);

export default withStyles(styles.login)(FinalLogin);
