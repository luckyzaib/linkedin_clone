import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import image from '../../../images/profile.jpeg'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small :{
    width: theme.spacing(9),
    height: theme.spacing(9),

  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Profile" src={image} className={classes.large} />
    </div>
  );
}
