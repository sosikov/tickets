import React from 'react';
import './Tabs.scss';

const Tabs = () => {
  return (
    <div className='tabs'>
      
      <div className='tabs__item'>
        <input className='tabs__input' type='radio' name='tab' id='1' value='1'/>
        <label className='tabs__label' htmlFor='1'>Самый дешевый</label>
      </div>
      <div className='tabs__item'>
        <input className='tabs__input' type='radio' name='tab' id='2' value='2'/>
        <label className='tabs__label' htmlFor='2'>Самый быстрый</label>
      </div>

    </div>
  )
}

export default Tabs;
