import React from 'react';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import './App.scss';

const App = () => {
  return (
    <div className='app__container'>
      <div className='app__filters'>
        <Filters/>
      </div>
      <div className='app__tickets'>
        <Tabs/>
        <Tickets/>
      </div>
    </div>
  )
}

export default App;
