import React, { Component } from 'react';
import Base from '../base_outline/base';
import * as ConstClass from './const.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonMailto from './email/email.component';

const logo = ConstClass.LOGO;
const pic = ConstClass.PIC;
const pho1 = ConstClass.Pho1;
const pho2 = ConstClass.Pho2;
const pho3 = ConstClass.Pho3;
const pho4 = ConstClass.Pho4;
const pho5 = ConstClass.Pho5;
const pho6 = ConstClass.Pho6;

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

const AboutUs = () => {
  //state = {};

  return (
    <Base>
      <Grid>
        <Item
          sx={{
            color: '#000000',
            fontWeight: 800,
            fontSize: '250%',
            boxShadow: 0,
          }}
        >
          <div> {'About US'}</div>
        </Item>

        <Item
          sx={{
            boxShadow: 0,
            fontSize: '100%',
          }}
        >
          <div>
            <p>
              As a high-efficient, well-functioned team, we work together
              seamlessly to achieve our goals.
            </p>
            <p>
              We consistently produce high-quality work, regularly exceeding
              expectations and achieving our objectives in a timely manner.
            </p>
            <p>
              Together, we make a winning combination, driven by our commitment
              to excellence.
            </p>
          </div>
        </Item>
      </Grid>
      <Box
        sx={{
          marginTop: 4,
        }}
      ></Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6}>
            <Item
              sx={{
                color: '#000000',
                fontWeight: 800,
                fontSize: '250%',
                boxShadow: 0,
              }}
            >
              <div> {'Our Team'}</div>
            </Item>

            <Item
              sx={{
                boxShadow: 0,
                fontSize: '100%',
              }}
            >
              <div>
                <p>
                  Our team is a diverse and dynamic group of individuals, each
                  with their own unique background, interests, and skills.
                </p>
                <p>
                  Despite our differences in age and background, we are all
                  united by a common passion: coding.
                </p>
                <p>
                  Whether working on a new project or facing a challenging
                  problem, we work together to achieve our goals and make the
                  most of our skills.
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <img src={pho5} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Jinxin Hu </h3>
              <ButtonMailto
                label="hu.jinx@northeastern.edu"
                mailto="hu.jinx@northeastern.edu"
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <img src={pho2} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Wenqiang Hu </h3>
              <ButtonMailto
                label="hu.wenqi@northeastern.edu"
                mailto="hu.wenqi@northeastern.edu"
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <img src={pic} style={{ width: '35%', height: '45%' }} />
            </Item>
          </Grid>
          <Grid item xs={3}>
            {/* 5 */}
            <Item>
              <img src={pho1} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Siting Tang </h3>
              <ButtonMailto
                label="tang.sit@northeastern.edu"
                mailto="tang.sit@northeastern.edu"
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <img src={pho3} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Hantao Zhu </h3>
              <ButtonMailto
                label="zhu.taoh@northeastern.edu"
                mailto="zhu.taoh@northeastern.edu"
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                boxShadow: 0,
                fontSize: '100%',
              }}
            >
              <div>
                <p>
                  We strive to work together to accomplish our coding projects,
                  combining our unique perspectives and skill sets to create
                  innovative solutions.
                </p>
                <p>
                  Each of us has a clear understanding of our individual roles
                  and responsibilities, and we are fully committed to the
                  success of the team.
                </p>
                <p>
                  Our positive attitude and strong focus on teamwork creates a
                  productive and enjoyable work environment.
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <img src={pho4} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Dexian Chen </h3>
              <ButtonMailto
                label="chen.dex@northeastern.edu"
                mailto="chen.dex@northeastern.edu"
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <img src={pho6} style={{ width: '33%', height: '33%' }} />
            </Item>
            <Item>
              <h3> Zhenghao Lin </h3>
              <ButtonMailto
                label="lin.zheng@northeastern.edu"
                mailto="lin.zheng@northeastern.edu"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Base>
  );
};

export default AboutUs;
