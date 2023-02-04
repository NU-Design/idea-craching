// import StartFunctionOnClick from "./on_click";



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <Avatar alt="avartar image" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png" />
        }
        
        title="@username"
        subheader="comment content"
      />

      <CardMedia
        component={props.isImage === true ? "img" : "iframe"}
        height="194"
        //image="https://c8.alamy.com/comp/HT2GEG/1995-mitsubishi-lancer-evo-3-artist-unknown-HT2GEG.jpg"
        image="https://www.youtube.com/embed/ES--j0LOtaQ"
        alt="alt picture text"
      />
      

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is the article content
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
          sx={{color:red[500]}}/>
        </IconButton>
        <p>like:123</p>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            222
          </Typography>

          <Typography>
            333
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}