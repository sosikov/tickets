import React from 'react';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import './App.scss';

const App = () => {
  return (
    <div>
      <Tickets/>
      <Tabs/>
      <br/>
      <Filters/>
    </div>
  )
}

export default App;
