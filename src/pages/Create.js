import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useStyles from "./makestyles";
import { useHistory } from "react-router-dom";
import {
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsDetails, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const history = useHistory();
  const Classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h2"
        component="h6"
        color="textPrimary"
        align="center"
        gutterBottom
        // className={Classes.title}
      >
        Add Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Title"
          required
          fullWidth
          className={Classes.field}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          variant="outlined"
          label="details"
          required
          fullWidth
          multiline
          rows={4}
          className={Classes.field}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsDetails}
        />
        <FormControl className={Classes.field}>
          <FormLabel>Select Choice</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" label="Money" control={<Radio />} />
            <FormControlLabel value="Todos" label="Todos" control={<Radio />} />
            <FormControlLabel
              value="reminders"
              label="Reminder"
              control={<Radio />}
            />
            <FormControlLabel value="work" label="Work" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          endIcon={<KeyboardArrowRightIcon />}
          //className={Classes.btn}
        >
          Click Me
        </Button>
      </form>
    </Container>
  );
}
