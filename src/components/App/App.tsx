import React from 'react';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import './App.scss';

const App = () => {
  console.log(`#render App`);
  
  return (
    <div className='app_root'>
      <Logo/>
      <div className='app__container'>
        <div className='app__filters'>
          <Filters/>
        </div>
        <div className='app__tickets'>
          <Tabs/>
          <Tickets/>
        </div>
      </div>
    </div>
  )
}

export default App;
