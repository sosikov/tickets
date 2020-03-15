import React from 'react';
import './Tickets.scss';

const Tickets = () => {
  console.log(`#render Tickets`);

  return (
    <div className='tickets'>

      <div className='tickets__item'>
        <table className='tickets__table'>
          <thead>
            <tr>
              <td colSpan={2} className='tickets__price'>13 400 P</td>
              <td><img className='tickets__logo' src='//pics.avs.io/99/36/TG.png' alt='TG'/></td>
            </tr>
          </thead>
          <tbody className='tickets__table-body'>
            <tr className='tickets__row'>
              <td className='tickets__cell'>
                <span className='tickets__label'>MOW – HKT</span>
                <span className='tickets__text'>10:45 – 08:00</span>
              </td>
              <td className='tickets__cell'>
                <span className='tickets__label'>В пути</span>
                <span className='tickets__text'>21ч 15м</span>
              </td>
              <td className='tickets__cell'>
                <span className='tickets__label'>2 пересадки</span>
                <span className='tickets__text'>HKG, JNB</span>
              </td>
            </tr>
          </tbody>
          <tbody className='tickets__table-body'>
            <tr className='tickets__row'>
              <td className='tickets__cell'>
                <span className='tickets__label'>MOW – HKT</span>
                <span className='tickets__text'>10:45 – 08:00</span>
              </td>
              <td className='tickets__cell'>
                <span className='tickets__label'>В пути</span>
                <span className='tickets__text'>21ч 15м</span>
              </td>
              <td className='tickets__cell'>
                <span className='tickets__label'>2 пересадки</span>
                <span className='tickets__text'>HKG, JNB</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tickets;
