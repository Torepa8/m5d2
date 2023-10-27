import MyNav from "./component/MyNav"
import MyFooter from "./component/MyFooter"
import Titolo from "./component/Welcome"
import AllTheBooks from "./component/AllTheBooks"
import './App.css';
import { Container, Row } from "react-bootstrap"

function App() {
  return (
    <main>
      <MyNav />
      <Container className="mh-50">
        <Titolo />
        <Row>
          <AllTheBooks />
        </Row>
      </Container>
      <MyFooter />
    </main>
  );
}

export default App;
