import './styles.scss';
import Header from '../Header'
import Content from '../Content'
//import from redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
//import actions 
import { setData } from '../../actions/data';
//import redux store
import store from 'src/store';

function App() {
  
  const dispatch = useDispatch()
  // function to fetch data
  const getData=()=>{
  fetch('sampleProduits.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(setData(data))
    });
  }

  //call the fetch data function 
  useEffect(()=>{
    getData()
  },[])
  const data = store.getState().data.data
  console.log("data",data)
  return (
      <div className="App">
        <Header />
        <Content data={data} />
      </div>
  );
}

export default App;
