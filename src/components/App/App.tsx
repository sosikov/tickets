import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tickets from '../Tickets/Tickets';
import Tabs from '../Tabs/Tabs';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import './App.scss';
import { tabs } from '../../utils/config';
import { BASE_URL } from '../../utils/api';

const getSearchId = async () => {
  const response = await axios.get(`${BASE_URL}/search`);
  return response.data.searchId;
}

const getTickets = async (searchId: string) => {
  const response = await axios.get(`${BASE_URL}/tickets?searchId=${searchId}`);
  console.log(`response`, response);
  // try .. catch
}

const App = () => {
  console.log(`#render App`);
  const [activeTab, setActiveTab] = useState('0');

  useEffect(() => {
    (async () => {
      const searchId = await getSearchId();
      const tickets = await getTickets(searchId);
    })();
  }, []);
  
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
