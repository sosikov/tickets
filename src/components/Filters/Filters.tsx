import React from 'react';
import './Filters.scss';

const Filters = () => {
  return (
    <div className='filters'>
      <span className='filters__title'>Количество пересадок</span>

      <div className='filters__item'>
        <label className='filters__label'>
          <input className='filters__input' type='checkbox'/>
          <div className='filters__checkbox'></div>
          <span className='filters__name'>Все</span>
        </label>
      </div>
      <div className='filters__item'>
        <label className='filters__label'>
          <input className='filters__input' type='checkbox' checked/>
          <div className='filters__checkbox'></div>
          <span className='filters__name'>Без пересадок</span>
        </label>
      </div>
      <div className='filters__item'>
        <label className='filters__label'>
          <input className='filters__input' type='checkbox'/>
          <div className='filters__checkbox'></div>
          <span className='filters__name'>1 пересадка</span>
        </label>
      </div>
      <div className='filters__item'>
        <label className='filters__label'>
          <input className='filters__input' type='checkbox'/>
          <div className='filters__checkbox'></div>
          <span className='filters__name'>2 пересадки</span>
        </label>
      </div>
      <div className='filters__item'>
        <label className='filters__label'>
          <input className='filters__input' type='checkbox'/>
          <div className='filters__checkbox'></div>
          <span className='filters__name'>3 пересадки</span>
        </label>
      </div>

    </div>
  )
}

export default Filters;
