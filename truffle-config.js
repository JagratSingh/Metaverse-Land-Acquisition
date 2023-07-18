require("dotenv").config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
	networks: {
		// development: {
		// 	host: "127.0.0.1",
		// 	port: 7545,
		// 	network_id: "5777" // Match any network id
		// }
		sepolia: {
			provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
			network_id: "11155111",
			gas: 4465030,
		  }
	},

	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.9',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
}