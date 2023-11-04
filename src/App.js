import MyNav from "./component/MyNav"
import MyFooter from "./component/MyFooter"
import Titolo from "./component/Welcome"
import AllTheBooks from "./component/AllTheBooks"
import './App.css';
import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react";
import BookSelected from "./context/context"
import CommentArea from "./component/CommentArea";


function App() {
  const [userSearch, setUserSearch] = useState('')
  const [selected, setSelected] = useState('')

  return (
    <>
      <BookSelected.Provider value={{ selected, setSelected }}>
        <MyNav userSearch={userSearch} setUserSearch={setUserSearch} />
        <Container className="mh-50">
          <Titolo />
          <Row>
            <Col className="col-6">
              <Container>
                <Row>
                  <AllTheBooks userSearch={userSearch} />
                </Row>
              </Container>
              <Col className="col-6">
                <CommentArea />
                {/* qui commenti del libro selezionato */}
              </Col>
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </BookSelected.Provider>
    </>
  );
}

export default App;
