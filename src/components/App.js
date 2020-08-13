import React   from 'react';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from'../statisticalData.json';
import FriendList from './FriendsList/FriendsList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import TransactionHistory from './Transactions/Transactions';

const App = () => {
    return ( 
    
    <>
    <Profile  user={user}/>
    <Statistics title="Upload stats" stats={statisticalData}/>
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />,

        </>
    );
}
export default App;