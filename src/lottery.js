import web3 from './web3'



// we get this value from solc compiler
const abi = [{"constant":true,"inputs":[],"name":"getPlayer","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

// we get this when we deploy contract in deploy.js
const address = '0x692CEcB524Fc51C7826d61059D058FDC0CC8a65C'

// we export our contract copy so the rest of the app can use
export default new web3.eth.Contract(abi, address) //exports a complete copy of contract
