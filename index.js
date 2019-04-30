const { AbiCoder } = require('web3-eth-abi')

const codec = new AbiCoder()

/* PRIVATE */
const getMethodABI = (contractABI, method) => {
  
  // Find method by name
  const methodABI = contractABI.find(x => x.name === method)
  
  // If not found -> throw error
  if (methodABI === undefined) {
    throw new Error(`Invalid method name: '${name}'`)
  }
  
  // Return method ABI
  return methodABI
  
}

/* PUBLIC */
exports.encodeInput = (contractABI, method, params) => {
  
  // Get method ABI
  const methodABI = getMethodABI(contractABI, method)
  
  // Return encoded input
  return codec.encodeFunctionCall(methodABI, params)
}

exports.decodeOutput = (contractABI, method, output) => {

  // Get method ABI
  const methodABI = getMethodABI(contractABI, method) 

  // Return decoded output
  return codec.decodeParameters(methodABI.outputs, output)

}

module.exports = { encodeInput, decodeOutput }