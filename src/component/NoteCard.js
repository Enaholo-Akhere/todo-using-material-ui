import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { orange, pink, blue, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (notes) => {
      if (notes.category === "work") {
        return green[700];
      }
      if (notes.category === "todos") {
        return pink[500];
      }
      if (notes.category === "money") {
        return blue[500];
      }
      if (notes.category === "reminders") {
        return orange[500];
      }
      return red[500];
    },
  },
});

const NoteCard = ({ notes, handleDelete }) => {
  const classes = useStyles(notes);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {notes.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(notes.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={notes.title}
          subheader={notes.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {notes.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
