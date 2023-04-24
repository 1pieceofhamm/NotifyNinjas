import logo from './logo.png';
import './App.css';
import { Component } from 'react';
import Home from './components/home';
import Welcome from './components/Welcome';
import NotificationForm from './components/notification';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
    };
    this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
  }

  handleBackgroundChange(color) {
    this.setState({ backgroundColor: color });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.backgroundColor }}> 
        <Home></Home>
        <NotificationForm onBackgroundChange={this.handleBackgroundChange} ></NotificationForm>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
