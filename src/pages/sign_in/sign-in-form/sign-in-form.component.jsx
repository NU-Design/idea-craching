import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormInput from '../form-input/input.component';
import Button from '../button/button.component';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
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
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInForm;
