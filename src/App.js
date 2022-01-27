import './App.css';
import React from 'react';
import Coin from './components/Coin/Coin';
import logo from './logo.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='React logo' className='App-logo'/>
        <h1 className='App-title'>
          Coin Exchange
          </h1>
      </header>
      <table className='coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={45999.99}/>
          <Coin name="Ethereum" ticker="ETH" price={3599.99}/>
          <Coin name="Tether" ticker="USDT" price={1}/>
          <Coin name="Ripple" ticker="XRP" price={0.2}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
