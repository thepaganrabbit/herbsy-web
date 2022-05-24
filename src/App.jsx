import React, { useEffect } from 'react'
import './App.scss'
import SystemRoutes from './routes/SystemRoutes'
import Store from './store/Store'

function App() {
  const {dispatch } = Store;
  useEffect(() => {
    dispatch({type: 'TestMod/addUserAges', payload: [23, 43] });
  }, [])
  return (
    <div className="App">
      <div>{Store.getState().TestMod.ages.map(age => <h2 key={age.toString()}>{age}</h2>)}</div>
        <SystemRoutes />
    </div>
  )
}

export default App
