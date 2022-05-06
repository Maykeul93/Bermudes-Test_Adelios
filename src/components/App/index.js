import './styles.scss';
import Header from '../Header'
import Content from '../Content'
//import from redux
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//import actions 
import { setData } from 'src/actions/data';
//import api
import api from 'src/api'
function App() {
  
  const dispatch = useDispatch()
  // function to fetch data
  const data = useSelector((state)=> state.data.data)
  const getData = () => { 
    fetch(api
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
  return (
      <div className="App">
        <Header />
        <Content data={data} />
      </div>
  );
}

export default App;
