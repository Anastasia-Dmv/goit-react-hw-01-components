import React from 'react';
import style from './Statistics.module.css';


const Statistics = ({title, stats}) => {

    return ( 

<section className={style.statistics}>

 {title && <h2 className={style.title}>Upload stats</h2>}

  <ul className={style.statList}>
      {stats.map(stat=>(

    <li className={style.item}  style={{backgroundColor: `#${(Math.random().toString(16)+ '000000').substring(2,8).toUpperCase()}`}} key={stat.id}>
      <span className={style.label}>{stat.label}</span>
      <span className={style.percentage}>{stat.percentage}%</span>
    </li>)
      )}
   
  </ul>
</section>

    )
};


 export default Statistics;

