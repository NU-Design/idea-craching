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


const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


const SignUp = () => {
  //state = {};

    return (
        <Base>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16} sx={{ height: '100vh' }}>
          <CssBaseline />
            <Grid item xs={10}>
              <Item
              sx={{
                
                boxShadow:0,
              }}>
                <Box
                  sx={{
                    boxShadow:0,
                    display: 'flex',
                    alignItems: 'flex-middle',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    bgcolor: bg_color,
                    borderRadius: 50,
                  }}
                >
                  <Item sx={{ width: 'auto', boxShadow:0}}>
                    <img src={logo} style={{ width: '30%', height: '30%' }} />
                  </Item>
                  <Item
                    sx={{
                      color: slogan_color,
                      fontWeight: 900,
                      fontSize: '300%',
                      boxShadow:0,
                    }}
                  >
                    <div> {slogan1}</div>
                    <div> {slogan2}</div>
                    <div> {slogan3}</div>
                  </Item>
                  <Item sx={{
                      boxShadow:0,
                    }}>
                    <div> {slogan_sub1}</div>
                    <div> {slogan_sub2}</div>
                  </Item>
                </Box>
              </Item>
            </Grid>

            {/* `````````````````````````````````````SIGN IN`````````````````````````````````````````````````````` */}

            <Grid item xs={6}>
              <Item sx={{
                    display: 'flex',
                    alignItems: 'flex-middle',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    bgcolor: white,
                    // borderRadius: 50,
                  }}>
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
                          Sign in
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
                            autoComplete="current-password"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Sign In
                          </Button>
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
                        </Box>
                      </Box>
                      
                    </Container>
                  </ThemeProvider>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
        </Base>

    );
}

export default SignUp;
