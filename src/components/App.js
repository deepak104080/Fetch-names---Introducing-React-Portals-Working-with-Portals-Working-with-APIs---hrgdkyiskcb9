import React from 'react'
import '../styles/App.css';
import { useEffect , useState } from 'react';

/**
 * @task : fetch data from the api, and show to frontend.  
 * @url : https://jsonplaceholder.typicode.com/users
 * @output : show the names of users to frontend like below. 
 * 0. Leanne Graham
1. Ervin Howell
2. Clementine Bauch
3. Patricia Lebsack
4. Chelsey Dietrich
5. Mrs. Dennis Schulist
6. Kurtis Weissnat
 */

function App() {

  const [data, setData] = useState([]);

  /**
   * fetch data from api on mount. 
   */

  return (
  <div className='App'>
    { data.map((_data, i) => <p key={_data.id}>{i}.&nbsp;{_data.name}</p>) }
  </div>
  ); 
}
/**
 * @task1 : fetch data from this api and show to ui ;
 * 
 */
export default App;