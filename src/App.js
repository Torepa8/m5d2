import MyNav from "./component/MyNav"
import MyFooter from "./component/MyFooter"
import Titolo from "./component/Welcome"
import AllTheBooks from "./component/AllTheBooks"
import './App.css';
import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react";
import BookSelected from "./context/context"
import CommentArea from "./component/CommentArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound";
import BookDetails from "./component/BookDetails";


function App() {
  const [userSearch, setUserSearch] = useState('')
  const [selected, setSelected] = useState('')

  return (
    <>
      <BookSelected.Provider value={{ selected, setSelected }}>
        <BrowserRouter>
          <MyNav userSearch={userSearch} setUserSearch={setUserSearch} />
          <Container>
            <Routes>
              <Route path="/" element={<Titolo />}/>
            </Routes>
            <Row>
              <Col className="col-6">
                
                    <Routes>
                      <Route path="/" element={<AllTheBooks userSearch={userSearch} />} />
                      <Route path="/bookdetails/:asin" element={<BookDetails />}/>
                      {/* <AllTheBooks userSearch={userSearch} /> */}
                      <Route path="/*" element={<NotFound />} />
                    </Routes>
                  
              </Col>
              <Col className="col-6">
                {/* qui commenti del libro selezionato */}
                <Routes>
                  {/* <CommentArea /> */}
                  <Route path="/" element={<CommentArea />}>
                  </Route>
                </Routes>
              </Col>
            </Row>
          </Container>
          <MyFooter />
        </BrowserRouter >
      </BookSelected.Provider>
    </>
  );
}

export default App;
