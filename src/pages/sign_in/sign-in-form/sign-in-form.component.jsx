import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import FormInput from '../form-input/input.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import './sign-in-form.styles.scss';
import {
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../../common/services/db/auth';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res === 1);
      // eslint-disable-next-line react-hooks/rules-of-hooks

      if (res === 1) {
        //跳转
        navigate('/home');
      }
      // await signOutUser();
      // console.log('sign out');
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 10,
          }}
        ></Box>

        <Typography align="center" component="h1" variant="h5">
          Sign in
        </Typography>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Box
          sx={{
            marginTop: 8,
          }}
        ></Box>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Box
          sx={{
            marginTop: 6,
          }}
        ></Box>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>

        <Box
          sx={{
            marginTop: 3,
          }}
        ></Box>
      </form>

      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/sign_up" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInForm;
