import { Route, Router, Routes } from "@solidjs/router";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default App;
