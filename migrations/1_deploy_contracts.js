const Land = artifacts.require("Land")

module.exports = async function (deployer) {
    const NAME = 'Multiverse'
    const SYMBOL = 'MUL'
    const COST = web3.utils.toWei('0.01', 'ether')

    await deployer.deploy(Land, NAME, SYMBOL, COST)
}
