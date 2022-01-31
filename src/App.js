
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
  state = {
    showBalance: true,
    balance: 1000,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99 
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 3599.99 
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1 
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.2 
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 298.99 
      }
      // <Coin name="Bitcoin" ticker="BTC" price={45999.99}/>
      // <Coin name="Ethereum" ticker="ETH" price={3599.99}/>
      // <Coin name="Tether" ticker="USDT" price={1}/>
      // <Coin name="Ripple" ticker="XRP" price={0.2}/>
    ]
  }
toggleShowBalance = () => {
  this.setState(function(oldState)  {
    return {
      ...oldState,
      showBalance: !oldState.showBalance
    }
  });
}

handleRefresh = (valueChangeTicker) => {
const newCoinData = this.state.coinData.map(function( values )  {
  let newValues = {...values};
  let newPrice = values.price;
  if ( valueChangeTicker === values.ticker) {
    const randomPercentage = 0.995 + Math.random() * 0.01;
    
      newValues.price *= randomPercentage;
      }
      return newValues
  });
this.setState({ coinData: newCoinData});
}


  render() {

    return (
      <Div className="App">
        <ExchangeHeader  />
        
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} toggleShowBalance={this.toggleShowBalance}/>
        <CoinList coinData={this.state.coinData} 
        showBalance={this.state.showBalance} 
        handleRefresh={this.handleRefresh} />
      </Div>
    );
  }



  }
    
  

export default App;
