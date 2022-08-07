const { ethers } = require('ethers')

const { abi } = require('./MetaPhase.json')
const { alchemy, privateKey } = require('./config.json')

const phase_address = "0xd2d6ca3d352d1bbae1ff49a89c6320f5c6f90b9b"

const provider = new ethers.providers.JsonRpcProvider(alchemy)
const signer = new ethers.Wallet(privateKey, provider);
const phase = new ethers.Contract(phase_address, abi, signer)

exports.phase = phase