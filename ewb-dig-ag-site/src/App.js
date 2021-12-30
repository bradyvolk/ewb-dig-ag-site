import tanzania_drone_pic3 from './tanzania_drone_pic3.jpg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <span>Insert dig ag site here!</span>
      {/* <img src={tanzania_drone_pic3} alt="tanzania from drone"></img> */}
      <Hello name="Dig Ag"></Hello>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bootstrap Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            This is the body of accordian item #1.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bootstrap Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  );
}

export default App;
