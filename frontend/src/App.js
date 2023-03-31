import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreatStudent from './components/create-student';
import EditStudent from './components/edit-student';
import StudentList from './components/student-list';
import SearchStudent from './components/search-student';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
      <div className="App">
        <NavBar bg="info" >
          <Container>
            <NavBar.Brand>
              <Link to={"/create-student"} className = "nav-link">
                MERN STACK CRUD
              </Link>
            </NavBar.Brand>
            <Nav className='justify-content-end'>
              <Nav>
                <Link to={"/create-student"} className = "nav-link">
                  Create Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className = "nav-link">
                  Student List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/search"} className = "nav-link">
                Serach 
                </Link>
              </Nav>
            </Nav>
          </Container>
        </NavBar>
        <Container>
          <Row>
            <Col md = "12">
              <div className='warpper'>
                <Routes>
                  <Route exact path="/" element = {<CreatStudent/>}> </Route>
                  <Route path="/create-student" element = {<CreatStudent/>}> </Route>
                  <Route path="/edit-student/:id" element = {<EditStudent/>}> </Route>
                  <Route path="/student-list" element = {<StudentList/>}> </Route>
                  <Route path="/search" element = {<SearchStudent/>}> </Route>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
     
      </div>
      
  );
}

export default App;
