import Web3 from 'web3'

// to inject the Metamask provider into our web3 instance, we pass it as the argument to 
// new web3 instance creation.
// Note: window.ethereum.enable() adheeres to Metamask new privacy feature
const web3 = new Web3(window.ethereum);
window.ethereum.enable();

export default web3;

