import React, {useEffect, useState} from 'react';
import Switches from './Switches';
import './App.css';

const App = () => {
  const [switches, setSwitches] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://nta0cljdo0.execute-api.us-east-1.amazonaws.com/dev/api/switches';
    fetch(apiUrl, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      setSwitches(data.data);
    })
  }, [])

  function remove(item) {
    const apiUrl = 'https://nta0cljdo0.execute-api.us-east-1.amazonaws.com/dev/api/switches/';
    const name = item.name;
    fetch(apiUrl + name, {
      method: 'DELETE',
    })
    fetch(apiUrl, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      setSwitches(data.data);
    })
  }

  return (
    <div className="whole">
      <div className="titlebox">
              <h1>Switches List</h1>
      </div>
      <div className="switches">
        {switches.map((item) => (
          <Switches item={item} remove={remove}/>
        ))
        }
      </div>  
    </div>  
  )
}

export default App;