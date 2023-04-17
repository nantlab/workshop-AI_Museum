import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import useStore from "./store/store";
import Header from "./components/Header";

function App() {
  const items = useStore((state) => state.items);

  return (
    <div className="App">
      <Header></Header>
      {items.map((item, index) => {
        return (
          <div key={`item-${index}-${item.title}`}>
            {item.title}
            <img src={item.image} alt="" width={"100px"} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
