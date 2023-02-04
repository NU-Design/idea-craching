import React, { Component } from 'react';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
   as this is a much longer line than what the container can support. `;

const Editor = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', width: '100%', px: 3 }}>
      <Grid container wrap="nowrap" sx={{ width: 'auto' }} spacing={2}>
        <Grid item xs={16}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            temporibus perspiciatis rem, labore repellendus quia quibusdam
            dignissimos delectus tenetur recusandae aperiam dolorum nihil
            asperiores incidunt laudantium maxime. Magni, perspiciatis eum?
          </h1>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            iure quam, nulla, iste quasi facilis similique autem, harum velit
            deserunt aperiam cumque nam? Dolore commodi nam maxime, quam facilis
            aliquid!
          </h1>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae minima dolor dolorum repellat provident eius, non
            blanditiis veritatis dolores nihil ducimus iusto ut incidunt eaque
            eos reprehenderit nulla labore consequatur.
          </h1>
        </Grid>
      </Grid>
      <Grid container wrap="nowrap" spacing={2} sx={{ height: '100vh' }}>
        <Grid item xs>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} sx={{ height: '100vh' }}>
              <Grid item xs={8}>
                <Item>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus inventore sequi officia quaerat esse reiciendis
                  fuga, molestiae alias non doloremque modi nesciunt eius
                  praesentium vero quibusdam molestias placeat? Quidem, unde!
                  Illo, voluptas beatae fugiat nemo eligendi perspiciatis quia
                  recusandae deserunt voluptatum tenetur consequuntur sapiente
                  doloribus reprehenderit unde quos omnis quae qui nihil, quod
                  temporibus sit nisi veritatis! Veritatis, debitis laboriosam.
                  Culpa provident aliquam magnam laudantium atque modi vero vel
                  ipsa unde illo rem quod, suscipit, doloremque architecto? Ut,
                  eveniet repellat a perferendis soluta dicta assumenda rerum
                  corporis odio voluptatibus suscipit. Quos laboriosam magnam
                  illo nam sed! Doloribus facere dolore alias iusto animi
                  officiis eos. Ullam, deleniti aliquid. Aliquam minus error
                  libero quisquam esse non possimus ea, quos, similique, minima
                  illum! At fuga atque, quasi quae facilis repudiandae eveniet.
                  Tempora, praesentium modi sunt aliquam ratione doloremque
                  error, ex sed fuga nemo minima! Tempora architecto blanditiis
                  quaerat dolores similique vel officia recusandae. Unde labore
                  repellendus quos, vero molestias quia sit, sequi cum ducimus
                  quibusdam quae excepturi libero laboriosam similique sunt quis
                  aspernatur commodi! Eos ad minima harum, vero reprehenderit
                  nobis a autem! Obcaecati earum sapiente dolor hic excepturi
                  corporis quis. Iure eius tempora totam. Minus officia ipsam,
                  rem optio voluptatum molestias expedita provident aut sint,
                  laboriosam qui facilis sit odio assumenda. Laudantium!
                  Officiis voluptatibus amet recusandae provident quasi maxime
                  eaque obcaecati sit odit illo omnis illum debitis inventore
                  assumenda ipsum, mollitia quod suscipit officia rerum ducimus
                  laborum adipisci, unde quia. Ratione, dolorum. Eos quas
                  dolorum recusandae sed obcaecati repellendus natus commodi
                  cumque ad maxime, ratione, minima voluptatem voluptatibus quo
                  nisi sequi amet consequatur magni? Quae voluptas voluptatibus
                  magnam vero mollitia ratione ea. Fugiat laboriosam aliquid
                  doloremque dignissimos. Et, velit modi! Quo beatae asperiores
                  omnis veniam amet, nisi quod animi esse iste inventore soluta
                  excepturi dolores quos repudiandae. Tempore quibusdam quaerat
                  inventore laudantium.
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat facilis alias reprehenderit labore debitis, corrupti
                  obcaecati blanditiis neque voluptates nesciunt illo ipsam
                  laudantium possimus delectus cupiditate at cum accusantium.
                  Quaerat? Voluptatem eligendi ex aliquid quasi facere at aut
                  similique tenetur accusamus iusto! Tempora sed odit error
                  nobis sapiente? Vitae error iste natus facilis consequatur
                  quis dolores est fugiat officiis nobis. Eveniet soluta nihil
                  molestias ipsum mollitia odio repudiandae ducimus aliquid
                  unde? Dolorum ratione exercitationem quis illum quibusdam non
                  ab sequi aspernatur. Fuga perferendis amet nam quaerat harum?
                  Fuga, incidunt? Magni. Eligendi dolorum veniam iure voluptatum
                  obcaecati nesciunt placeat quam nostrum ipsa maiores voluptas
                  expedita ullam repellat sed odio porro minima, laborum dolor
                  repellendus tempore sapiente nulla. In ab consequuntur unde.
                  Et laboriosam rerum minima reprehenderit quasi debitis nemo
                  voluptatum, commodi illum temporibus praesentium, unde error
                  itaque architecto, voluptas odit magnam ipsum! Illum earum
                  magnam ipsum quae officiis rem magni iure!
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Editor;
