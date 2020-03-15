import React from 'react';
import './Tabs.scss';
import { TComponentTabs } from '../../utils/interfaces';

const Tabs: React.FC<TComponentTabs> = ({tabs, activeTab, setActiveTab}) => {
  console.log(`#render Tabs`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(e.target.value);
  }

  return (
    <div className='tabs'>

      {
        tabs.map(tab => {
          return (
            <div className='tabs__item' key={tab.value}>
              <input className='tabs__input' type='radio' name='tab' id={tab.value} value={tab.value} checked={activeTab === tab.value} onChange={handleChange}/>
              <label className='tabs__label' htmlFor={tab.value}>{tab.label}</label>
            </div>
          )
        })
      }
      
      {/* <div className='tabs__item'>
        <input className='tabs__input' type='radio' name='tab' id='1' value='1' checked/>
        <label className='tabs__label' htmlFor='1'>Самый дешевый</label>
      </div>
      <div className='tabs__item'>
        <input className='tabs__input' type='radio' name='tab' id='2' value='2'/>
        <label className='tabs__label' htmlFor='2'>Самый быстрый</label>
      </div> */}

    </div>
  )
}

export default Tabs;
