import Header from '../Header'
import Content from '../Content'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles.scss';
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
