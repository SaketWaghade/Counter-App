// import logo from './logo.svg';
// import './App.css';
// import about from './about';
// import usestate from './usestate';
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
//     </div>,
//     // <usestate />
//     <about />
//   );
// }

// export default App;
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello React App 🚀</h1>
      <Counter />
    </div>
  );
}

export default App;
