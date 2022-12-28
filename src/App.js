import './App.css';
import {useEffect, useState, useCallback} from 'react'
import axios from 'axios'


const apiURL = 'https://octave-api.sierrawireless.io/v5.0/orangesb/event/s636d2846c1fe893ca3acf014';

const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    "X-Auth-Token": "8ypwg55Yy4EK5lLPTshu6mx3mRMEBFTb",
    "X-Auth-User": "sb_orange"
  }
}) 

function App() {
   const [data, setData] = useState([]);

  useEffect(()=> {
    authAxios.get()
    .then(res =>{
    console.log("Getting data from server", res.data.body)
    setData(res.data.body)
    }) 
    .catch(err => console.log(err))

  }, [])
  
  const array = data.map((data) => {
    let date = new Date(data.creationDate) 
    return (
      <tr>
      <td>{data?.id}</td>
      <td>{data?.elems?.environment?.temperature}</td>
      <td>{date?.toLocaleTimeString()}</td>
      <td>{date?.toLocaleDateString()}</td>
    </tr>

    )
  })

  return (
    <div className="App">
      
      {/* <button onClick={() => fetchData()}> Récupérer la température </button> */}
      {/* {users.map(user => {
        return <p key={user.id}>{user.name}</p>;
      })} */}
      <table>
        <tr>
          <th>id</th>
          <th>Température</th>
          <th>Heure de Prévelement</th>
          <th>Date de création</th>
        </tr>
        {array}
    </table>
  </div>
  );
}

export default App;
