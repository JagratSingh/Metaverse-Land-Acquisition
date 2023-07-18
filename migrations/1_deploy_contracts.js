const Land = artifacts.require("Land")

module.exports = async function (deployer) {
    const NAME = 'Multiverse Land Acquisition'
    const SYMBOL = 'MLA'
    const COST = web3.utils.toWei('0.01', 'ether')

    await deployer.deploy(Land, NAME, SYMBOL, COST)
}
