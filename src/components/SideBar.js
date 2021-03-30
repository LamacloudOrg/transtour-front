import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
   // backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetList() {
  const classes = useStyles();

  return (
    <div style= {{ width: "100%"}}>
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="bouchers" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="viajes" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="notificaciones" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="logout" />
      </ListItem>
    </List>
    </div>
  );
}