import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as ConstClass from './const.js'
import { styled } from '@mui/material/styles';


const logo = ConstClass.LOGO;
const slogan = ConstClass.SLOGAN;
const slogan_sub1 = ConstClass.SLOGAN_SUB1;
const slogan_sub2 = ConstClass.SLOGAN_SUB2;
const bg_color = ConstClass.BG_COLOR;
const slogan_color = ConstClass.SLOGAN_COLOR;
const white = ConstClass.WHITE;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: bg_color,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const theme = createTheme();

const themeLight = createTheme({
  palette: {
    background: {
      default: '#FFF8F8',
    },
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={themeLight}>
      <Grid container component="main" columns={16} sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            //backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}

        <Grid item xs={10}>
          <Item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-middle',
                flexDirection: 'column',
                // p: 1,
                // m: 1,
                bgcolor: bg_color,
                borderRadius: 50,
              }}
            >
              <Item sx={{ width: 'auto' }}>
                <img src={logo} style={{ width: '30%', height: '30%' }} />
              </Item>
              <Item
                sx={{
                  color: slogan_color,
                  fontWeight: 900,
                  fontSize: '300%',
                }}
              >
                <div> {slogan}</div>
              </Item>
              <Item>
                <div> {slogan_sub1}</div>
                <div> {slogan_sub2}</div>
              </Item>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
              noValidate
              onSubmit={handleSubmit}
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
                control={<Checkbox value="remember" color="primary" />}
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
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
