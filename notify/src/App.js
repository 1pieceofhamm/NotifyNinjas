import logo from './logo.png';
import './App.css';
import { Component } from 'react';
import Home from './components/home';
import Welcome from './components/Welcome';

class App extends Component{
  render() {
    return (
      <div className="App"> 
        <Home></Home>
        <Welcome />
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
