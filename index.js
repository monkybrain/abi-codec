const AbiCoder = require('web3-eth-abi')

/*** PUBLIC ***/
exports.encodeInput = (contractABI, method, params) => {

  // Get method ABI
  const methodABI = getMethodABI(contractABI, method)

  // Return encoded input
  return AbiCoder.encodeFunctionCall(methodABI, params)
}

exports.decodeOutput = (contractABI, method, output) => {

  // Get method ABI
  const methodABI = getMethodABI(contractABI, method)

  // Get, downcase and return output(s)
  const outputs = AbiCoder.decodeParameters(methodABI.outputs, output)
  return outputs.map( (output) => output.toLowerCase() )

}

/*** PRIVATE ***/
const getMethodABI = (contractABI, method) => {

  // Find method by name
  const methodABI = contractABI.find(x => x.name === method)

  // If not found -> throw error
  if (methodABI === undefined) {
    throw new Error(`Invalid method name: '${method}'`)
  }

  // Return method ABI
  return methodABI

}

jsonInterface = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "node",
        "type": "bytes32"
      }
    ],
    "name": "resolver",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ]
  }
]

// Encode input for JSON RPC method `eth_call`
const namehash = '0x78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9' // 32 byte name hash for 'ethereum.eth'
console.log(exports.encodeInput(jsonInterface, 'resolver', [namehash]))