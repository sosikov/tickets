import React, { useState, useEffect } from 'react';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import './App.scss';
import { tabs } from '../../utils/config';
import { getSearchId, getTickets, clearSearchId } from '../../utils/api';

const App = () => {
  const [activeTab, setActiveTab] = useState('0');
  const [resultTickets, setResultTickets] = useState([]);
  console.log(`#render App`, resultTickets);

  useEffect(() => {
    (async () => {
      try {
        const searchId = await getSearchId();
        const { tickets, stop } = await getTickets(searchId);

        if (!stop) setResultTickets(resultTickets.concat(tickets));
      } catch (e) {
        clearSearchId();
        setResultTickets([]);
      }
    })();
  }, [resultTickets]);
  
  return (
    <div className='app_root'>
      <Logo/>
      <div className='app__container'>
        <div className='app__filters'>
          <Filters/>
        </div>
        <div className='app__tickets'>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
          <Tickets/>
        </div>
      </div>
    </div>
  )
}

export default App;
