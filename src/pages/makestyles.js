import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "green",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "purple",
      fontSize: 25,
      transition: "all ease-in-out",
    },
  },
  title: {
    color: "violet",
    fontSize: 20,
    "&:hover": {
      color: "red",
      fontSize: 25,
    },
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default useStyles;
