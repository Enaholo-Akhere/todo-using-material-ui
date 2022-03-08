import {
  makeStyles,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { format } from "date-fns";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    aris: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const menuBar = [
    {
      text: "My Notes",
      path: "/",
      icon: <SubjectOutlined color="secondary" />,
    },
    {
      text: "Create Notes",
      path: "/create",
      icon: <AddCircleOutlined color="secondary" />,
    },
  ];
  return (
    <div className={classes.root}>
      {/* appBar  */}
      <AppBar className={classes.appbar} color="inherit" elevation={0}>
        <Toolbar>
          <Typography className={classes.aris}>
            {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Enaholo</Typography>
          <Avatar src="/avatar.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* drawer component */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography className={classes.title} variant="h5">
            Ena's Note
          </Typography>
        </div>

        {/* list item */}

        <List>
          {menuBar.map((menu, index) => (
            <ListItem
              button
              key={index}
              onClick={() => history.push(menu.path)}
              className={
                location.pathname === menu.path ? classes.active : null
              }
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
