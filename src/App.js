
import React from 'react';
import CoinList from './components/Coin/CoinList/CoinList';
import AccountBalance from './components/Coin/AccountBalance/AccountBalance';
import ExchangeHeader from './components/Coin/CoinList/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div `
text-align: center;
background-color: rgb(0, 0, 0);
color: rgb(8, 168, 8);

`

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    balance: 1000,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.99 
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 3599.99 
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        price: 1 
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        price: 0.2 
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        price: 298.99 
      }
      // <Coin name="Bitcoin" ticker="BTC" price={45999.99}/>
      // <Coin name="Ethereum" ticker="ETH" price={3599.99}/>
      // <Coin name="Tether" ticker="USDT" price={1}/>
      // <Coin name="Ripple" ticker="XRP" price={0.2}/>
    ]
  }
}

  render() {

    return (
      <Div className="App">
        <ExchangeHeader  />
        
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }



  }
    
  

export default App;
