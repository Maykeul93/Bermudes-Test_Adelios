import './styles.scss';
import Header from '../Header'
import Content from '../Content'
import { useEffect, useState } from 'react';

function App() {
  
  //set data
  const [data, setData] = useState([])

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
      setData(data);
    });
  }

  //call the fetch data function 
  useEffect(()=>{
    getData()
  },[])

  return (
      <div className="App">
        <Header />
        <Content data={data} />
      </div>
  );
}

export default App;
