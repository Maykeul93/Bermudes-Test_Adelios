import './styles.scss';
import Header from '../Header'
import Content from '../Content'



import data from '../../data/sampleProduits.json'

function App() {
  return (
      <div className="App">
        <Header />
        <Content data={data} />
      </div>
  );
}

export default App;
