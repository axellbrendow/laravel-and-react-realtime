import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { echo } from "../../services/laravelEcho";

import Message from "../Message";

const Container = styled.div`
  text-align: center;
`;

export default function MessagesList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    echo.channel("received-messages").listen("SendMessage", message => {
      setMessages(oldMessages => [...oldMessages, message]);
    });

    return () => {
      echo.channel("received-messages").stopListening("SendMessage");
    };
  }, []);

  return (
    <Container>
      {messages.length === 0 ? "No messages yet" : messages.map(Message)}
    </Container>
  );
}
