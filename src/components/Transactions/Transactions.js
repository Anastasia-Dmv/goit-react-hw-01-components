import React from 'react';
import PropTypes from 'prop-types'; 
import style from './transactions.module.css';
 

const TransactionHistory =({items})=>{
    // const {id, type, amount, currency} = items;
    return (

<table className={style.transactionHistory}>
  <thead className={style.head} >
    <tr >
      <th className={style.type} >Type</th>
      <th className={style.type}>Amount</th>
      <th className={style.type}>Currency</th>
    </tr>
  </thead>

  <tbody className={style.tableBody}>
      {items.map(({id, type, amount, currency })=>(

          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>

))}


</tbody>
</table>
    )
}
 export default  TransactionHistory;

 TransactionHistory.propTypes= {

   

        id: PropTypes.string,
       type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.number,
    
 }