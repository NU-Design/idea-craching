import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { signOutUser, auth } from '../../common/services/db/auth';
import { async } from '../../common/utils/firebase/firebase.util';
import { GetUserbyId } from '../../common/services/db/users';

const pages = ['HOME', 'IDEA CHAIN', 'ABOUT US'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemUser = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1976d2' : '#1976d2',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [username, setUsername] = React.useState('');

  useEffect(() => {
    const uid = auth.currentUser.uid;
    console.log('uid', uid);
    console.log('uid', uid);

    const fetchdata = async () => {
      console.log('in data');
      const result = await GetUserbyId(uid);
      console.log(result.username);
      setUsername(result.username);
    };
    

    fetchdata();
    fetchdata();

    console.log('uusr', username);
  }, []);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 500,
              // letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Idea Crashing
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: 'flex-end',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={10}>
                    <Item
                      sx={{
                        boxShadow: 0,
                      }}
                    >
                      <Link
                        style={{
                          color: '"#FFF8F8"',
                          textDecoration: 0,
                          // paddingLeft: '20px',
                        }}
                        to="/home"
                      >
                        HOME
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={10}>
                    <Item
                      sx={{
                        boxShadow: 0,
                      }}
                    >
                      <Link
                        style={{
                          color: '"#FFF8F8"',
                          textDecoration: 0,
                          // paddingLeft: '20px',
                        }}
                        to="/idea_chain"
                      >
                        IDEA CHAIN
                      </Link>
                    </Item>
                  </Grid>

                  <Grid item xs={10}>
                    <Item
                      sx={{
                        boxShadow: 0,
                      }}
                    >
                      <Link
                        style={{
                          color: '"#FFF8F8"',
                          textDecoration: 0,
                          // paddingLeft: '20px',
                        }}
                        to="/about_us"
                      >
                        ABOUT US
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Idea Crashing
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
              style={{ color: 'white', textDecoration: 0, paddingLeft: '20px' }}
              to="/home"
            >
              HOME
            </Link>
            <Link
              style={{ color: 'white', textDecoration: 0, paddingLeft: '20px' }}
              to="/idea_chain"
            >
              IDEA CHAIN
            </Link>
            <Link
              style={{ color: 'white', textDecoration: 0, paddingLeft: '20px' }}
              to="/about_us"
            >
              ABOUT US
            </Link>

            <Link
              style={{ color: 'white', textDecoration: 0, paddingLeft: '20px' }}
              to="/hjx"
            >
              hjx
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ItemUser
                  sx={{
                    boxShadow: 0,
                    color: 'white',
                  }}
                >
                  <h2>{username}</h2>
                </ItemUser>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Item
                      sx={{
                        boxShadow: 0,
                      }}
                    >
                      <Link
                        style={{
                          color: 'black',
                          textDecoration: 0,
                        }}
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={10}>
                    <Item
                      sx={{
                        boxShadow: 0,
                      }}
                    >
                      <Link
                        style={{
                          color: 'black',
                          textDecoration: 0,
                        }}
                        to="/sign_in"
                        onClick={async () => {
                          await signOutUser();
                        }}
                      >
                        Log Out
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Box>

              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
