import React, { Component } from 'react';
import Base from '../base_outline/base';
import * as ConstClass from './const.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  createAuthUserWithEmailAndPassword,
  auth,
} from '../../common/services/db/auth';

const logo = ConstClass.LOGO;
const slogan1 = ConstClass.SLOGAN1;
const slogan2 = ConstClass.SLOGAN2;
const slogan3 = ConstClass.SLOGAN3;
const slogan_sub1 = ConstClass.SLOGAN_SUB1;
const slogan_sub2 = ConstClass.SLOGAN_SUB2;
const bg_color = ConstClass.BG_COLOR;
const slogan_color = ConstClass.SLOGAN_COLOR;
const white = ConstClass.WHITE;
const theme = createTheme();

const Item = styled(Paper)(({ themeBorder }) => ({
  backgroundColor: bg_color,
  ...theme.typography.body2,
  padding: theme.spacing(1),

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SignUp = () => {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    const temp = event.target.value;
    setRole(temp);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let additionData = {
      role: role,
      username: 'username add',
    };
    await createAuthUserWithEmailAndPassword(
      data.get('email'),
      data.get('password'),
      additionData,
    );

    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirm_password: data.get('confirm_password'),
      role: role,
    });

    const email = data.get('email');
    const password = data.get('password');
    const confirm_password = data.get('confirm_password');
  };

  return (
    <div style={{ marginTop: '15px', backgroundColor: '#FFF8F8' }}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2} columns={16} sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid item xs={10}>
            <Item
              sx={{
                boxShadow: 0,
              }}
            >
              <Box
                sx={{
                  boxShadow: 0,
                  display: 'flex',
                  alignItems: 'flex-middle',
                  flexDirection: 'column',
                  p: 1,
                  m: 1,
                  bgcolor: bg_color,
                  borderRadius: 50,
                }}
              >
                <Item sx={{ width: 'auto', boxShadow: 0 }}>
                  <img src={logo} style={{ width: '30%', height: '30%' }} />
                </Item>
                <Item
                  sx={{
                    color: slogan_color,
                    fontWeight: 900,
                    fontSize: '300%',
                    boxShadow: 0,
                  }}
                >
                  <div> {slogan1}</div>
                  <div> {slogan2}</div>
                  <div> {slogan3}</div>
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  <div> {slogan_sub1}</div>
                  <div> {slogan_sub2}</div>
                </Item>
              </Box>
            </Item>
          </Grid>

          {/* `````````````````````````````````````SIGN IN`````````````````````````````````````````````````````` */}

          <Grid item xs={6}>
            <Item
              sx={{
                display: 'flex',
                alignItems: 'flex-middle',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: white,
              }}
            >
              <div>
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Sign Up
                      </Typography>
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="confirm_password"
                          label="Confirm Password"
                          type="password"
                          id="confirm_password"
                        />

                        <FormControl fullWidth sx={{ mt: 1 }}>
                          <InputLabel id="role">Role</InputLabel>
                          <Select
                            labelId="role"
                            id="role"
                            value={role}
                            label="role"
                            onChange={handleChange}
                          >
                            <MenuItem value={'invester'}>Invester</MenuItem>
                            <MenuItem value={'developer'}>Developer</MenuItem>
                            <MenuItem value={'product_manager'}>
                              Product Manager
                            </MenuItem>
                            <MenuItem value={'designer'}>Designer</MenuItem>
                          </Select>
                        </FormControl>

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign Up
                        </Button>

                        <Grid container>
                          <Grid item>
                            <Link href="/sign_in" variant="body2">
                              {'Already have an account? Sign In'}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
             
    </div>
  );
};

export default SignUp;
