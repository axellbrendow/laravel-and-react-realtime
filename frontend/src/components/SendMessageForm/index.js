import React, { useState } from "react";
import styled from "styled-components";

import api from "../../services/mainApi";

const Container = styled.div`
  text-align: center;
`;

export default function SendMessageForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    (async () => {
      try {
        await api.post("api/messages", { title, body });
      } catch (error) {
        console.dir(error);
      }
    })();
  };

  return (
    <Container>
      <form onSubmit={onSubmit} method="post">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          name="body"
          id="messageBody"
          cols="60"
          rows="10"
          placeholder="Message"
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
}
