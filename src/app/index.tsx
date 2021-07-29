import React from "react";
import { Container, Stack } from "@chakra-ui/react";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Navbar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
