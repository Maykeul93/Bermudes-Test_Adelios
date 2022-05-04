import './styles.scss';
import Header from '../Header'
import Content from '../Content'

import {
  BrowserRouter as Router,
} from "react-router-dom";

import data from '../../data/sampleProduits.json'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content data={data} />
      </div>
    </Router>
  );
}

export default App;
