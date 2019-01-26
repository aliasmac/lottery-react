import React, { Component } from 'react';

import './App.css';
import web3 from './web3'
import lottery from './lottery'

class App extends Component {

  state = {
    manager: '',
    players: [],
    balance: '',
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call() // whenever we are making use of metamask provider, we don't need to specify { from: accounts[0] }
    const players = await lottery.methods.getPlayer().call()
    const balance = await web3.eth.getBalance(lottery.options.address) // return value is an {} wrapped in a library called big number js
    
    this.setState({manager, players, balance})
  }

  render() {
    // window.ethereum.enable().then(web3.eth.getAccounts()).then(console.log);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
          There are currently {this.state.players.length} people entered, 
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
      </div>
    );
  }
}

export default App;
