import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"
import { Flex, Text, Button, Container, Box } from "@radix-ui/themes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Container size="4">
        <Flex direction={"column"}>
          <Text
            size="9"
            weight={"bold"}
            mb={"2"}
            mt={"9"}
            color="red-10"
            className={"Heading"}
          >
           Monthly Task Accomplisher
          </Text>

          <Box>
            <Button
              variant="classic"
              className={"button"}
              color={"red"}
              loading={false}
            >
              Know me
              {/* <DoubleArrowRightIcon/> */}
            </Button>
          </Box>
        </Flex>
      </Container>

    </>
  );
}

export default App;
