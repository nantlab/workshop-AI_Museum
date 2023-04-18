import Card from "@mui/material/Card";
import {ThemeProvider} from "@mui/material/styles";
import useStore from "./store/store";
import Header from "./components/Header";
import BasicModal from "./components/Modal";

import styled from "@emotion/styled";
import { theme } from "./theme.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(228, 228, 228);
`;
const Content = styled.div`
  margin: 24px;
`;

function App() {
  const items = useStore((state) => state.items);
  const setCurrentItem = useStore((state) => state.setCurrentItem);

  return (
    <Container className="App">
      <ThemeProvider theme={theme}>
        <Header></Header>
        <BasicModal></BasicModal>
        <Content>
          {items.map((item, index) => {
            return (
              <Card
                sx={{ margin: "16px" }}
                key={`item-${index}-${item.title}`}
                onClick={() => {
                  setCurrentItem(item);
                }}
              >
                <img src={item.image} alt="" width={"100px"} />
              </Card>
            );
          })}
        </Content>
      </ThemeProvider>
    </Container>
  );
}

export default App;
