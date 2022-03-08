import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import NoteCard from "../component/NoteCard";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  const breakPoints = {
    default: 3,
    1100: 2,
    768: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {users.map((user) => (
          <div item key={user.id}>
            <NoteCard notes={user} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
