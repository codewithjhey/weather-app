import "./App.css"
import NavBar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "semantic-ui-css/semantic.min.css"
import Main from "./components/Main"
import { Col, Row } from "react-bootstrap"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={12}>
          <NavBar subtitle="Find a forecast!" />
          <Main />
        </Col>
      </Row>
    </div>
  )
}

export default App
