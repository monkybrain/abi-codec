const { encodeInput, decodeOutput } = require('../index')
const jsonInterface = require('./interface.json')

describe('Abi Coder', () => {

  test('Should encode input', () => {
    const namehash = '0x78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9' // 32 byte name hash for 'ethereum.eth'
    const input = encodeInput(jsonInterface, 'resolver', [namehash])
    const expectedInput = '0x0178b8bf78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9'
    expect(input).toEqual(expectedInput)
  })

  test('Should decode output', () => {
    const data = '0x0178b8bf78c5b99cf4668cf6da387866de4331c78b75b7db0087988c552f73e1714447b9'
    const outputs = decodeOutput(jsonInterface, 'resolver', data)
    // const expectedOutput = '0x1da022710dF5002339274AaDEe8D58218e9D6AB5'
    const expectedOutput = '0xDA387866DE4331c78B75b7DB0087988c552F73e1'
    expect(outputs[0]).toEqual(expectedOutput)
  })

})
