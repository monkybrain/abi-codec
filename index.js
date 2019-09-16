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
  const outputsObject = AbiCoder.decodeParameters(methodABI.outputs, output)
  let outputs = []
  for (let i = 0; i < outputsObject.__length__; i++) {
    outputs.push(outputsObject[i])
  }

  return outputs
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
