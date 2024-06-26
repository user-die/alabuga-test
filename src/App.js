import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import "./global.css";

function App() {
  return (
    <>
      <Nav />
      <Header count={12} />
      <Container />
    </>
  );
}

export default App;
