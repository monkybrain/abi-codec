# abi-codec

Encodes and decodes Ethereum Contract ABI. Based on [web3-eth-abi](https://web3js.readthedocs.io/en/1.0/web3-eth-abi.html).

### Install
```
npm install abi-codec
yarn add abi-codec
```

### Methods

**encodeInput(jsonInterface, method, params) -> data**
- jsonInterface: `Object`
- method: `String`
- params: `Array`

**decodeOutput(jsonInterface, method, output) -> [data]** 
- jsonInterface: `Object`
- method: `String`
- output: `String`


### Usage
```javascript

// Example using an abbreviated JSON interface for the ENS registrar contract

const codec = require('abi-codec')

jsonInterface = [
  {
    "constant": true
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      }
    ]
    "name": "resolver",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ]
  }
  ...
]

// Encode input for JSON RPC method `eth_call`
const hash = '0x78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9' // 32 byte name hash for 'ethereum.eth'
encodeInput(jsonInterface, 'resolver', [namehash])
// -> 0x0178b8bf78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9

// Decode output from JSON RPC method `eth_call`
const output = '0x0178b8bf78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9'
decodeOutput(jsonInterface, 'resolver', output)
// -> [ '0x1da022710dF5002339274AaDEe8D58218e9D6AB5' ]

```