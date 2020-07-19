import React from "react";
import styled from "styled-components";

import SendMessageForm from "./components/SendMessageForm";
import MessagesList from "./components/MessagesList";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function App() {
  return (
    <Container>
      <SendMessageForm />
      <MessagesList />
    </Container>
  );
}
