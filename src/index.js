import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './pages/Menu/menu';
import AssinaturaNewsletter from './pages/Assinatura/assinaturaNewsletter';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <AssinaturaNewsletter />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// export default function HomePage() {
//   return (
//     <main>
//       <Menu />
//       <AssinaturaNewsletter />
//     </main>
//   );
// };